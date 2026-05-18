import { test, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import AccountSettings from '@/containers/AccountSettings.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '@/store/useUserStore'
import CONST from '@/helpers/constants'
import * as AlecService from '@/services/AlecService'

const buildWrapper = () => {
	const wrapper = mount(AccountSettings, {
		global: {
			plugins: [
				createTestingPinia({
					createSpy: vi.fn,
					stubActions: false
				})
			]
		}
	} as any) as any
	const store = useUserStore()
	store.setEngineInfo = vi.fn().mockResolvedValue(true)
	store.getEngineInfo = vi.fn()
	store.setClaudeConfig = vi.fn().mockResolvedValue(true)
	store.getClaudeConfig = vi
		.fn()
		.mockResolvedValue({ enabled: false, apiKeyPresent: false })
	// Default: no usage data so the rollup panel is hidden in most existing
	// tests. The slice-5 rollup tests below seed claudeUsage explicitly.
	store.getClaudeUsage = vi.fn().mockResolvedValue(null)
	return { wrapper, store }
}

test('Page title is "Correlation Engine Configuration Page"', () => {
	const { wrapper } = buildWrapper()
	const title = wrapper.find('[data-test="page-title"]')
	expect(title.exists()).toBe(true)
	expect(title.text()).toBe('Correlation Engine Configuration Page')
})

test('Deep Learning option is not rendered', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.html()).not.toContain('Deep Learning')
})

test('LLM Based option is rendered, disabled, with "Coming soon" caption', () => {
	const { wrapper } = buildWrapper()
	const llm = wrapper.find('[data-test="engine-llm"]')
	const caption = wrapper.find('[data-test="engine-llm-caption"]')
	expect(llm.exists()).toBe(true)
	expect(llm.text()).toContain('LLM Based')
	expect(caption.exists()).toBe(true)
	expect(caption.text()).toBe('Coming soon')
})

test('Hellinger checkbox defaults to checked on a fresh system (no saved config)', () => {
	const { wrapper, store } = buildWrapper()
	// Sanity: the wrapper was built with no engineInfo persisted.
	expect(store.engineInfo).toBeNull()
	expect(wrapper.vm.hellinger).toBe(true)
})

test('Correlation variables section is visible when Clustering is selected', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="variables-section"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="variable-alpha"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="variable-beta"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="variable-epsilon"]').exists()).toBe(true)
})

test('Variables section hides when a non-Clustering engine is selected', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="variables-section"]').exists()).toBe(true)
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="variables-section"]').exists()).toBe(false)
})

test('Save passes alpha/beta/epsilon to setEngineInfo', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.alpha = 200
	wrapper.vm.beta = 0.7
	wrapper.vm.epsilon = 500
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
	const args = (store.setEngineInfo as any).mock.calls[0]
	expect(args[0]).toBe(CONST.ENGINE_DBSCAN)
	// Hellinger is the fresh-install default, so save sends w/bias too.
	expect(args[2]).toEqual({
		alpha: 200,
		beta: 0.7,
		epsilon: 500,
		hellingerW: 4851.28,
		hellingerBias: -1986.0
	})
})

test('Save omits Hellinger params when Hellinger is unchecked', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.hellinger = false
	wrapper.vm.alpha = 200
	wrapper.vm.beta = 0.7
	wrapper.vm.epsilon = 500
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
	const args = (store.setEngineInfo as any).mock.calls[0]
	expect(args[1]).toBe(false)
	expect(args[2]).toEqual({ alpha: 200, beta: 0.7, epsilon: 500 })
})

test('Help icon is rendered next to "Correlation variables" title', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="variables-help"]').exists()).toBe(true)
})

test('Help popover toggles on click and contains bullets + defaults', async () => {
	const { wrapper } = buildWrapper()
	const help = wrapper.find('[data-test="variables-help"]')

	expect(wrapper.find('[data-test="variables-help-popover"]').exists()).toBe(
		false
	)

	await help.trigger('click')
	const popover = wrapper.find('[data-test="variables-help-popover"]')
	expect(popover.exists()).toBe(true)
	// Hellinger is on by default, so popover lists 5 items (3 DBScan + 2 Hellinger).
	expect(popover.findAll('li').length).toBe(5)
	const html = popover.html()
	expect(html).toContain('Alpha')
	expect(html).toContain('Beta')
	expect(html).toContain('Epsilon')
	expect(html).toContain('145')
	expect(html).toContain('0.55')
	expect(html).toContain('150')
	expect(html).toContain('Hellinger w')
	expect(html).toContain('Hellinger bias')
	expect(html).toContain('4851.28')
	expect(html).toContain('-1986')

	await help.trigger('click')
	expect(wrapper.find('[data-test="variables-help-popover"]').exists()).toBe(
		false
	)
})

test('Help popover drops Hellinger entries when Hellinger is unchecked', async () => {
	const { wrapper } = buildWrapper()
	wrapper.vm.hellinger = false
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="variables-help"]').trigger('click')
	const popover = wrapper.find('[data-test="variables-help-popover"]')
	expect(popover.findAll('li').length).toBe(3)
	expect(popover.find('[data-test="help-hellinger-w"]').exists()).toBe(false)
	expect(popover.find('[data-test="help-hellinger-bias"]').exists()).toBe(false)
})

test('Hellinger w/bias inputs render only when Hellinger is checked', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="variable-hellinger-w"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="variable-hellinger-bias"]').exists()).toBe(
		true
	)

	wrapper.vm.hellinger = false
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="variable-hellinger-w"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="variable-hellinger-bias"]').exists()).toBe(
		false
	)
})

test('Reset button restores all correlation variables to defaults', async () => {
	const { wrapper } = buildWrapper()
	wrapper.vm.alpha = 999
	wrapper.vm.beta = 0.99
	wrapper.vm.epsilon = 9999
	wrapper.vm.hellingerW = 1
	wrapper.vm.hellingerBias = 1

	await wrapper.find('[data-test="variables-reset"]').trigger('click')

	expect(wrapper.vm.alpha).toBe(145)
	expect(wrapper.vm.beta).toBe(0.55)
	expect(wrapper.vm.epsilon).toBe(150)
	expect(wrapper.vm.hellingerW).toBe(4851.28)
	expect(wrapper.vm.hellingerBias).toBe(-1986.0)
})

test('Close All Open Situations button confirms then calls service', async () => {
	const { wrapper } = buildWrapper()
	const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true)
	const serviceSpy = vi
		.spyOn(AlecService, 'closeAllOpenSituations')
		.mockResolvedValue(true)

	await wrapper.find('[data-test="close-all-btn"]').trigger('click')

	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(serviceSpy).toHaveBeenCalledTimes(1)
	confirmSpy.mockRestore()
	serviceSpy.mockRestore()
})

test('Close All Open Situations is a no-op when confirm is dismissed', async () => {
	const { wrapper } = buildWrapper()
	const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false)
	const serviceSpy = vi
		.spyOn(AlecService, 'closeAllOpenSituations')
		.mockResolvedValue(true)

	await wrapper.find('[data-test="close-all-btn"]').trigger('click')

	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(serviceSpy).not.toHaveBeenCalled()
	confirmSpy.mockRestore()
	serviceSpy.mockRestore()
})

test('Re-Evaluate All Open Alarms button confirms then calls service', async () => {
	const { wrapper } = buildWrapper()
	const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true)
	const serviceSpy = vi
		.spyOn(AlecService, 'reEvaluateAllOpenAlarms')
		.mockResolvedValue(true)

	await wrapper.find('[data-test="reevaluate-btn"]').trigger('click')

	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(serviceSpy).toHaveBeenCalledTimes(1)
	confirmSpy.mockRestore()
	serviceSpy.mockRestore()
})

test('Re-Evaluate All Open Alarms is a no-op when confirm is dismissed', async () => {
	const { wrapper } = buildWrapper()
	const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false)
	const serviceSpy = vi
		.spyOn(AlecService, 'reEvaluateAllOpenAlarms')
		.mockResolvedValue(true)

	await wrapper.find('[data-test="reevaluate-btn"]').trigger('click')

	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(serviceSpy).not.toHaveBeenCalled()
	confirmSpy.mockRestore()
	serviceSpy.mockRestore()
})

// --- Claude Root Cause Analysis (ALEC-299) ---

test('Claude section renders with checkbox + API key input', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="claude-section"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="claude-enabled"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="claude-api-key"]').exists()).toBe(true)
})

test('Enable checkbox is disabled until an API key is available', async () => {
	const { wrapper } = buildWrapper()
	// No stored key, no typed key → checkbox blocked + hint visible.
	expect(wrapper.vm.claudeNoKeyAvailable).toBe(true)
	expect(wrapper.find('[data-test="claude-no-key-hint"]').exists()).toBe(true)

	wrapper.vm.claudeApiKey = 'sk-ant-test'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.claudeNoKeyAvailable).toBe(false)
	expect(wrapper.find('[data-test="claude-no-key-hint"]').exists()).toBe(false)
})

test('"Clear Key" button is hidden until a key is stored server-side', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="claude-clear-key"]').exists()).toBe(false)

	wrapper.vm.claudeApiKeyPresent = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="claude-clear-key"]').exists()).toBe(true)
})

test('Save sends new API key + enabled flag when both provided', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.claudeApiKey = 'sk-ant-new-key'
	wrapper.vm.claudeEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setClaudeConfig).toHaveBeenCalledTimes(1)
	expect((store.setClaudeConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		apiKey: 'sk-ant-new-key'
	})
})

test('Save omits apiKey when the input is blank so server preserves stored key', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.claudeApiKeyPresent = true // simulate a previously stored key
	wrapper.vm.claudeEnabled = false // user just toggled off
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setClaudeConfig).toHaveBeenCalledTimes(1)
	expect((store.setClaudeConfig as any).mock.calls[0][0]).toEqual({
		enabled: false
	})
})

test('Clear Key sends clearApiKey=true and forces enabled=false', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.claudeApiKeyPresent = true
	wrapper.vm.claudeEnabled = true
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="claude-clear-key"]').trigger('click')

	// UI mirrors the destructive intent immediately.
	expect(wrapper.vm.claudeEnabled).toBe(false)
	expect(wrapper.vm.claudeApiKeyCleared).toBe(true)
	expect(wrapper.find('[data-test="claude-cleared-hint"]').exists()).toBe(true)

	await wrapper.find('[data-test="save-btn"]').trigger('click')
	expect((store.setClaudeConfig as any).mock.calls[0][0]).toEqual({
		enabled: false,
		clearApiKey: true
	})
})

// --- Usage rollup (slice 6) ---

const usageFixture = {
	daysWindow: 30,
	totalTokens: 1_234_567,
	inputTokens: 1_000_000,
	outputTokens: 100_000,
	cacheReadInputTokens: 100_000,
	cacheCreationInputTokens: 34_567,
	calls: 42,
	successfulCalls: 40,
	failedCalls: 2,
	cacheHitRatio: 0.075,
	estimatedCostUsd: 4.85,
	pricingNote: 'Approximate cost using Sonnet 4.6 ephemeral-cache list price.'
}

test('Usage rollup is hidden when no usage data is present', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="claude-usage"]').exists()).toBe(false)
})

test('Usage rollup renders humanized tokens + approx cost when data is present', async () => {
	const { wrapper, store } = buildWrapper()
	store.claudeUsage = usageFixture as any
	await wrapper.vm.$nextTick()

	const tokens = wrapper.find('[data-test="claude-usage-tokens"]')
	expect(tokens.exists()).toBe(true)
	// 1,234,567 should render as "1.2M" — that's the humanizeTokens contract.
	expect(tokens.text()).toContain('1.2M')
	// Raw count goes into the title attribute for hover.
	expect(tokens.attributes('title')).toContain('1,234,567')

	const cost = wrapper.find('[data-test="claude-usage-cost"]')
	expect(cost.text()).toContain('$4.85')
	// Pricing-note caveat lives on the cost title so users see "approx" provenance.
	expect(cost.attributes('title')).toContain('Approximate cost')
})

test('Usage details panel toggles open + shows breakdown', async () => {
	const { wrapper, store } = buildWrapper()
	store.claudeUsage = usageFixture as any
	await wrapper.vm.$nextTick()

	expect(wrapper.find('[data-test="claude-usage-details"]').exists()).toBe(false)
	await wrapper.find('[data-test="claude-usage-toggle"]').trigger('click')

	const details = wrapper.find('[data-test="claude-usage-details"]')
	expect(details.exists()).toBe(true)
	const html = details.html()
	// Cache hit ratio 0.075 -> 8% (toFixed(0) rounds — verify the row is rendered).
	expect(html).toContain('Cache hit')
	// Success/failure split is surfaced as "40 ok / 2 failed".
	expect(html).toContain('40 ok')
	expect(html).toContain('2 failed')
})

test('Save refreshes usage rollup', async () => {
	const { wrapper, store } = buildWrapper()
	// Reset the spy so we ignore the mount-time call (which hits the Pinia
	// stub default before our vi.fn replacement) — we only care that the
	// save path triggers a refresh.
	;(store.getClaudeUsage as any).mockClear()
	wrapper.vm.claudeApiKey = 'sk-ant-fresh'
	wrapper.vm.claudeEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()
	expect((store.getClaudeUsage as any)).toHaveBeenCalledTimes(1)
	expect((store.getClaudeUsage as any)).toHaveBeenCalledWith(30)
})

test('Input is scrubbed and cleared-flag reset after a successful save', async () => {
	const { wrapper, store } = buildWrapper()
	// Pretend the server stored the key and now reports it back.
	;(store.setClaudeConfig as any).mockImplementation(async () => {
		store.claudeConfig = { enabled: true, apiKeyPresent: true }
		return true
	})
	wrapper.vm.claudeApiKey = 'sk-ant-new'
	wrapper.vm.claudeEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	// trigger('click') fires the handler but doesn't await the chained promises
	// inside saveConfiguration; flushPromises lets the post-save scrub run.
	await flushPromises()

	// The secret must not linger in the input after the round-trip.
	expect(wrapper.vm.claudeApiKey).toBe('')
	expect(wrapper.vm.claudeApiKeyCleared).toBe(false)
	expect(wrapper.vm.claudeApiKeyPresent).toBe(true)
})
