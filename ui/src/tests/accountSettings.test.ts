import { test, expect, vi, beforeEach, afterEach } from 'vitest'
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
	store.setLLMConfig = vi.fn().mockResolvedValue(true)
	store.getLLMConfig = vi
		.fn()
		.mockResolvedValue({ enabled: false, autoEvaluate: true, apiKeyPresent: false })
	// Default: no usage data so the rollup panel is hidden in most existing
	// tests. The slice-5 rollup tests below seed llmUsage explicitly.
	store.getLLMUsage = vi.fn().mockResolvedValue(null)
	return { wrapper, store }
}

// Saving with the LLM integration enabled against a remote endpoint pops a
// cost-confirmation dialog (window.confirm). Default it to "accept" for the
// suite so the save-path tests exercise the save rather than the dialog; the
// dedicated cost-warning tests below override the return value per-case.
const spyOnConfirm = () => vi.spyOn(window, 'confirm')
let confirmSpy: ReturnType<typeof spyOnConfirm>
beforeEach(() => {
	confirmSpy = spyOnConfirm().mockReturnValue(true)
})
afterEach(() => {
	confirmSpy.mockRestore()
})

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

// --- LLM Root Cause Analysis (ALEC-299) ---

test('LLM section renders with checkbox + API key input', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-section"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-enabled"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-api-key"]').exists()).toBe(true)
})

test('Enable checkbox is disabled until an API key is available', async () => {
	const { wrapper } = buildWrapper()
	// No stored key, no typed key → checkbox blocked + hint visible.
	expect(wrapper.vm.llmNoKeyAvailable).toBe(true)
	expect(wrapper.find('[data-test="llm-no-key-hint"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-ant-test'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmNoKeyAvailable).toBe(false)
	expect(wrapper.find('[data-test="llm-no-key-hint"]').exists()).toBe(false)
})

test('"API key on file" confirmation appears only when a key is stored, and disappears on Clear', async () => {
	const { wrapper } = buildWrapper()
	// No key stored → no confirmation row, and the input label is the plain
	// "Anthropic API key" prompt.
	expect(wrapper.find('[data-test="llm-key-saved"]').exists()).toBe(false)

	wrapper.vm.llmApiKeyPresent = true
	await wrapper.vm.$nextTick()
	const saved = wrapper.find('[data-test="llm-key-saved"]')
	expect(saved.exists()).toBe(true)
	expect(saved.text()).toContain('API key on file')
	// Defense: the saved row must never echo the actual key value.
	expect(saved.html()).not.toContain('sk-')

	// Once the user clicks Clear, the saved confirmation goes away and the
	// pending-clear hint takes over — leaves no ambiguity about which state
	// the server is in after the next Save.
	wrapper.vm.llmApiKeyCleared = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-key-saved"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-cleared-hint"]').exists()).toBe(true)
})

test('"Clear Key" button is hidden until a key is stored server-side', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-clear-key"]').exists()).toBe(false)

	wrapper.vm.llmApiKeyPresent = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-clear-key"]').exists()).toBe(true)
})

test('Save sends new API key + enabled flag when both provided', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKey = 'sk-ant-new-key'
	wrapper.vm.llmEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		systemPrompt: '',
		apiKey: 'sk-ant-new-key'
	})
})

test('Save omits apiKey when the input is blank so server preserves stored key', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKeyPresent = true // simulate a previously stored key
	wrapper.vm.llmEnabled = false // user just toggled off
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: false,
		autoEvaluate: true,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		systemPrompt: ''
	})
})

test('Clear Key sends clearApiKey=true and forces enabled=false', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKeyPresent = true
	wrapper.vm.llmEnabled = true
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-clear-key"]').trigger('click')

	// UI mirrors the destructive intent immediately.
	expect(wrapper.vm.llmEnabled).toBe(false)
	expect(wrapper.vm.llmApiKeyCleared).toBe(true)
	expect(wrapper.find('[data-test="llm-cleared-hint"]').exists()).toBe(true)

	await wrapper.find('[data-test="save-btn"]').trigger('click')
	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: false,
		autoEvaluate: true,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		systemPrompt: '',
		clearApiKey: true
	})
})

test('Auto-evaluate checkbox is exposed, defaults to true, and rides along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="llm-auto-evaluate"]').exists()).toBe(true)
	// Default state: checked, mirroring the server-side default.
	expect(wrapper.vm.llmAutoEvaluate).toBe(true)

	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmAutoEvaluate = false
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: false,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		systemPrompt: '',
		apiKey: 'sk-ant-fresh'
	})
})

test('API key help icon toggles a popover with step-by-step instructions', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-key-help-popover"]').exists()).toBe(
		false
	)

	await wrapper.find('[data-test="llm-key-help"]').trigger('click')
	const popover = wrapper.find('[data-test="llm-key-help-popover"]')
	expect(popover.exists()).toBe(true)

	const html = popover.html()
	// Option A — the hosted Claude default points at Anthropic directly with the
	// native model id, and warns against the OpenRouter-only dotted spelling.
	expect(html).toContain('api.anthropic.com')
	expect(html).toContain('claude-sonnet-4-6')
	expect(html).toContain('chat/completions')
	expect(html).toContain('payment method')
	// OpenRouter is still mentioned as an alternative provider.
	expect(html).toContain('OpenRouter')
	// Option B — pointing ALEC at a locally run LLM (no cost).
	expect(html).toContain('LM Studio')
	expect(html).toContain('127.0.0.1:1234')
	// Troubleshooting must call out the two failure modes we hit: a model with
	// no function calling, and reasoning models running out of room.
	expect(html).toContain('report_suggestions')
	expect(html.toLowerCase()).toContain('reasoning')
	// 4 steps for Option A + 4 for Option B + 3 requirement/troubleshooting items.
	expect(popover.findAll('li').length).toBe(11)

	// Toggles closed on second click.
	await wrapper.find('[data-test="llm-key-help"]').trigger('click')
	expect(wrapper.find('[data-test="llm-key-help-popover"]').exists()).toBe(
		false
	)
})

test('Endpoint + model inputs are exposed and custom values ride along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="llm-base-url"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-model"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-openai-test'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.openai.com/v1',
		model: 'openai/gpt-4o',
		systemPrompt: '',
		apiKey: 'sk-openai-test'
	})
})

test('Provider/key-match hint is shown', () => {
	const { wrapper } = buildWrapper()
	const hint = wrapper.find('[data-test="llm-key-match-hint"]')
	expect(hint.exists()).toBe(true)
	expect(hint.text()).toContain('same provider as the Endpoint')
})

test('Saving with LLM enabled (remote endpoint) warns about cost; cancelling aborts the save', async () => {
	const { wrapper, store } = buildWrapper()
	// The suite default accepts; override to simulate the user clicking Cancel.
	confirmSpy.mockReturnValue(false)
	wrapper.vm.llmApiKey = 'sk-ant-new'
	wrapper.vm.llmEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	// User declined → nothing is persisted, neither engine nor LLM config.
	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect((confirmSpy.mock.calls[0][0] as string)).toContain('may incur')
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(store.setEngineInfo).not.toHaveBeenCalled()
})

test('Saving with LLM enabled against a local endpoint skips the cost warning', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKey = 'sk-local'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	// A local endpoint bills nothing, so no confirmation should appear and the
	// save proceeds straight through.
	expect(confirmSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
})

test('Saving with LLM disabled never shows the cost warning', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmEnabled = false
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	expect(confirmSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
})

test('Endpoint and Model each expose a "Reset to default" control', async () => {
	const { wrapper } = buildWrapper()
	const baseReset = wrapper.find('[data-test="llm-base-url-reset"]')
	const modelReset = wrapper.find('[data-test="llm-model-reset"]')
	expect(baseReset.exists()).toBe(true)
	expect(modelReset.exists()).toBe(true)

	// At the shipped defaults there's nothing to reset.
	expect(wrapper.vm.llmBaseUrlIsCustom).toBe(false)
	expect(wrapper.vm.llmModelIsCustom).toBe(false)

	// Drift each field — the reset controls become active.
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmModel = 'google/gemma-4-e4b'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmBaseUrlIsCustom).toBe(true)
	expect(wrapper.vm.llmModelIsCustom).toBe(true)

	// Resetting snaps each field back to the Anthropic Claude default.
	wrapper.vm.resetBaseUrlToDefault()
	wrapper.vm.resetModelToDefault()
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmBaseUrl).toBe('https://api.anthropic.com/v1/')
	expect(wrapper.vm.llmModel).toBe('claude-sonnet-4-6')
	expect(wrapper.vm.llmBaseUrlIsCustom).toBe(false)
	expect(wrapper.vm.llmModelIsCustom).toBe(false)
})

test('System prompt textarea is exposed and a custom prompt rides along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="llm-system-prompt"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmSystemPrompt = 'You are an ACME network expert.'
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		systemPrompt: 'You are an ACME network expert.',
		apiKey: 'sk-ant-fresh'
	})
})

test('Reset-to-default repopulates the prompt and disables once at the default', async () => {
	const { wrapper } = buildWrapper()
	// Let onMounted's config fetch settle first so it doesn't overwrite the
	// values we set below.
	await flushPromises()
	// Simulate the server having handed us a default prompt and the user having
	// edited it away from that default.
	wrapper.vm.llmDefaultSystemPrompt = 'DEFAULT PROMPT TEXT'
	wrapper.vm.llmSystemPrompt = 'a custom edit'
	await wrapper.vm.$nextTick()

	expect(wrapper.find('[data-test="llm-prompt-reset"]').exists()).toBe(true)
	// "Custom" while the text differs from the default — this gates the button.
	expect(wrapper.vm.llmSystemPromptIsCustom).toBe(true)

	wrapper.vm.resetSystemPromptToDefault()
	await wrapper.vm.$nextTick()
	// Reset repopulates the textarea with the server-provided default...
	expect(wrapper.vm.llmSystemPrompt).toBe('DEFAULT PROMPT TEXT')
	// ...and there's now nothing to reset.
	expect(wrapper.vm.llmSystemPromptIsCustom).toBe(false)
})

test('Validate button calls the service with form values and shows the result', async () => {
	const { wrapper } = buildWrapper()
	const spy = vi
		.spyOn(AlecService, 'validateLLMConfig')
		.mockResolvedValue({ ok: true, message: 'Success — reachable' })

	wrapper.vm.llmApiKey = 'sk-test'
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.vm.$nextTick()

	await wrapper.find('[data-test="llm-validate-btn"]').trigger('click')
	await flushPromises()

	expect(spy).toHaveBeenCalledTimes(1)
	expect(spy.mock.calls[0][0]).toMatchObject({
		baseUrl: 'https://api.openai.com/v1',
		model: 'openai/gpt-4o',
		apiKey: 'sk-test'
	})
	const result = wrapper.find('[data-test="llm-validate-result"]')
	expect(result.exists()).toBe(true)
	expect(result.text()).toContain('Success')
})

test('Validate omits apiKey when none typed (server uses stored key)', async () => {
	const { wrapper } = buildWrapper()
	wrapper.vm.llmApiKeyPresent = true // a key is already stored
	const spy = vi
		.spyOn(AlecService, 'validateLLMConfig')
		.mockResolvedValue({ ok: true, message: 'ok' })
	await wrapper.vm.$nextTick()

	await wrapper.find('[data-test="llm-validate-btn"]').trigger('click')
	await flushPromises()

	expect(spy).toHaveBeenCalledTimes(1)
	expect(spy.mock.calls[0][0].apiKey).toBeUndefined()
})

test('Validate is blocked with a hint when no key is typed or stored', async () => {
	const { wrapper } = buildWrapper()
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmCannotValidate).toBe(true)
	expect(wrapper.find('[data-test="llm-validate-hint"]').exists()).toBe(true)
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
	expect(wrapper.find('[data-test="llm-usage"]').exists()).toBe(false)
})

test('Usage rollup renders humanized tokens + approx cost when data is present', async () => {
	const { wrapper, store } = buildWrapper()
	store.llmUsage = usageFixture as any
	await wrapper.vm.$nextTick()

	const tokens = wrapper.find('[data-test="llm-usage-tokens"]')
	expect(tokens.exists()).toBe(true)
	// 1,234,567 should render as "1.2M" — that's the humanizeTokens contract.
	expect(tokens.text()).toContain('1.2M')
	// Raw count goes into the title attribute for hover.
	expect(tokens.attributes('title')).toContain('1,234,567')

	const cost = wrapper.find('[data-test="llm-usage-cost"]')
	expect(cost.text()).toContain('$4.85')
	// Pricing-note caveat lives on the cost title so users see "approx" provenance.
	expect(cost.attributes('title')).toContain('Approximate cost')
})

test('Usage details panel toggles open + shows breakdown', async () => {
	const { wrapper, store } = buildWrapper()
	store.llmUsage = usageFixture as any
	await wrapper.vm.$nextTick()

	expect(wrapper.find('[data-test="llm-usage-details"]').exists()).toBe(false)
	await wrapper.find('[data-test="llm-usage-toggle"]').trigger('click')

	const details = wrapper.find('[data-test="llm-usage-details"]')
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
	;(store.getLLMUsage as any).mockClear()
	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()
	expect((store.getLLMUsage as any)).toHaveBeenCalledTimes(1)
	expect((store.getLLMUsage as any)).toHaveBeenCalledWith(30)
})

test('Input is scrubbed and cleared-flag reset after a successful save', async () => {
	const { wrapper, store } = buildWrapper()
	// Pretend the server stored the key and now reports it back.
	;(store.setLLMConfig as any).mockImplementation(async () => {
		store.llmConfig = {
			enabled: true,
			autoEvaluate: true,
			baseUrl: 'https://api.anthropic.com/v1/',
			model: 'claude-sonnet-4-6',
			systemPrompt: '',
			defaultSystemPrompt: '',
			apiKeyPresent: true
		}
		return true
	})
	wrapper.vm.llmApiKey = 'sk-ant-new'
	wrapper.vm.llmEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	// trigger('click') fires the handler but doesn't await the chained promises
	// inside saveConfiguration; flushPromises lets the post-save scrub run.
	await flushPromises()

	// The secret must not linger in the input after the round-trip.
	expect(wrapper.vm.llmApiKey).toBe('')
	expect(wrapper.vm.llmApiKeyCleared).toBe(false)
	expect(wrapper.vm.llmApiKeyPresent).toBe(true)
})
