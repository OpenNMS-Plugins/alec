<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'
import { useUserStore } from '@/store/useUserStore'
import { OnmsToastHost } from '@opennms/onms-ui'

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
	<div class="main">
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
		<OnmsToastHost />
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
	border: 1px solid var(--onms-warning);
	background: var(--onms-surface);
	color: var(--onms-primary-text-on-surface);
	font-size: 13px;
	line-height: 1.45;

	strong {
		color: var(--onms-warning);
	}
}
</style>
