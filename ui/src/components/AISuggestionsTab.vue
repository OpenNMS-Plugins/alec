<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { FeatherSpinner } from '@featherds/progress'
import { FeatherButton } from '@featherds/button'
import {
	getLLMSuggestion,
	reanalyzeLLMSuggestion
} from '@/services/AlecService'
import { useUserStore } from '@/store/useUserStore'
import { TLLMSuggestion } from '@/types/TUser'

const props = defineProps<{
	situationId: number | string
}>()

const userStore = useUserStore()

// Server states: pending (LLM call in flight), ready (suggestions
// available), failed (last attempt errored). Plus four UI-only states:
//   absent  — server returned 204; no record exists yet
//   loading — initial fetch in progress
//   error   — the GET itself failed (network / 500)
//   reanalyzing — user clicked Re-evaluate; awaiting POST response
type UiState =
	| 'loading'
	| 'absent'
	| 'pending'
	| 'ready'
	| 'failed'
	| 'error'
	| 'reanalyzing'

const state = ref<UiState>('loading')
const record = ref<TLLMSuggestion | null>(null)
const reanalyzeError = ref<string | null>(null)

// Poll cadence and cap. We pick 5s because LLM calls with prompt caching
// usually complete in 5–30s, and 5 minutes is a generous ceiling — anything
// longer is almost certainly a server-side timeout that we'll see as 'failed'.
const POLL_INTERVAL_MS = 5_000
const POLL_TIMEOUT_MS = 5 * 60 * 1_000

let pollHandle: ReturnType<typeof setInterval> | null = null
let pollStartedAt = 0

const stopPolling = () => {
	if (pollHandle !== null) {
		clearInterval(pollHandle)
		pollHandle = null
	}
}

const startPollingIfPending = () => {
	if (state.value !== 'pending') return
	if (pollHandle !== null) return
	pollStartedAt = Date.now()
	pollHandle = setInterval(async () => {
		if (Date.now() - pollStartedAt > POLL_TIMEOUT_MS) {
			stopPolling()
			return
		}
		await fetchOnce()
		if (state.value !== 'pending') {
			stopPolling()
		}
	}, POLL_INTERVAL_MS)
}

const fetchOnce = async () => {
	const result = await getLLMSuggestion(props.situationId)
	if (result === false) {
		state.value = 'error'
		return
	}
	if (result === null) {
		state.value = 'absent'
		record.value = null
		return
	}
	record.value = result
	state.value = result.status as UiState
}

const handleRefresh = async () => {
	state.value = 'loading'
	stopPolling()
	await fetchOnce()
	startPollingIfPending()
}

const handleReanalyze = async () => {
	reanalyzeError.value = null
	state.value = 'reanalyzing'
	stopPolling()
	const result = await reanalyzeLLMSuggestion(props.situationId)
	if (result === false) {
		// Most commonly: 400 because the integration is disabled or key missing.
		// We can't see the response body from the helper, so fall back to a
		// generic message that nudges the user to the config page.
		state.value = 'absent'
		reanalyzeError.value =
			'Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.'
		// Re-fetch llmConfig so the empty-state copy below stays in sync
		// with whatever the server thinks the current state is.
		await userStore.getLLMConfig()
		return
	}
	record.value = result
	state.value = result.status as UiState
	startPollingIfPending()
}

onMounted(async () => {
	// Make sure we know the current LLM config so the empty-state copy is
	// accurate (slightly different message for disabled vs no-key vs ready).
	if (userStore.llmConfig === null) {
		await userStore.getLLMConfig()
	}
	await fetchOnce()
	startPollingIfPending()
})

onBeforeUnmount(() => stopPolling())

const requestedAtFormatted = computed(() => {
	if (!record.value?.requestedAt) return ''
	return new Date(record.value.requestedAt).toLocaleString()
})

// Empty-state copy branches on what the server config says, so the user
// always sees the right next step instead of a generic message.
type AbsentReason = 'disabled' | 'no-key' | 'not-yet-run'
const absentReason = computed<AbsentReason>(() => {
	const cfg = userStore.llmConfig
	if (!cfg || !cfg.enabled) return 'disabled'
	if (!cfg.apiKeyPresent) return 'no-key'
	return 'not-yet-run'
})

// Re-evaluate is only meaningful when the integration is actually wired up.
// When disabled or no key, the button would 400 — so hide it and point the
// user at the configuration page instead.
const canReanalyze = computed(
	() =>
		userStore.llmConfig?.enabled === true &&
		userStore.llmConfig?.apiKeyPresent === true
)
</script>

<template>
	<div class="ai-panel" data-test="ai-suggestions-panel">
		<div class="header">
			<h3>AI Suggestions</h3>
			<div class="header-actions">
				<FeatherButton
					v-if="canReanalyze"
					primary
					data-test="ai-reanalyze"
					:disabled="state === 'reanalyzing' || state === 'pending'"
					@click="handleReanalyze"
				>
					Re-evaluate
				</FeatherButton>
				<FeatherButton
					secondary
					data-test="ai-refresh"
					@click="handleRefresh"
				>
					Refresh
				</FeatherButton>
			</div>
		</div>

		<div v-if="state === 'loading'" class="state-row" data-test="ai-loading">
			<FeatherSpinner />
			<span>Loading…</span>
		</div>

		<div
			v-else-if="state === 'reanalyzing'"
			class="state-row"
			data-test="ai-reanalyzing"
		>
			<FeatherSpinner />
			<span>Requesting a fresh analysis…</span>
		</div>

		<div v-else-if="state === 'absent'" class="state-row" data-test="ai-absent">
			<template v-if="absentReason === 'disabled'">
				<span data-test="ai-absent-disabled">
					The LLM integration is currently disabled. Enable it on the
					<router-link to="/settings">configuration page</router-link> to start
					generating suggestions for new situations.
				</span>
			</template>
			<template v-else-if="absentReason === 'no-key'">
				<span data-test="ai-absent-no-key">
					No API key is configured. Add one on the
					<router-link to="/settings">configuration page</router-link> to enable
					AI suggestions.
				</span>
			</template>
			<template v-else>
				<span data-test="ai-absent-not-yet-run">
					No analysis has run for this situation yet. New situations are
					analyzed automatically — click <strong>Re-evaluate</strong> above to
					trigger one now.
				</span>
			</template>
			<div v-if="reanalyzeError" class="reanalyze-error" data-test="ai-reanalyze-error">
				{{ reanalyzeError }}
			</div>
		</div>

		<div v-else-if="state === 'pending'" class="state-row" data-test="ai-pending">
			<FeatherSpinner />
			<span>
				Analyzing alarms with the LLM… requested at
				{{ requestedAtFormatted }}.
			</span>
		</div>

		<div
			v-else-if="state === 'failed'"
			class="state-row failed"
			data-test="ai-failed"
		>
			<div class="failed-msg">
				The last LLM request failed:
				<code>{{ record?.error || 'unknown error' }}</code>
			</div>
			<FeatherButton
				secondary
				data-test="ai-retry"
				@click="handleRefresh"
			>
				Retry
			</FeatherButton>
		</div>

		<div v-else-if="state === 'error'" class="state-row" data-test="ai-error">
			Could not load suggestions. Please retry.
			<FeatherButton secondary @click="handleRefresh">Retry</FeatherButton>
		</div>

		<div v-else-if="state === 'ready' && record" data-test="ai-ready">
			<div class="meta" v-if="record.completedAt">
				Generated by <strong>{{ record.model }}</strong> at
				{{ new Date(record.completedAt).toLocaleString() }}. Treat as
				hypotheses, not facts.
			</div>

			<div class="section">
				<h4>Probable root causes</h4>
				<ol
					v-if="record.rootCauses.length"
					data-test="ai-root-causes"
				>
					<li
						v-for="(cause, idx) in record.rootCauses"
						:key="`cause-${idx}`"
					>
						{{ cause }}
					</li>
				</ol>
				<div v-else class="empty">No root causes returned.</div>
			</div>

			<div class="section">
				<h4>Possible resolutions</h4>
				<ol
					v-if="record.resolutions.length"
					data-test="ai-resolutions"
				>
					<li
						v-for="(res, idx) in record.resolutions"
						:key="`res-${idx}`"
					>
						{{ res }}
					</li>
				</ol>
				<div v-else class="empty">No resolutions returned.</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

.ai-panel {
	background-color: var(--feather-surface);
	border: 1px solid variables.$border-grey;
	padding: 20px;
	margin-top: 10px;
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14px;

	h3 {
		margin: 0;
		font-size: 18px;
	}
}

.header-actions {
	display: flex;
	gap: 8px;
}

.state-row {
	display: flex;
	align-items: center;
	gap: 12px;
	color: var(--feather-secondary-text-on-surface);
	font-size: 14px;

	&.failed {
		justify-content: space-between;
		color: var(--feather-warning);
	}

	.failed-msg {
		flex: 1;
		margin-right: 12px;
	}

	code {
		font-family: monospace;
		font-size: 12px;
		background: var(--feather-elevation-background-1);
		padding: 1px 5px;
		border-radius: 2px;
	}
}

.reanalyze-error {
	margin-top: 8px;
	color: var(--feather-error);
	font-size: 13px;
}

.meta {
	font-size: 13px;
	color: var(--feather-secondary-text-on-surface);
	margin-bottom: 12px;
}

.section {
	margin-top: 16px;

	h4 {
		font-size: 15px;
		margin: 0 0 8px;
	}

	ol {
		margin: 0;
		padding-left: 22px;

		li + li {
			margin-top: 6px;
		}
	}
}

.empty {
	font-style: italic;
	color: var(--feather-disabled-text-on-surface);
	font-size: 13px;
}
</style>
