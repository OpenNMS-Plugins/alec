<script setup lang="ts">
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import SituationListBtn from '@/elements/SituationListBtn.vue'
import { FeatherCheckbox } from '@featherds/checkbox'
import { FeatherInput } from '@featherds/input'
import { FeatherTextarea } from '@featherds/textarea'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import Help from '@featherds/icon/action/Help'
import Restore from '@featherds/icon/action/Restore'
import { FeatherIcon } from '@featherds/icon'
import CONST from '@/helpers/constants'
import { useUserStore } from '@/store/useUserStore'
import { computed, markRaw, onMounted, ref } from 'vue'
import { FeatherButton } from '@featherds/button'
import { FeatherSnackbar } from '@featherds/snackbar'
import {
	closeAllOpenSituations,
	reEvaluateAllOpenAlarms,
	validateLLMConfig
} from '@/services/AlecService'
import { TLLMConfigRequest, TLLMValidationResult } from '@/types/TUser'

// Humanize a token count for display: 1234567 -> "1.2M", 4800 -> "4.8K".
// Raw count goes into the title attribute for hover.
const humanizeTokens = (n: number): string => {
	if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
	if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
	return String(n)
}

const formatUsd = (n: number): string => {
	if (n < 0.01) return '~$0.00'
	return '~$' + n.toFixed(2)
}

const Icons = markRaw({
	MarkComplete,
	Help,
	Restore
})

const ENGINE_DEFAULTS = {
	alpha: 145,
	beta: 0.55,
	epsilon: 150,
	hellingerW: 4851.28,
	hellingerBias: -1986.00
}

const userStore = useUserStore()
const engineName = ref(userStore.engineInfo?.engineName || CONST.ENGINE_DBSCAN)
// Hellinger is the system default on a fresh install (no saved config).
// If a saved config exists, honour what's persisted.
const hellinger = ref(
	userStore.engineInfo
		? userStore.engineInfo.distanceMeasureName === CONST.HELLINGER_OPTION
		: true
)
const alpha = ref(userStore.engineInfo?.alpha ?? ENGINE_DEFAULTS.alpha)
const beta = ref(userStore.engineInfo?.beta ?? ENGINE_DEFAULTS.beta)
const epsilon = ref(userStore.engineInfo?.epsilon ?? ENGINE_DEFAULTS.epsilon)
const hellingerW = ref(
	userStore.engineInfo?.hellingerW ?? ENGINE_DEFAULTS.hellingerW
)
const hellingerBias = ref(
	userStore.engineInfo?.hellingerBias ?? ENGINE_DEFAULTS.hellingerBias
)

const isClustering = computed(() => engineName.value === CONST.ENGINE_DBSCAN)
const showHellingerVars = computed(() => isClustering.value && hellinger.value)

// LLM integration (ALEC-299). API key is write-only from the UI; the
// server returns only `apiKeyPresent` so a stored key is never echoed back.
const llmEnabled = ref(userStore.llmConfig?.enabled ?? false)
// Auto-evaluate default true matches server-side (preserves existing automatic
// behavior). When false, new situations get no LLM call until the user clicks
// Re-evaluate on the AI Suggestions tab.
const llmAutoEvaluate = ref(userStore.llmConfig?.autoEvaluate ?? true)
// OpenAI-compatible endpoint + model. Defaults mirror the server: Anthropic's
// own OpenAI-compatible Claude API. NOTE the model id is Anthropic's native
// spelling `claude-sonnet-4-6` (dashes, no `anthropic/` vendor prefix) — that
// prefixed/dotted form is OpenRouter-only and is rejected by api.anthropic.com.
// Keep these two constants in sync with LlmConfigImpl.DEFAULT_BASE_URL/MODEL.
const LLM_DEFAULT_BASE_URL = 'https://api.anthropic.com/v1/'
const LLM_DEFAULT_MODEL = 'claude-sonnet-4-6'
const llmBaseUrl = ref(userStore.llmConfig?.baseUrl ?? LLM_DEFAULT_BASE_URL)
const llmModel = ref(userStore.llmConfig?.model ?? LLM_DEFAULT_MODEL)
// The system prompt is editable. The server hands us both the effective prompt
// (stored or default) and the canonical default — we hold the default so the
// Reset button doesn't need the long text hard-coded here. Until the config
// loads we fall back to empty strings; onMounted hydrates both.
const llmSystemPrompt = ref(userStore.llmConfig?.systemPrompt ?? '')
const llmDefaultSystemPrompt = ref(userStore.llmConfig?.defaultSystemPrompt ?? '')
// True once we know the default and the textarea has been edited away from it —
// drives the enabled state of the Reset button.
const llmSystemPromptIsCustom = computed(
	() =>
		llmDefaultSystemPrompt.value.length > 0 &&
		llmSystemPrompt.value.trim() !== llmDefaultSystemPrompt.value.trim()
)
const resetSystemPromptToDefault = () => {
	llmSystemPrompt.value = llmDefaultSystemPrompt.value
}
// Endpoint and Model can drift to a bad value (e.g. a local server that's no
// longer running, or a typo'd model id). These let the user snap each field
// back to the shipped Anthropic Claude default to recover from a glaring
// misconfiguration, mirroring the system-prompt reset above.
const llmBaseUrlIsCustom = computed(
	() => llmBaseUrl.value.trim() !== LLM_DEFAULT_BASE_URL
)
const llmModelIsCustom = computed(
	() => llmModel.value.trim() !== LLM_DEFAULT_MODEL
)
const resetBaseUrlToDefault = () => {
	llmBaseUrl.value = LLM_DEFAULT_BASE_URL
}
const resetModelToDefault = () => {
	llmModel.value = LLM_DEFAULT_MODEL
}
const llmApiKey = ref('')
const llmApiKeyPresent = ref(userStore.llmConfig?.apiKeyPresent ?? false)
const llmApiKeyCleared = ref(false)

// Validate (test) the endpoint/model/key without saving.
const llmValidating = ref(false)
const llmValidationResult = ref<TLLMValidationResult | null>(null)

// True when there's no key the server could test — none typed and none stored.
const llmCannotValidate = computed(
	() =>
		llmApiKey.value.trim().length === 0 &&
		(!llmApiKeyPresent.value || llmApiKeyCleared.value)
)

const validateLlm = async () => {
	llmValidationResult.value = null
	llmValidating.value = true
	try {
		// Send the current form values. Send the typed key if present; otherwise
		// omit it so the server validates the already-stored key.
		const req: TLLMConfigRequest = {
			enabled: llmEnabled.value,
			autoEvaluate: llmAutoEvaluate.value,
			baseUrl: llmBaseUrl.value.trim(),
			model: llmModel.value.trim()
		}
		const typedKey = llmApiKey.value.trim()
		if (typedKey.length > 0) {
			req.apiKey = typedKey
		}
		llmValidationResult.value = await validateLLMConfig(req)
	} finally {
		llmValidating.value = false
	}
}

// True when there's nothing the server could persist as a key — neither one
// already stored nor one freshly typed. The Enable checkbox guards on this to
// stop the user from saving an enabled-but-keyless config the server will reject.
const llmNoKeyAvailable = computed(
	() =>
		(!llmApiKeyPresent.value || llmApiKeyCleared.value) &&
		llmApiKey.value.trim().length === 0
)

const clearLLMApiKey = () => {
	llmApiKey.value = ''
	llmApiKeyCleared.value = true
	llmApiKeyPresent.value = false
	llmEnabled.value = false
}

const showHelp = ref(false)
const showLLMKeyHelp = ref(false)
const showNotification = ref(false)
const isError = ref(false)
const message = ref('')

const showUsageDetails = ref(false)

onMounted(async () => {
	// engineInfo is usually pre-populated by the app shell; the LLM config
	// has no such pre-load, so fetch it here on first render.
	if (userStore.llmConfig === null) {
		const result = await userStore.getLLMConfig()
		if (result) {
			llmEnabled.value = result.enabled
			llmAutoEvaluate.value = result.autoEvaluate
			llmBaseUrl.value = result.baseUrl || LLM_DEFAULT_BASE_URL
			llmModel.value = result.model || LLM_DEFAULT_MODEL
			llmDefaultSystemPrompt.value = result.defaultSystemPrompt || ''
			llmSystemPrompt.value =
				result.systemPrompt || result.defaultSystemPrompt || ''
			llmApiKeyPresent.value = result.apiKeyPresent
		}
	}
	// Fetch the usage rollup once on mount; refreshed after every successful save.
	await userStore.getLLMUsage(30)
})

const resetVariablesToDefaults = () => {
	alpha.value = ENGINE_DEFAULTS.alpha
	beta.value = ENGINE_DEFAULTS.beta
	epsilon.value = ENGINE_DEFAULTS.epsilon
	hellingerW.value = ENGINE_DEFAULTS.hellingerW
	hellingerBias.value = ENGINE_DEFAULTS.hellingerBias
}

const notify = (msg: string, error: boolean) => {
	message.value = msg
	isError.value = error
	showNotification.value = true
}

const buildLLMRequest = (): TLLMConfigRequest => {
	if (llmApiKeyCleared.value) {
		// Clearing wins regardless of any text in the input — server forces enabled=false.
		// Carry the user's autoEvaluate / endpoint / model preferences through so
		// re-enabling later doesn't surprise them with different defaults.
		return {
			enabled: false,
			autoEvaluate: llmAutoEvaluate.value,
			baseUrl: llmBaseUrl.value.trim(),
			model: llmModel.value.trim(),
			systemPrompt: llmSystemPrompt.value,
			clearApiKey: true
		}
	}
	const trimmedKey = llmApiKey.value.trim()
	const request: TLLMConfigRequest = {
		enabled: llmEnabled.value,
		autoEvaluate: llmAutoEvaluate.value,
		baseUrl: llmBaseUrl.value.trim(),
		model: llmModel.value.trim(),
		systemPrompt: llmSystemPrompt.value
	}
	if (trimmedKey.length > 0) {
		request.apiKey = trimmedKey
	}
	return request
}

const saveConfiguration = async () => {
	// Saving with the integration enabled means ALEC will start sending alarm
	// data to the configured LLM endpoint and billing against the stored key.
	// Warn before that first request can fire. Skipped when the key is being
	// cleared (the server forces enabled=false in that case) or when local —
	// a local endpoint (e.g. LM Studio at 127.0.0.1 / localhost) bills nothing.
	const willEnableLlm = llmEnabled.value && !llmApiKeyCleared.value
	const isLocalEndpoint = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
		llmBaseUrl.value
	)
	if (willEnableLlm && !isLocalEndpoint) {
		if (
			!window.confirm(
				'LLM Root Cause Analysis is enabled.\n\n' +
					'ALEC will send each new situation to the configured LLM endpoint ' +
					`(${llmBaseUrl.value.trim()}, model ${llmModel.value.trim()}). ` +
					'This calls a third-party provider with your API key and may incur ' +
					'usage charges billed by that provider. You are responsible for any ' +
					'costs on the associated account.\n\n' +
					'Continue and save?'
			)
		) {
			return
		}
	}
	const overrides: {
		alpha: number
		beta: number
		epsilon: number
		hellingerW?: number
		hellingerBias?: number
	} = {
		alpha: Number(alpha.value),
		beta: Number(beta.value),
		epsilon: Number(epsilon.value)
	}
	if (hellinger.value) {
		overrides.hellingerW = Number(hellingerW.value)
		overrides.hellingerBias = Number(hellingerBias.value)
	}
	const savedEngine = await userStore.setEngineInfo(
		engineName.value,
		hellinger.value,
		overrides
	)
	const savedLLM = await userStore.setLLMConfig(buildLLMRequest())

	// After a successful LLM save the typed key is now stored server-side;
	// scrub the input + cleared flag so the next save is a no-op rather than
	// re-sending the same secret over the wire.
	if (savedLLM) {
		llmApiKey.value = ''
		llmApiKeyCleared.value = false
		llmApiKeyPresent.value = userStore.llmConfig?.apiKeyPresent ?? false
		llmEnabled.value = userStore.llmConfig?.enabled ?? false
		llmAutoEvaluate.value = userStore.llmConfig?.autoEvaluate ?? true
		llmBaseUrl.value = userStore.llmConfig?.baseUrl ?? LLM_DEFAULT_BASE_URL
		llmModel.value = userStore.llmConfig?.model ?? LLM_DEFAULT_MODEL
		if (userStore.llmConfig?.defaultSystemPrompt) {
			llmDefaultSystemPrompt.value = userStore.llmConfig.defaultSystemPrompt
		}
		llmSystemPrompt.value =
			userStore.llmConfig?.systemPrompt ?? llmSystemPrompt.value
		// Refresh the usage rollup — enabling/disabling doesn't generate calls
		// immediately, but the next render should reflect any usage that
		// arrived since the page loaded.
		userStore.getLLMUsage(30)
	}

	if (savedEngine && savedLLM) {
		userStore.getEngineInfo()
		notify('The settings were saved!', false)
	} else if (savedEngine && !savedLLM) {
		notify(
			'Engine settings saved, but LLM configuration could not be saved (an API key is required to enable the integration).',
			true
		)
	} else {
		notify('Error on saving the settings', true)
	}
}

const handleCloseAllSituations = async () => {
	if (
		!window.confirm(
			'Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone.'
		)
	) {
		return
	}
	const ok = await closeAllOpenSituations()
	notify(
		ok ? 'All open situations were closed.' : 'Failed to close situations.',
		!ok
	)
}

const handleReEvaluate = async () => {
	if (
		!window.confirm(
			'Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms.'
		)
	) {
		return
	}
	const ok = await reEvaluateAllOpenAlarms()
	notify(
		ok
			? 'Engine re-initialized. Alarms are being re-evaluated.'
			: 'Failed to re-evaluate alarms.',
		!ok
	)
}
</script>
<template>
	<SituationListBtn />
	<div class="container">
		<h3 data-test="page-title">Correlation Engine Configuration Page</h3>

		<div class="section">
			<div class="title">
				Choose the correlation engine that ALEC will use (see
				<a target="_blank" :href="CONST.URL_DOCUMENTATION"
					>Correlation Engines documentation</a
				>
				for more information):
			</div>
			<FeatherRadioGroup vertical v-model="engineName" label="" hideLabel>
				<FeatherRadio class="radio-item" :value="CONST.ENGINE_DBSCAN"
					>Clustering</FeatherRadio
				>
				<FeatherCheckbox
					v-model="hellinger"
					:disabled="!isClustering"
					class="checkbox"
				>
					<div class="hellinger">
						<strong>Hellinger distance</strong>
					</div>
				</FeatherCheckbox>
				<FeatherRadio
					class="radio-item"
					:value="CONST.ENGINE_LLM"
					disabled
					data-test="engine-llm"
				>
					LLM Based
				</FeatherRadio>
				<div class="caption" data-test="engine-llm-caption">Coming soon</div>
			</FeatherRadioGroup>
		</div>

		<div class="section" data-test="llm-section">
			<div class="title-row">
				<div class="title">LLM Root Cause Analysis</div>
				<button
					type="button"
					class="icon-btn help-icon"
					:aria-expanded="showLLMKeyHelp"
					aria-label="How to get an API key"
					data-test="llm-key-help"
					@click="showLLMKeyHelp = !showLLMKeyHelp"
				>
					<FeatherIcon :icon="Icons.Help" />
				</button>
			</div>
			<div class="llm-help">
				When a new situation is created, ALEC asks a large language model to
				suggest up to 3 probable root causes and 3 possible resolutions based
				on the clustered alarms. Suggestions appear on the situation detail
				page. ALEC talks to any OpenAI-compatible API — the defaults below use
				Anthropic's Claude API directly (<code>https://api.anthropic.com/v1/</code>,
					model <code>claude-sonnet-4-6</code>). The
				endpoint, model and API key are stored on the OpenNMS server and apply
				to all users of this plugin.
			</div>
			<div
				v-if="showLLMKeyHelp"
				class="help-popover"
				data-test="llm-key-help-popover"
			>
				<p class="help-intro">
					ALEC works with any service that speaks the OpenAI-compatible
					<code>/chat/completions</code> API. The two setups below are the ones
					most people use: a hosted provider (Claude, the shipped default) or a
					model running locally on your own hardware (LM Studio). The endpoint,
					model and API key are stored on the OpenNMS server and apply to every
					user of the plugin.
				</p>

				<div class="help-scenario">
					<strong>Option A — Claude via Anthropic (hosted, the default)</strong>
					<p>
						ALEC ships pointed at
						<a
							href="https://www.anthropic.com/api"
							target="_blank"
							rel="noopener noreferrer"
							>Anthropic's Claude API</a
						>. The <em>Reset to default</em> links next to Endpoint and Model
						restore this exact configuration.
					</p>
					<ol>
						<li>
							Create an Anthropic account at
							<a
								href="https://console.anthropic.com/"
								target="_blank"
								rel="noopener noreferrer"
								>console.anthropic.com</a
							>, generate an API key (it starts with <code>sk-ant-</code>), and
							add a payment method.
						</li>
						<li>
							Leave <em>Endpoint</em> at
							<code>https://api.anthropic.com/v1/</code> (ALEC appends
							<code>/chat/completions</code>).
						</li>
						<li>
							Leave <em>Model</em> at <code>claude-sonnet-4-6</code> — Anthropic's
							native model id (dashes, no vendor prefix). The dotted,
							<code>anthropic/claude-sonnet-4.6</code> form is an OpenRouter
							spelling and is rejected by <code>api.anthropic.com</code>.
						</li>
						<li>
							Paste the key below, click <em>Validate key</em>, then
							<em>Save Changes</em>. The key is stored on the OpenNMS server and is
							never returned to the browser. Using a hosted provider bills your
							account per token — see <em>Cost</em> below.
						</li>
					</ol>
					<p class="help-note">
						Prefer a different provider? Set the Endpoint to its base URL and use
						a matching key — an
						<a
							href="https://openrouter.ai/"
							target="_blank"
							rel="noopener noreferrer"
							>OpenRouter</a
						>
						key (<code>sk-or-</code>) for <code>https://openrouter.ai/api/v1</code>
						with a model like <code>anthropic/claude-sonnet-4.6</code>, or an
						OpenAI key for <code>https://api.openai.com/v1</code> with
						<code>gpt-4o</code>.
					</p>
				</div>

				<hr class="help-divider" />

				<div class="help-scenario">
					<strong>Option B — LM Studio (local, free, private)</strong>
					<p>
						Running the model on your own hardware means no data leaves your
						network and there are no provider charges.
						<a
							href="https://lmstudio.ai/"
							target="_blank"
							rel="noopener noreferrer"
							>LM Studio</a
						>,
						<a
							href="https://ollama.com/"
							target="_blank"
							rel="noopener noreferrer"
							>Ollama</a
						>
						and vLLM all expose the same OpenAI-compatible API.
					</p>
					<ol>
						<li>
							In LM Studio, open the <em>Developer</em> tab, load a model that
							supports <em>tool/function calling</em> (for example a recent
							Llama, Qwen, or Gemma instruct model), and toggle the server to
							<em>Running</em>.
						</li>
						<li>
							Set <em>Endpoint</em> to the base URL the server reports — for LM
							Studio that is <code>http://127.0.0.1:1234/v1</code>. The OpenNMS
							server must be able to reach that host and port: if OpenNMS runs on
							a different machine, use the model host's LAN address instead of
							<code>127.0.0.1</code> and enable <em>Serve on Local Network</em>
							in LM Studio.
						</li>
						<li>
							Set <em>Model</em> to the server's model identifier (copy it from
							the loaded-model list), for example
							<code>google/gemma-4-e4b</code>.
						</li>
						<li>
							Local servers ignore the API key but the field must be non-empty —
							paste any placeholder such as <code>sk-local</code>. Click
							<em>Validate key</em>, then <em>Save Changes</em>.
						</li>
					</ol>
				</div>

				<hr class="help-divider" />

				<strong>Requirements &amp; troubleshooting</strong>
				<ul>
					<li>
						<strong>Tool calling is required.</strong> ALEC forces the model to
						answer by calling a single <code>report_suggestions</code> function.
						A model without function-calling support fails validation with
						<em>model did not call report_suggestions</em> — pick a different
						model.
					</li>
					<li>
						<strong>Reasoning models need room.</strong> Models that "think"
						before answering (Gemma, DeepSeek-R1, the o-series) spend output
						tokens on reasoning first. ALEC requests a generous output budget,
						but on a local server also make sure the model's
						<em>context length</em> is large enough (a small context can cut the
						model off before it emits the tool call). If validation passes but
						situations report <em>model did not call report_suggestions</em>,
						raise the context window or choose a less verbose model.
					</li>
					<li>
						<strong>Cost.</strong> Hosted providers bill per token — a single
						situation is typically a few hundred to a few thousand tokens. Local
						models are free. Track 30-day usage in the panel below after you save.
					</li>
				</ul>
			</div>
			<FeatherCheckbox
				v-model="llmEnabled"
				:disabled="llmNoKeyAvailable"
				class="checkbox"
				data-test="llm-enabled"
			>
				<strong>LLM Enabled Root Cause Analysis</strong>
			</FeatherCheckbox>
			<FeatherCheckbox
				v-model="llmAutoEvaluate"
				:disabled="!llmEnabled"
				class="checkbox sub-checkbox"
				data-test="llm-auto-evaluate"
			>
				Automatically AI Evaluate new situations
				<div class="caption-inline">
					When off, new situations are not analyzed automatically — click
					Re-evaluate on the AI Suggestions tab to trigger an analysis on
					demand.
				</div>
			</FeatherCheckbox>
			<div
				v-if="llmNoKeyAvailable"
				class="caption"
				data-test="llm-no-key-hint"
			>
				Enter an API key to enable.
			</div>
			<div class="llm-field-block">
				<div class="llm-field-header">
					<span class="llm-field-label">Endpoint (OpenAI-compatible base URL)</span>
					<button
						type="button"
						class="llm-prompt-reset"
						:disabled="!llmBaseUrlIsCustom"
						data-test="llm-base-url-reset"
						@click="resetBaseUrlToDefault"
					>
						<FeatherIcon :icon="Icons.Restore" class="reset-inline-icon" />
						Reset to default
					</button>
				</div>
				<FeatherInput
					v-model="llmBaseUrl"
					label="Endpoint (OpenAI-compatible base URL)"
					hideLabel
					data-test="llm-base-url"
					class="llm-text-input"
				/>
			</div>
			<div class="llm-field-block">
				<div class="llm-field-header">
					<span class="llm-field-label">Model</span>
					<button
						type="button"
						class="llm-prompt-reset"
						:disabled="!llmModelIsCustom"
						data-test="llm-model-reset"
						@click="resetModelToDefault"
					>
						<FeatherIcon :icon="Icons.Restore" class="reset-inline-icon" />
						Reset to default
					</button>
				</div>
				<FeatherInput
					v-model="llmModel"
					label="Model"
					hideLabel
					data-test="llm-model"
					class="llm-text-input"
				/>
			</div>
			<div class="llm-prompt-block" data-test="llm-prompt-block">
				<div class="llm-prompt-header">
					<span class="llm-prompt-label">System prompt</span>
					<button
						type="button"
						class="llm-prompt-reset"
						:disabled="!llmSystemPromptIsCustom"
						data-test="llm-prompt-reset"
						@click="resetSystemPromptToDefault"
					>
						<FeatherIcon :icon="Icons.Restore" class="reset-inline-icon" />
						Reset to default
					</button>
				</div>
				<div class="llm-prompt-help">
					Instructions sent to the model for every analysis. Customize it to add
					site-specific context (your topology, naming conventions, escalation
					policy, vendors in use). Leave it as the default, or clear it to fall
					back to the default. The situation's alarms are appended automatically —
					don't paste alarm data here.
				</div>
				<FeatherTextarea
					v-model="llmSystemPrompt"
					label="System prompt"
					hideLabel
					rows="12"
					data-test="llm-system-prompt"
					class="llm-prompt-textarea"
				/>
			</div>
			<div class="llm-key-match-hint" data-test="llm-key-match-hint">
				Your API key must come from the same provider as the Endpoint above —
				an Anthropic key (<code>sk-ant-…</code>) for
				<code>api.anthropic.com</code> (the default), an OpenRouter key
				(<code>sk-or-…</code>) for <code>openrouter.ai</code>, or an OpenAI
				key for <code>api.openai.com</code>.
			</div>
			<div class="llm-key-row">
				<FeatherInput
					v-model="llmApiKey"
					type="password"
					autocomplete="new-password"
					:label="
						llmApiKeyPresent && !llmApiKeyCleared
							? 'API key — saved (paste a new key to replace)'
							: 'API key'
					"
					data-test="llm-api-key"
					class="llm-key-input"
				/>
				<FeatherButton
					v-if="llmApiKeyPresent && !llmApiKeyCleared"
					secondary
					data-test="llm-clear-key"
					@click="clearLLMApiKey"
				>
					Clear Key
				</FeatherButton>
			</div>
			<div class="llm-validate-row">
				<FeatherButton
					secondary
					:disabled="llmValidating || llmCannotValidate"
					data-test="llm-validate-btn"
					@click="validateLlm"
				>
					{{ llmValidating ? 'Validating…' : 'Validate key' }}
				</FeatherButton>
				<span
					v-if="llmCannotValidate"
					class="caption"
					data-test="llm-validate-hint"
				>
					Enter an API key to validate.
				</span>
				<span
					v-else-if="llmValidationResult"
					class="llm-validate-result"
					:class="llmValidationResult.ok ? 'is-ok' : 'is-error'"
					data-test="llm-validate-result"
				>
					<FeatherIcon
						:icon="llmValidationResult.ok ? Icons.MarkComplete : Icons.Help"
						class="result-icon"
					/>
					{{ llmValidationResult.message }}
				</span>
			</div>
			<div
				v-if="llmApiKeyPresent && !llmApiKeyCleared"
				class="llm-key-saved"
				data-test="llm-key-saved"
			>
				<FeatherIcon :icon="Icons.MarkComplete" class="saved-icon" />
				<span>
					API key on file. The stored key is never sent back to the browser —
					leave the field blank to keep it, or paste a new one to replace it.
				</span>
			</div>
			<div
				v-if="llmApiKeyCleared"
				class="caption"
				data-test="llm-cleared-hint"
			>
				Stored API key will be removed on save.
			</div>

			<div
				v-if="userStore.llmUsage"
				class="llm-usage"
				data-test="llm-usage"
			>
				<div class="usage-summary">
					<span class="usage-label">Last {{ userStore.llmUsage.daysWindow }} days:</span>
					<span
						class="usage-tokens"
						:title="`${userStore.llmUsage.totalTokens.toLocaleString()} tokens`"
						data-test="llm-usage-tokens"
					>
						{{ humanizeTokens(userStore.llmUsage.totalTokens) }} tokens
					</span>
					<span
						class="usage-cost"
						:title="userStore.llmUsage.pricingNote"
						data-test="llm-usage-cost"
					>
						({{ formatUsd(userStore.llmUsage.estimatedCostUsd) }})
					</span>
					<button
						type="button"
						class="usage-toggle"
						@click="showUsageDetails = !showUsageDetails"
						data-test="llm-usage-toggle"
					>
						{{ showUsageDetails ? 'hide details' : 'show details' }}
					</button>
				</div>
				<dl
					v-if="showUsageDetails"
					class="usage-details"
					data-test="llm-usage-details"
				>
					<div>
						<dt>Input</dt>
						<dd>{{ humanizeTokens(userStore.llmUsage.inputTokens) }}</dd>
					</div>
					<div>
						<dt>Output</dt>
						<dd>{{ humanizeTokens(userStore.llmUsage.outputTokens) }}</dd>
					</div>
					<div>
						<dt>Cache read</dt>
						<dd>{{ humanizeTokens(userStore.llmUsage.cacheReadInputTokens) }}</dd>
					</div>
					<div>
						<dt>Cache create</dt>
						<dd>{{ humanizeTokens(userStore.llmUsage.cacheCreationInputTokens) }}</dd>
					</div>
					<div>
						<dt>Calls</dt>
						<dd>
							{{ userStore.llmUsage.calls }}
							<span class="muted"
								>({{ userStore.llmUsage.successfulCalls }} ok /
								{{ userStore.llmUsage.failedCalls }} failed)</span
							>
						</dd>
					</div>
					<div>
						<dt>Cache hit</dt>
						<dd>{{ (userStore.llmUsage.cacheHitRatio * 100).toFixed(0) }}%</dd>
					</div>
					<div class="pricing-note">
						{{ userStore.llmUsage.pricingNote }}
					</div>
				</dl>
			</div>
		</div>

		<div v-if="isClustering" class="section" data-test="variables-section">
			<div class="title-row">
				<div class="title">Correlation variables</div>
				<button
					type="button"
					class="icon-btn help-icon"
					:aria-expanded="showHelp"
					aria-label="Show help for correlation variables"
					data-test="variables-help"
					@click="showHelp = !showHelp"
				>
					<FeatherIcon :icon="Icons.Help" />
				</button>
				<button
					type="button"
					class="icon-btn reset-icon"
					aria-label="Reset correlation variables to defaults"
					data-test="variables-reset"
					@click="resetVariablesToDefaults"
				>
					<FeatherIcon :icon="Icons.Restore" />
				</button>
			</div>
			<div
				v-if="showHelp"
				class="help-popover"
				data-test="variables-help-popover"
			>
				<ul>
					<li>
						<strong>Alpha (α)</strong> — overall scaling of inter-alarm
						distance. Higher α &rarr; more conservative clustering (fewer
						clusters). <em>Default: {{ ENGINE_DEFAULTS.alpha }}</em>
					</li>
					<li>
						<strong>Beta (β)</strong> — weight between time (β) and topology
						(1−β), in <code>[0, 1]</code>. Higher β emphasises time proximity;
						lower β emphasises topology. <em>Default: {{ ENGINE_DEFAULTS.beta }}</em>
					</li>
					<li>
						<strong>Epsilon (ε)</strong> — DBScan radius. Higher ε clusters more
						aggressively; lower ε produces smaller, tighter clusters.
						<em>Default: {{ ENGINE_DEFAULTS.epsilon }}</em>
					</li>
					<template v-if="showHellingerVars">
						<li data-test="help-hellinger-w">
							<strong>Hellinger w</strong> — variance scaling coefficient used
							by the Hellinger distance measure. Larger values flatten the
							distribution comparison. <em>Default: {{ ENGINE_DEFAULTS.hellingerW }}</em>
						</li>
						<li data-test="help-hellinger-bias">
							<strong>Hellinger bias</strong> — additive offset applied inside
							the Hellinger distance. Tunes the baseline separation between
							alarms. <em>Default: {{ ENGINE_DEFAULTS.hellingerBias }}</em>
						</li>
					</template>
				</ul>
			</div>
			<div class="variables">
				<FeatherInput
					v-model="alpha"
					type="number"
					label="Alpha"
					data-test="variable-alpha"
				/>
				<FeatherInput
					v-model="beta"
					type="number"
					label="Beta"
					data-test="variable-beta"
				/>
				<FeatherInput
					v-model="epsilon"
					type="number"
					label="Epsilon"
					data-test="variable-epsilon"
				/>
				<FeatherInput
					v-if="showHellingerVars"
					v-model="hellingerW"
					type="number"
					label="Hellinger w"
					data-test="variable-hellinger-w"
				/>
				<FeatherInput
					v-if="showHellingerVars"
					v-model="hellingerBias"
					type="number"
					label="Hellinger bias"
					data-test="variable-hellinger-bias"
				/>
			</div>
		</div>
		<div class="action-row">
			<FeatherButton
				secondary
				data-test="close-all-btn"
				@click="handleCloseAllSituations"
			>
				Close All Open Situations
			</FeatherButton>
			<FeatherButton
				secondary
				data-test="reevaluate-btn"
				@click="handleReEvaluate"
			>
				Re-Evaluate All Open Alarms
			</FeatherButton>
			<FeatherButton
				primary
				class="save-btn"
				data-test="save-btn"
				@click="saveConfiguration"
			>
				<FeatherIcon :icon="Icons.MarkComplete" class="icon" />
				<span>Save Changes</span>
			</FeatherButton>
		</div>
		<FeatherSnackbar
			v-model="showNotification"
			right
			:error="isError"
			:timeout="6000"
		>
			{{ message }}
			<template v-slot:button>
				<FeatherButton @click="showNotification = false" text
					>dismiss</FeatherButton
				>
			</template>
		</FeatherSnackbar>
	</div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

.container {
	display: flex;
	padding-top: 20px;
	flex-direction: column;
	border: 1px solid variables.$border-grey;
	background-color: #ffffff;
	min-height: 650px;
	padding: 20px;
	width: 700px;
	margin: 20px auto;
}

.section {
	margin-top: 30px;
	border: 1px solid variables.$border-grey;
	padding: 10px 15px;
}

.title {
	font-size: 16px;
	font-weight: 600;
}

.radio-item {
	margin-bottom: 0 !important;
}

.checkbox {
	margin-left: var(--feather-spacing-l);
	margin-bottom: var(--feather-spacing-l) !important;
}

.sub-checkbox {
	margin-left: calc(var(--feather-spacing-l) * 2);
	margin-top: 4px;
	margin-bottom: 8px !important;
}

.caption-inline {
	display: block;
	font-size: 12px;
	color: #666;
	font-weight: 400;
	margin-top: 2px;
	max-width: 540px;
}

.caption {
	margin-left: var(--feather-spacing-xl);
	margin-top: -8px;
	font-size: 12px;
	color: #666;
	font-style: italic;
}

.title-row {
	display: flex;
	align-items: center;
	gap: 6px;
}

.icon-btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	padding: 2px;
	color: #666;
	font-size: 18px;
	cursor: pointer;
	border-radius: 50%;

	&:hover {
		color: #222;
		background: #f0f0f0;
	}

	&:focus-visible {
		outline: 2px solid #2086a4;
		outline-offset: 1px;
	}
}

.help-icon {
	cursor: help;
}

.help-popover {
	margin-top: 8px;
	padding: 10px 14px;
	background: #f8fafc;
	border: 1px solid variables.$border-grey;
	border-radius: 4px;
	font-size: 13px;
	line-height: 1.45;

	ul,
	ol {
		margin: 0;
		padding-left: 18px;
	}

	li + li {
		margin-top: 6px;
	}

	a {
		color: #2086a4;
		text-decoration: underline;
	}

	.pricing-hint {
		margin: 10px 0 0;
		font-size: 12px;
		color: #666;
		font-style: italic;
	}

	.help-intro {
		margin: 0 0 12px;
	}

	.help-scenario {
		margin: 8px 0;

		> strong {
			display: block;
			margin-bottom: 4px;
		}

		p {
			margin: 4px 0;
		}
	}

	.help-note {
		font-size: 12px;
		color: #555;
		font-style: italic;
	}

	code {
		font-family: monospace;
		font-size: 12px;
		background: #eef2f6;
		padding: 0 4px;
		border-radius: 2px;
	}

	em {
		color: #555;
	}
}

.variables {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	margin-top: 12px;
}

.variables > * {
	min-width: 180px;
}

.action-row {
	display: flex;
	gap: 12px;
	justify-content: flex-end;
	margin-top: var(--feather-spacing-xxl);
	flex-wrap: wrap;
}

.llm-help {
	font-size: 13px;
	color: #555;
	line-height: 1.45;
	margin: 8px 0 12px;
}

.llm-key-row {
	display: flex;
	align-items: flex-end;
	gap: 12px;
	margin-top: 8px;
}

.llm-key-input {
	flex: 1;
	min-width: 240px;
}

.llm-text-input {
	margin-top: 8px;
	max-width: 480px;
}

.llm-field-block {
	margin-top: 12px;
	max-width: 480px;
}

.llm-field-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
}

.llm-field-label {
	font-size: 14px;
	font-weight: 600;
	color: #222;
}

.help-divider {
	border: none;
	border-top: 1px solid variables.$border-grey;
	margin: 12px 0;
}

.llm-prompt-block {
	margin-top: 16px;
	max-width: 600px;
}

.llm-prompt-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
}

.llm-prompt-label {
	font-size: 14px;
	font-weight: 600;
	color: #222;
}

.llm-prompt-reset {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	background: none;
	border: none;
	color: #2086a4;
	font-size: 12px;
	cursor: pointer;
	padding: 0;

	.reset-inline-icon {
		font-size: 16px;
	}

	&:hover:not(:disabled) {
		text-decoration: underline;
	}

	&:disabled {
		color: #aaa;
		cursor: default;
	}
}

.llm-prompt-help {
	font-size: 12px;
	color: #555;
	line-height: 1.4;
	margin: 4px 0 8px;
}

.llm-prompt-textarea {
	width: 100%;

	:deep(textarea) {
		font-family: monospace;
		font-size: 12px;
		line-height: 1.45;
	}
}

.llm-key-match-hint {
	font-size: 12px;
	color: #555;
	line-height: 1.4;
	margin: 4px 0 8px;

	code {
		background: #eef;
		padding: 0 3px;
		border-radius: 3px;
	}
}

.llm-validate-row {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-top: 8px;
	flex-wrap: wrap;
}

.llm-validate-result {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 13px;

	.result-icon {
		font-size: 18px;
	}

	&.is-ok {
		color: #166534; // green-800
		.result-icon {
			color: #16a34a; // green-600
		}
	}

	&.is-error {
		color: #b91c1c; // red-700
		.result-icon {
			color: #dc2626; // red-600
		}
	}
}

.llm-key-saved {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 8px;
	font-size: 13px;
	color: #166534; // green-800

	.saved-icon {
		font-size: 18px;
		color: #16a34a; // green-600
	}
}

.llm-usage {
	margin-top: 14px;
	padding-top: 12px;
	border-top: 1px dashed #ddd;
}

.usage-summary {
	display: flex;
	align-items: baseline;
	gap: 8px;
	flex-wrap: wrap;
	font-size: 13px;
}

.usage-label {
	color: #555;
	font-weight: 600;
}

.usage-tokens {
	color: #222;
	font-weight: 700;
}

.usage-cost {
	color: #555;
}

.usage-toggle {
	margin-left: auto;
	background: none;
	border: none;
	color: #2086a4;
	font-size: 12px;
	cursor: pointer;
	padding: 0;

	&:hover {
		text-decoration: underline;
	}
}

.usage-details {
	margin: 10px 0 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 6px 24px;
	font-size: 13px;

	> div {
		display: flex;
		justify-content: space-between;
	}

	dt {
		color: #555;
		margin: 0;
	}

	dd {
		margin: 0;
		font-weight: 600;
	}

	.muted {
		font-weight: 400;
		color: #888;
		margin-left: 4px;
	}

	.pricing-note {
		grid-column: 1 / -1;
		display: block;
		font-size: 11px;
		color: #888;
		font-style: italic;
		margin-top: 4px;
	}
}

.icon {
	font-size: 19px;
	margin-right: 8px;
}
</style>
