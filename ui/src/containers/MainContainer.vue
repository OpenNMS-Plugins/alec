<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'
import { useUserStore } from '@/store/useUserStore'

// Poll the shared LLM token-budget status so any ALEC page can warn the user
// when the daily/monthly cap has paused LLM requests (root cause analysis and,
// later, LLM-based clustering). Cheap call; refreshed every few minutes.
const userStore = useUserStore()
const POLL_MS = 5 * 60 * 1000
let timer: ReturnType<typeof setInterval> | undefined

const budgetBlocked = computed(() => userStore.llmBudget?.blocked === true)
const budgetReason = computed(() => userStore.llmBudget?.reason || '')

onMounted(() => {
	userStore.getLLMBudget()
	timer = setInterval(() => userStore.getLLMBudget(), POLL_MS)
})
onUnmounted(() => {
	if (timer) clearInterval(timer)
})
</script>

<template>
	<!-- feather-styles scopes the @featherds/styles base rules (typography,
	     sr-text, links): Feather hosts stamp it on <body>, the PrimeVue-based
	     OpenNMS 37 host does not, so carry it on our own root. -->
	<div class="main feather-styles">
		<div
			v-if="budgetBlocked"
			class="llm-budget-banner"
			data-test="llm-budget-banner"
			role="alert"
		>
			<strong>LLM requests paused.</strong> {{ budgetReason }} Raise the
			limit on the LLM Setup tab of the ALEC configuration to resume.
		</div>
		<router-view></router-view>
	</div>
</template>

<style scoped lang="scss">
.main {
	margin: 20px;
}

.llm-budget-banner {
	margin-bottom: 16px;
	padding: 10px 14px;
	border-radius: 4px;
	border: 1px solid var(--feather-warning);
	background: var(--feather-surface);
	color: var(--feather-primary-text-on-surface);
	font-size: 13px;
	line-height: 1.45;

	strong {
		color: var(--feather-warning);
	}
}
</style>
