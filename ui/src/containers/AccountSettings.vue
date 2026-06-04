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
// OpenAI-compatible endpoint + model. Defaults mirror the server (OpenRouter
// routing to a Claude model) so the feature works across providers.
const LLM_DEFAULT_BASE_URL = 'https://openrouter.ai/api/v1'
const LLM_DEFAULT_MODEL = 'anthropic/claude-sonnet-4.6'
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
				OpenRouter (which can route to Claude, GPT, Gemini and others). The
				endpoint, model and API key are stored on the OpenNMS server and apply
				to all users of this plugin.
			</div>
			<div
				v-if="showLLMKeyHelp"
				class="help-popover"
				data-test="llm-key-help-popover"
			>
				<strong>How to get an API key:</strong>
				<ol>
					<li>
						Pick a provider that exposes an OpenAI-compatible
						<code>/chat/completions</code> endpoint —
						<a
							href="https://openrouter.ai/"
							target="_blank"
							rel="noopener noreferrer"
							>OpenRouter</a
						>
						(the default, one key for many models), OpenAI, or Anthropic's
						compatibility endpoint.
					</li>
					<li>
						Create an API key in that provider's dashboard and add a payment
						method if it requires one.
					</li>
					<li>
						Set <em>Endpoint</em> to the provider's base URL (ALEC appends
						<code>/chat/completions</code>) and <em>Model</em> to a model the
						provider offers, e.g. <code>anthropic/claude-sonnet-4.6</code> or
						<code>openai/gpt-4o</code>.
					</li>
					<li>
						Paste the key into the field below and click
						<em>Save Changes</em>. The key is stored on the OpenNMS server; it
						is never returned to the browser after saving.
					</li>
				</ol>
				<p class="pricing-hint">
					Cost depends on the provider and model you choose. A single situation
					analysis is typically a few hundred tokens. Track 30-day usage in the
					panel below after you save.
				</p>
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
			<FeatherInput
				v-model="llmBaseUrl"
				label="Endpoint (OpenAI-compatible base URL)"
				data-test="llm-base-url"
				class="llm-text-input"
			/>
			<FeatherInput
				v-model="llmModel"
				label="Model"
				data-test="llm-model"
				class="llm-text-input"
			/>
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
				an OpenRouter key (<code>sk-or-…</code>) for
				<code>openrouter.ai</code>, an Anthropic key (<code>sk-ant-…</code>)
				for <code>api.anthropic.com</code>, an OpenAI key for
				<code>api.openai.com</code>.
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
