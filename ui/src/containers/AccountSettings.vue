<script setup lang="ts">
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import SituationListBtn from '@/elements/SituationListBtn.vue'
import { FeatherCheckbox } from '@featherds/checkbox'
import { FeatherInput } from '@featherds/input'
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
	reEvaluateAllOpenAlarms
} from '@/services/AlecService'
import { TClaudeConfigRequest } from '@/types/TUser'

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

// Claude integration (ALEC-299). API key is write-only from the UI; the
// server returns only `apiKeyPresent` so a stored key is never echoed back.
const claudeEnabled = ref(userStore.claudeConfig?.enabled ?? false)
const claudeApiKey = ref('')
const claudeApiKeyPresent = ref(userStore.claudeConfig?.apiKeyPresent ?? false)
const claudeApiKeyCleared = ref(false)

// True when there's nothing the server could persist as a key — neither one
// already stored nor one freshly typed. The Enable checkbox guards on this to
// stop the user from saving an enabled-but-keyless config the server will reject.
const claudeNoKeyAvailable = computed(
	() =>
		(!claudeApiKeyPresent.value || claudeApiKeyCleared.value) &&
		claudeApiKey.value.trim().length === 0
)

const clearClaudeApiKey = () => {
	claudeApiKey.value = ''
	claudeApiKeyCleared.value = true
	claudeApiKeyPresent.value = false
	claudeEnabled.value = false
}

const showHelp = ref(false)
const showClaudeKeyHelp = ref(false)
const showNotification = ref(false)
const isError = ref(false)
const message = ref('')

const showUsageDetails = ref(false)

onMounted(async () => {
	// engineInfo is usually pre-populated by the app shell; the Claude config
	// has no such pre-load, so fetch it here on first render.
	if (userStore.claudeConfig === null) {
		const result = await userStore.getClaudeConfig()
		if (result) {
			claudeEnabled.value = result.enabled
			claudeApiKeyPresent.value = result.apiKeyPresent
		}
	}
	// Fetch the usage rollup once on mount; refreshed after every successful save.
	await userStore.getClaudeUsage(30)
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

const buildClaudeRequest = (): TClaudeConfigRequest => {
	if (claudeApiKeyCleared.value) {
		// Clearing wins regardless of any text in the input — server forces enabled=false.
		return { enabled: false, clearApiKey: true }
	}
	const trimmedKey = claudeApiKey.value.trim()
	const request: TClaudeConfigRequest = { enabled: claudeEnabled.value }
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
	const savedClaude = await userStore.setClaudeConfig(buildClaudeRequest())

	// After a successful Claude save the typed key is now stored server-side;
	// scrub the input + cleared flag so the next save is a no-op rather than
	// re-sending the same secret over the wire.
	if (savedClaude) {
		claudeApiKey.value = ''
		claudeApiKeyCleared.value = false
		claudeApiKeyPresent.value = userStore.claudeConfig?.apiKeyPresent ?? false
		claudeEnabled.value = userStore.claudeConfig?.enabled ?? false
		// Refresh the usage rollup — enabling/disabling doesn't generate calls
		// immediately, but the next render should reflect any usage that
		// arrived since the page loaded.
		userStore.getClaudeUsage(30)
	}

	if (savedEngine && savedClaude) {
		userStore.getEngineInfo()
		notify('The settings were saved!', false)
	} else if (savedEngine && !savedClaude) {
		notify(
			'Engine settings saved, but Claude configuration could not be saved (an API key is required to enable the integration).',
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

		<div class="section" data-test="claude-section">
			<div class="title-row">
				<div class="title">Claude Root Cause Analysis</div>
				<button
					type="button"
					class="icon-btn help-icon"
					:aria-expanded="showClaudeKeyHelp"
					aria-label="How to get an Anthropic API key"
					data-test="claude-key-help"
					@click="showClaudeKeyHelp = !showClaudeKeyHelp"
				>
					<FeatherIcon :icon="Icons.Help" />
				</button>
			</div>
			<div class="claude-help">
				When a new situation is created, ALEC will ask Claude to suggest up to
				3 probable root causes and 3 possible resolutions based on the
				clustered alarms. Suggestions appear on the situation detail page. The
				API key is stored on the OpenNMS server and applies to all users of
				this plugin.
			</div>
			<div
				v-if="showClaudeKeyHelp"
				class="help-popover"
				data-test="claude-key-help-popover"
			>
				<strong>How to get an Anthropic API key:</strong>
				<ol>
					<li>
						Go to
						<a
							href="https://console.anthropic.com/"
							target="_blank"
							rel="noopener noreferrer"
							>console.anthropic.com</a
						>
						and sign in (or create an account).
					</li>
					<li>
						Add a payment method under <em>Billing → Add payment method</em>.
						Anthropic requires this before any API key can be created.
					</li>
					<li>
						Open <em>API Keys</em> in the left sidebar and click
						<em>Create Key</em>. Give it a descriptive name (e.g.
						<code>alec-claude-suggestions</code>) so you can revoke it later
						without affecting other integrations.
					</li>
					<li>
						<strong>Copy the key immediately</strong> — it starts with
						<code>sk-ant-…</code> and Anthropic only shows it once.
					</li>
					<li>
						Paste it into the field below and click <em>Save Changes</em>. The
						key is stored on the OpenNMS server; it is never returned to the
						browser after saving.
					</li>
				</ol>
				<p class="pricing-hint">
					Pricing for the Sonnet 4.6 model that ALEC uses: $3 / $15 per million
					input / output tokens (cache reads cheaper). A single situation
					analysis is typically a few hundred tokens — fractions of a cent.
					Track 30-day usage in the panel below after you save.
				</p>
			</div>
			<FeatherCheckbox
				v-model="claudeEnabled"
				:disabled="claudeNoKeyAvailable"
				class="checkbox"
				data-test="claude-enabled"
			>
				<strong>Claude Enabled Root Cause Analysis</strong>
			</FeatherCheckbox>
			<div
				v-if="claudeNoKeyAvailable"
				class="caption"
				data-test="claude-no-key-hint"
			>
				Enter an API key to enable.
			</div>
			<div class="claude-key-row">
				<FeatherInput
					v-model="claudeApiKey"
					type="password"
					autocomplete="new-password"
					:label="
						claudeApiKeyPresent && !claudeApiKeyCleared
							? 'Anthropic API key — saved (paste a new key to replace)'
							: 'Anthropic API key'
					"
					data-test="claude-api-key"
					class="claude-key-input"
				/>
				<FeatherButton
					v-if="claudeApiKeyPresent && !claudeApiKeyCleared"
					secondary
					data-test="claude-clear-key"
					@click="clearClaudeApiKey"
				>
					Clear Key
				</FeatherButton>
			</div>
			<div
				v-if="claudeApiKeyPresent && !claudeApiKeyCleared"
				class="claude-key-saved"
				data-test="claude-key-saved"
			>
				<FeatherIcon :icon="Icons.MarkComplete" class="saved-icon" />
				<span>
					API key on file. The stored key is never sent back to the browser —
					leave the field blank to keep it, or paste a new one to replace it.
				</span>
			</div>
			<div
				v-if="claudeApiKeyCleared"
				class="caption"
				data-test="claude-cleared-hint"
			>
				Stored API key will be removed on save.
			</div>

			<div
				v-if="userStore.claudeUsage"
				class="claude-usage"
				data-test="claude-usage"
			>
				<div class="usage-summary">
					<span class="usage-label">Last {{ userStore.claudeUsage.daysWindow }} days:</span>
					<span
						class="usage-tokens"
						:title="`${userStore.claudeUsage.totalTokens.toLocaleString()} tokens`"
						data-test="claude-usage-tokens"
					>
						{{ humanizeTokens(userStore.claudeUsage.totalTokens) }} tokens
					</span>
					<span
						class="usage-cost"
						:title="userStore.claudeUsage.pricingNote"
						data-test="claude-usage-cost"
					>
						({{ formatUsd(userStore.claudeUsage.estimatedCostUsd) }})
					</span>
					<button
						type="button"
						class="usage-toggle"
						@click="showUsageDetails = !showUsageDetails"
						data-test="claude-usage-toggle"
					>
						{{ showUsageDetails ? 'hide details' : 'show details' }}
					</button>
				</div>
				<dl
					v-if="showUsageDetails"
					class="usage-details"
					data-test="claude-usage-details"
				>
					<div>
						<dt>Input</dt>
						<dd>{{ humanizeTokens(userStore.claudeUsage.inputTokens) }}</dd>
					</div>
					<div>
						<dt>Output</dt>
						<dd>{{ humanizeTokens(userStore.claudeUsage.outputTokens) }}</dd>
					</div>
					<div>
						<dt>Cache read</dt>
						<dd>{{ humanizeTokens(userStore.claudeUsage.cacheReadInputTokens) }}</dd>
					</div>
					<div>
						<dt>Cache create</dt>
						<dd>{{ humanizeTokens(userStore.claudeUsage.cacheCreationInputTokens) }}</dd>
					</div>
					<div>
						<dt>Calls</dt>
						<dd>
							{{ userStore.claudeUsage.calls }}
							<span class="muted"
								>({{ userStore.claudeUsage.successfulCalls }} ok /
								{{ userStore.claudeUsage.failedCalls }} failed)</span
							>
						</dd>
					</div>
					<div>
						<dt>Cache hit</dt>
						<dd>{{ (userStore.claudeUsage.cacheHitRatio * 100).toFixed(0) }}%</dd>
					</div>
					<div class="pricing-note">
						{{ userStore.claudeUsage.pricingNote }}
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

.claude-help {
	font-size: 13px;
	color: #555;
	line-height: 1.45;
	margin: 8px 0 12px;
}

.claude-key-row {
	display: flex;
	align-items: flex-end;
	gap: 12px;
	margin-top: 8px;
}

.claude-key-input {
	flex: 1;
	min-width: 240px;
}

.claude-key-saved {
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

.claude-usage {
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
