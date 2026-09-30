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
					stubActions: false,
					// Pre-seed llmConfig the way production does (app shell /
					// mount-time fetch) so llmConfigLoaded starts true. Without
					// it the save path (correctly) skips the LLM POST — that
					// guard has its own dedicated test below.
					initialState: {
						userStore: {
							llmConfig: {
								enabled: false,
								autoEvaluate: true,
								baseUrl: '',
								model: '',
								defaultBaseUrl: '',
								defaultModel: '',
								systemPrompt: '',
								defaultSystemPrompt: '',
								apiKeyPresent: false,
								validated: false
							}
						}
					}
				})
			]
		}
	} as any) as any
	const store = useUserStore()
	store.setEngineInfo = vi.fn().mockResolvedValue(true)
	store.getEngineInfo = vi.fn()
	store.setLLMConfig = vi.fn().mockResolvedValue(true)
	store.getLLMConfig = vi.fn().mockResolvedValue({
		enabled: false,
		autoEvaluate: true,
		apiKeyPresent: false,
		validated: false
	})
	// Default: no usage data so the rollup panel is hidden in most existing
	// tests. The slice-5 rollup tests below seed llmUsage explicitly.
	store.getLLMUsage = vi.fn().mockResolvedValue(null)
	return { wrapper, store }
}

// Run "Validate key" against the current form with a passing probe. Both LLM
// features and Save are gated on a validated setup for the exact
// endpoint/model/key in the form (ALEC-310), so every test that changes those
// and expects the save to go through runs this first — the way a user must.
const validateOk = async (wrapper: any) => {
	vi.spyOn(AlecService, 'validateLLMConfig').mockResolvedValue({
		ok: true,
		message: 'Success — reachable'
	})
	await wrapper.vm.validateLlm()
	await flushPromises()
}

// A stored setup the server reports as validated, hydrated into the form the
// way onMounted does. Nothing is dirty afterwards, so no probe is needed.
const seedValidatedStore = (wrapper: any, store: any, baseUrl: string, model: string) => {
	store.llmConfig = {
		...(store.llmConfig as any),
		baseUrl,
		model,
		apiKeyPresent: true,
		validated: true
	}
	wrapper.vm.llmBaseUrl = baseUrl
	wrapper.vm.llmModel = model
	wrapper.vm.llmApiKeyPresent = true
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

test('Page title is "ALEC Configuration" with Engine + LLM tabs', () => {
	const { wrapper } = buildWrapper()
	const title = wrapper.find('[data-test="page-title"]')
	expect(title.exists()).toBe(true)
	expect(title.text()).toBe('ALEC Configuration')
	// Two configuration tabs.
	expect(wrapper.find('[data-test="tab-engine"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="tab-llm"]').exists()).toBe(true)
})

test('Correlation Engine tab has a "?" help explaining engines and Hellinger', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="engine-help-popover"]').exists()).toBe(false)
	await wrapper.find('[data-test="engine-help"]').trigger('click')
	const help = wrapper.find('[data-test="engine-help-popover"]')
	expect(help.exists()).toBe(true)
	expect(help.text()).toContain('Clustering')
	expect(help.text()).toContain('Hellinger distance')
	// Distinguishes the LLM-based engine from the LLM Root Cause Analysis tab.
	expect(help.text()).toContain('LLM')
})

test('Deep Learning option is not rendered', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.html()).not.toContain('Deep Learning')
})

test('LLM Based engine is selectable and gated on a valid LLM setup', async () => {
	const { wrapper, store } = buildWrapper()
	const llm = wrapper.find('[data-test="engine-llm"]')
	expect(llm.exists()).toBe(true)
	expect(llm.text()).toContain('LLM Based')

	// No validated LLM → the radio is grayed out and says why (ALEC-310).
	expect((llm as any).attributes('aria-disabled') ?? llm.classes()).toBeTruthy()
	expect(wrapper.findComponent('[data-test="engine-llm"]').props('disabled')).toBe(true)
	const hint = wrapper.find('[data-test="llm-engine-requires-validation"]')
	expect(hint.exists()).toBe(true)
	expect(hint.text()).toContain('requires a validated LLM')

	// Forced selection (e.g. persisted choice) with no validated LLM → guard
	// shows, no clustering config.
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-cluster-section"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-cluster-frequency"]').exists()).toBe(false)
	// Hellinger correlation variables are not shown for the LLM engine.
	expect(wrapper.find('[data-test="variables-section"]').exists()).toBe(false)
	// While selected the radio stays operable so the user can switch away.
	expect(wrapper.findComponent('[data-test="engine-llm"]').props('disabled')).toBe(false)

	// A configured but NOT validated setup is still not enough.
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmApiKey = 'sk-ant-typed'
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-cluster-section"]').exists()).toBe(false)

	// Validated from the form (typed key, not yet saved) → frequency +
	// clustering prompt appear, guard and hint gone.
	await validateOk(wrapper)
	expect(wrapper.find('[data-test="llm-cluster-section"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-engine-requires-validation"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-cluster-frequency"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-cluster-prompt"]').exists()).toBe(true)
	// No bare <template> around the settings: it compiles to a real <template>
	// element, which browsers do not render.
	expect(wrapper.find('[data-test="llm-cluster-section"] template').exists()).toBe(false)

	// A stored setup the server reports validated counts as well.
	wrapper.vm.llmValidationResult = null
	seedValidatedStore(wrapper, store, 'https://api.anthropic.com/v1/', 'claude-sonnet-4-6')
	wrapper.vm.llmApiKey = ''
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-cluster-section"]').exists()).toBe(true)

	// …but not once the server says it is not validated (e.g. after an upgrade).
	store.llmConfig = { ...(store.llmConfig as any), validated: false }
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-cluster-section"]').exists()).toBe(false)
})

test('Save is blocked for LLM Based engine without a valid LLM setup', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()
	// Neither engine nor LLM config is persisted — the user is told to set up LLM.
	expect(store.setEngineInfo).not.toHaveBeenCalled()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(wrapper.vm.isError).toBe(true)
	expect(wrapper.vm.message).toContain('LLM-based clustering needs a validated LLM')
})

// Regression (ALEC-310): the gate used to read the PERSISTED config, so a user
// who picked LLM Based, then typed + validated a key on the LLM Setup tab, was
// refused with "needs a configured LLM" — by the very save that would have
// stored it.
test('Save proceeds for LLM Based engine once the key is typed and validated', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.engineName = CONST.ENGINE_LLM
	wrapper.vm.llmBaseUrl = 'http://10.0.0.137:8081/v1'
	wrapper.vm.llmModel = 'qwen3.5-4b'
	wrapper.vm.llmApiKey = 'sk-typed-not-yet-saved'
	await wrapper.vm.$nextTick()
	// Nothing stored yet — exactly the state the bug was reported in.
	expect(store.llmConfig?.apiKeyPresent).toBe(false)
	expect(store.llmConfig?.validated).toBe(false)
	await validateOk(wrapper)
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	expect(wrapper.vm.isError).toBe(false)
	expect(wrapper.vm.message).toBe('The settings were saved!')
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0]).toMatchObject({
		baseUrl: 'http://10.0.0.137:8081/v1',
		model: 'qwen3.5-4b',
		apiKey: 'sk-typed-not-yet-saved'
	})
	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
	expect((store.setEngineInfo as any).mock.calls[0][0]).toBe(CONST.ENGINE_LLM)
	// The LLM configuration is persisted BEFORE the engine choice.
	expect((store.setLLMConfig as any).mock.invocationCallOrder[0]).toBeLessThan(
		(store.setEngineInfo as any).mock.invocationCallOrder[0]
	)
})

test('Save for LLM Based engine is blocked until the typed key is validated', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.engineName = CONST.ENGINE_LLM
	wrapper.vm.llmBaseUrl = 'http://10.0.0.137:8081/v1'
	wrapper.vm.llmModel = 'qwen3.5-4b'
	wrapper.vm.llmApiKey = 'sk-typed-not-yet-saved'
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	expect(store.setEngineInfo).not.toHaveBeenCalled()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(wrapper.vm.isError).toBe(true)
	expect(wrapper.vm.message).toContain('Validate key')
})

test('A rejected LLM save does not persist the LLM Based engine choice', async () => {
	vi.spyOn(AlecService, 'getLastLlmConfigError').mockReturnValue(
		'Cannot enable LLM Root Cause Analysis: the LLM configuration has not been validated'
	)
	const { wrapper, store } = buildWrapper()
	store.setLLMConfig = vi.fn().mockResolvedValue(false)
	wrapper.vm.engineName = CONST.ENGINE_LLM
	wrapper.vm.llmBaseUrl = 'http://10.0.0.137:8081/v1'
	wrapper.vm.llmModel = 'qwen3.5-4b'
	wrapper.vm.llmApiKey = 'sk-typed'
	await wrapper.vm.$nextTick()
	await validateOk(wrapper)
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect(store.setEngineInfo).not.toHaveBeenCalled()
	expect(wrapper.vm.isError).toBe(true)
	expect(wrapper.vm.message).toContain('has not been validated')
	expect(wrapper.vm.message).toContain('Nothing was saved')
})

test('A rejected engine save surfaces the server reason', async () => {
	vi.spyOn(AlecService, 'getLastEngineError').mockReturnValue(
		'Cannot select LLM-based clustering: the LLM configuration has not been validated'
	)
	const { wrapper, store } = buildWrapper()
	store.setEngineInfo = vi.fn().mockResolvedValue(false)
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()
	expect(wrapper.vm.isError).toBe(true)
	expect(wrapper.vm.message).toContain('Cannot select LLM-based clustering')
})

test('Clearing the key blocks LLM Based clustering but not a DBSCAN save', async () => {
	const validateSpy = vi.spyOn(AlecService, 'validateLLMConfig')
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'http://10.0.0.137:8081/v1', 'qwen3.5-4b')
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-clear-key"]').trigger('click')

	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	// The message says what to do: pick the non-LLM engine (not "set up an LLM").
	expect(wrapper.vm.message).toContain('Switch the Correlation Engine to Clustering')
	const banner = wrapper.find('[data-test="llm-not-validated-banner"]')
	expect(banner.exists()).toBe(true)
	expect(banner.text()).toContain('being cleared')
	expect(banner.text()).toContain('switch the Correlation Engine to Clustering')
	expect(wrapper.find('[data-test="llm-cleared-hint"]').text()).toContain('record of its validation')

	// Back on DBSCAN the clear goes through, and needs no validation.
	wrapper.vm.engineName = CONST.ENGINE_DBSCAN
	await wrapper.vm.$nextTick()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(validateSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0].clearApiKey).toBe(true)
	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
})

test('Save sends clustering frequency + prompt for the LLM engine', async () => {
	const { wrapper, store } = buildWrapper()
	// A stored, validated, unchanged setup needs no re-validation.
	seedValidatedStore(wrapper, store, 'https://api.anthropic.com/v1/', 'claude-sonnet-4-6')
	wrapper.vm.engineName = CONST.ENGINE_LLM
	wrapper.vm.clusterFrequencyOption = { label: 'Every 15 minutes', value: 900000 }
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	const args = (store.setEngineInfo as any).mock.calls[0]
	expect(args[0]).toBe(CONST.ENGINE_LLM)
	expect(args[2].clusterFrequencyMs).toBe(900000)
	expect(typeof args[2].clusterPrompt).toBe('string')
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

test('Enable checkbox is grayed out until the LLM setup is validated', async () => {
	const { wrapper, store } = buildWrapper()
	// Fresh ship: nothing configured → checkbox blocked + hint visible.
	expect(wrapper.vm.llmCannotEnable).toBe(true)
	const enabledBox = wrapper.findComponent('[data-test="llm-enabled"]') as any
	expect(enabledBox.props('disabled')).toBe(true)
	const hint = wrapper.find('[data-test="llm-no-key-hint"]')
	expect(hint.exists()).toBe(true)
	expect(hint.text()).toContain('Requires a validated LLM')

	// Endpoint + model + key filled in is NOT enough (ALEC-310): the setup
	// must have passed Validate key.
	wrapper.vm.llmApiKey = 'sk-ant-test'
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmCannotEnable).toBe(true)
	expect(enabledBox.props('disabled')).toBe(true)

	// A passed validation for these exact values clears the guard.
	await validateOk(wrapper)
	expect(wrapper.vm.llmCannotEnable).toBe(false)
	expect(enabledBox.props('disabled')).toBe(false)
	expect(wrapper.find('[data-test="llm-no-key-hint"]').exists()).toBe(false)

	// Changing the model re-blocks enabling until validated again.
	wrapper.vm.llmModel = 'claude-opus-4-6'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmCannotEnable).toBe(true)

	// A stored setup the server reports validated also clears it (no probe).
	wrapper.vm.llmValidationResult = null
	wrapper.vm.llmApiKey = ''
	seedValidatedStore(wrapper, store, 'https://api.anthropic.com/v1/', 'claude-opus-4-6')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmCannotEnable).toBe(false)
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
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	await validateOk(wrapper)
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
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
		baseUrl: '',
		model: '',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
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
		baseUrl: '',
		model: '',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
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
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmAutoEvaluate = false
	await validateOk(wrapper)
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: false,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
		systemPrompt: '',
		apiKey: 'sk-ant-fresh'
	})
})

test('RCA help "?" describes the analysis and points to LLM Setup', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-key-help-popover"]').exists()).toBe(false)

	await wrapper.find('[data-test="llm-key-help"]').trigger('click')
	const popover = wrapper.find('[data-test="llm-key-help-popover"]')
	expect(popover.exists()).toBe(true)
	const html = popover.html()
	// RCA-specific now: AI Suggestions, auto-evaluate, system prompt, and a
	// pointer to the LLM Setup tab for the connection.
	expect(html).toContain('AI Suggestions')
	expect(html).toContain('System prompt')
	expect(html).toContain('LLM Setup')
	expect(html.toLowerCase()).not.toContain('option a')

	await wrapper.find('[data-test="llm-key-help"]').trigger('click')
	expect(wrapper.find('[data-test="llm-key-help-popover"]').exists()).toBe(false)
})

test('LLM Setup tab exposes Daily/Monthly token limits that ride along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="tab-llm-setup"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-daily-limit"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-monthly-limit"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmDailyTokenLimit = 100000
	wrapper.vm.llmMonthlyTokenLimit = 2000000
	await validateOk(wrapper)
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	const payload = (store.setLLMConfig as any).mock.calls[0][0]
	expect(payload.dailyTokenLimit).toBe(100000)
	expect(payload.monthlyTokenLimit).toBe(2000000)
})

test('LLM Setup help "?" covers the shared connection essentials', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-setup-help-popover"]').exists()).toBe(false)

	await wrapper.find('[data-test="llm-setup-help"]').trigger('click')
	const popover = wrapper.find('[data-test="llm-setup-help-popover"]')
	expect(popover.exists()).toBe(true)
	const html = popover.html()
	// The connection guidance lives here now: OpenAI-compatible, tool calling,
	// validate, key storage, token limits.
	expect(html).toContain('OpenAI-compatible')
	expect(html).toContain('chat/completions')
	expect(html.toLowerCase()).toContain('tool/function calling')
	expect(html).toContain('Validate key')
	expect(html).toContain('token limit')

	await wrapper.find('[data-test="llm-setup-help"]').trigger('click')
	expect(wrapper.find('[data-test="llm-setup-help-popover"]').exists()).toBe(false)
})

test('Endpoint + model inputs are exposed and custom values ride along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="llm-base-url"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-model"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-openai-test'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await validateOk(wrapper)
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.openai.com/v1',
		model: 'openai/gpt-4o',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
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
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	await validateOk(wrapper)
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
	wrapper.vm.llmModel = 'qwen3-14b'
	await validateOk(wrapper)
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

test('Endpoint/Model expose Set-as-default and Reset-to-default that round-trip', async () => {
	const { wrapper } = buildWrapper()
	await flushPromises()
	expect(wrapper.find('[data-test="llm-base-url-reset"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-base-url-set-default"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-model-reset"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-model-set-default"]').exists()).toBe(true)

	// Fresh ship: no recorded default and the fields are blank — nothing to reset
	// and nothing to record.
	expect(wrapper.vm.canResetBaseUrl).toBe(false)
	expect(wrapper.vm.canSetBaseUrlDefault).toBe(false)

	// Type a value — now it can be recorded as the default, but there's still no
	// default to reset back to.
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.canSetBaseUrlDefault).toBe(true)
	expect(wrapper.vm.canResetBaseUrl).toBe(false)

	// Record the current values as the per-field defaults.
	wrapper.vm.setBaseUrlDefault()
	wrapper.vm.setModelDefault()
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmDefaultBaseUrl).toBe('https://api.anthropic.com/v1/')
	expect(wrapper.vm.llmDefaultModel).toBe('claude-sonnet-4-6')
	// At the recorded default now: nothing to reset, nothing new to set.
	expect(wrapper.vm.canResetBaseUrl).toBe(false)
	expect(wrapper.vm.canSetBaseUrlDefault).toBe(false)

	// Drift away — reset becomes available again...
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmModel = 'google/gemma-4-e4b'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.canResetBaseUrl).toBe(true)
	// ...and reset restores the recorded default.
	wrapper.vm.resetBaseUrlToDefault()
	wrapper.vm.resetModelToDefault()
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmBaseUrl).toBe('https://api.anthropic.com/v1/')
	expect(wrapper.vm.llmModel).toBe('claude-sonnet-4-6')
})

test('Endpoint suggestions menu lists providers; Model menu is contextual, unlabeled', async () => {
	const { wrapper } = buildWrapper()
	await flushPromises()

	// Endpoint menu lists the curated providers (free-text still allowed).
	await wrapper.find('[data-test="llm-base-url-suggest"]').trigger('click')
	const epMenu = wrapper.find('[data-test="llm-base-url-menu"]')
	expect(epMenu.exists()).toBe(true)
	expect(epMenu.text()).toContain('Anthropic')
	expect(epMenu.text()).toContain('LM Studio')

	// With an Anthropic endpoint, the model menu suggests Claude ids — listed in
	// order, with NO price/capability labels (we don't bias the recommendation).
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-model-suggest"]').trigger('click')
	const modelMenu = wrapper.find('[data-test="llm-model-menu"]')
	expect(modelMenu.text()).toContain('claude-sonnet-4-6')
	expect(modelMenu.findAll('.llm-tier').length).toBe(0)
	const text = modelMenu.text()
	expect(text).not.toContain('Advanced')
	expect(text).not.toContain('Economy')

	// A local/unknown endpoint has no preset models — the "type your own" hint shows.
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	await wrapper.vm.$nextTick()
	expect(
		wrapper.find('[data-test="llm-model-menu"]').text().toLowerCase()
	).toContain('no preset models')
})

test('System prompt textarea is exposed and a custom prompt rides along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="llm-system-prompt"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmSystemPrompt = 'You are an ACME network expert.'
	await validateOk(wrapper)
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
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

// --- ALEC-310: validated LLM setup, validate-before-leaving, discard ---

test('LLM Setup always states whether the setup is validated', async () => {
	const { wrapper, store } = buildWrapper()
	let status = wrapper.find('[data-test="llm-validation-status"]')
	expect(status.exists()).toBe(true)
	expect(status.text()).toContain('Not validated')
	expect(status.classes()).toContain('is-warn')

	wrapper.vm.llmApiKey = 'sk-typed'
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.vm.$nextTick()
	await validateOk(wrapper)
	status = wrapper.find('[data-test="llm-validation-status"]')
	expect(status.text()).toContain('Validated')
	expect(status.classes()).toContain('is-ok')

	// The stored setup reported validated by the server shows the same.
	wrapper.vm.llmValidationResult = null
	wrapper.vm.llmApiKey = ''
	seedValidatedStore(wrapper, store, 'https://api.openai.com/v1', 'openai/gpt-4o')
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-validation-status"]').classes()).toContain('is-ok')
})

test('Save is blocked with a "validate first" message when the setup is filled but unvalidated', async () => {
	const validateSpy = vi.spyOn(AlecService, 'validateLLMConfig')
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKey = 'sk-typed'
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.vm.$nextTick()
	await wrapper.vm.saveConfiguration()
	await flushPromises()

	expect(validateSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(store.setEngineInfo).not.toHaveBeenCalled()
	expect(wrapper.vm.isError).toBe(true)
	expect(wrapper.vm.message).toContain('Validate key')
})

test('An edited, unvalidated setup locks the other tabs until validated or discarded', async () => {
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'https://api.openai.com/v1', 'openai/gpt-4o')
	await wrapper.vm.$nextTick()
	const tabButton = (name: string) =>
		wrapper.find(`[data-test="${name}"] [role="tab"]`)
	const selectedTab = () =>
		wrapper.find('[role="tab"][aria-selected="true"]').text().trim()
	// Go to the LLM Setup tab through a real click (Feather's own handler).
	await tabButton('tab-llm-setup').trigger('click')
	await wrapper.vm.$nextTick()
	expect(selectedTab()).toBe('LLM Setup')
	expect(wrapper.find('[data-test="tab-engine"]').classes()).not.toContain('tab-locked')
	expect(wrapper.find('[data-test="llm-setup-locked-hint"]').exists()).toBe(false)

	// Edit the model: the other two tabs gray out, the lock notice appears,
	// and a click on another tab no longer switches.
	wrapper.vm.llmModel = 'openai/gpt-4o-mini'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmSetupLocked).toBe(true)
	expect(wrapper.find('[data-test="tab-engine"]').classes()).toContain('tab-locked')
	expect(wrapper.find('[data-test="tab-llm"]').classes()).toContain('tab-locked')
	expect(wrapper.find('[data-test="tab-llm-setup"]').classes()).not.toContain('tab-locked')
	const notice = wrapper.find('[data-test="llm-setup-locked-hint"]')
	expect(notice.exists()).toBe(true)
	expect(notice.text()).toContain('Validate the key')
	expect(wrapper.find('[data-test="llm-discard-setup"]').exists()).toBe(true)
	await tabButton('tab-engine').trigger('click')
	await wrapper.vm.$nextTick()
	expect(selectedTab()).toBe('LLM Setup')
	await tabButton('tab-llm').trigger('click')
	await wrapper.vm.$nextTick()
	expect(selectedTab()).toBe('LLM Setup')

	// Validating the new values unlocks everything again — and the tabs
	// work (Feather's disabled prop is read once, so it must not be used).
	await validateOk(wrapper)
	expect(wrapper.vm.llmSetupLocked).toBe(false)
	expect(wrapper.find('[data-test="tab-engine"]').classes()).not.toContain('tab-locked')
	expect(wrapper.find('[data-test="llm-setup-locked-hint"]').exists()).toBe(false)
	await tabButton('tab-engine').trigger('click')
	await wrapper.vm.$nextTick()
	expect(selectedTab()).toBe('Correlation Engine')
})

test('Discard changes restores the stored setup and unlocks the tabs', async () => {
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'https://api.openai.com/v1', 'openai/gpt-4o')
	await wrapper.vm.$nextTick()

	// Edit endpoint + model, type a key, then get a FAILED validation.
	wrapper.vm.llmBaseUrl = 'https://openrouter.ai/api/v1'
	wrapper.vm.llmModel = 'anthropic/claude-sonnet-4.6'
	wrapper.vm.llmApiKey = 'sk-or-bad'
	await wrapper.vm.$nextTick()
	vi.spyOn(AlecService, 'validateLLMConfig').mockResolvedValue({
		ok: false,
		message: 'HTTP 401 from the provider'
	})
	await wrapper.vm.validateLlm()
	await flushPromises()
	expect(wrapper.vm.llmSetupLocked).toBe(true)
	expect(wrapper.find('[data-test="llm-validate-result"]').classes()).toContain('is-error')

	// "Go back to where I was".
	await wrapper.find('[data-test="llm-discard-setup"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmBaseUrl).toBe('https://api.openai.com/v1')
	expect(wrapper.vm.llmModel).toBe('openai/gpt-4o')
	expect(wrapper.vm.llmApiKey).toBe('')
	expect(wrapper.vm.llmApiKeyPresent).toBe(true)
	expect(wrapper.vm.llmSetupLocked).toBe(false)
	expect(wrapper.vm.llmValidated).toBe(true)
	expect(wrapper.find('[data-test="llm-validate-result"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-setup-locked-hint"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="tab-engine"]').classes()).not.toContain('tab-locked')
})

test('Clearing the key does not lock the tabs (nothing to validate)', async () => {
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'https://api.openai.com/v1', 'openai/gpt-4o')
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-clear-key"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmSetupLocked).toBe(false)
	expect(wrapper.find('[data-test="tab-engine"]').classes()).not.toContain('tab-locked')
	// …but the setup no longer counts as validated.
	expect(wrapper.vm.llmValidated).toBe(false)
})

test('A failed validation does not satisfy the gate', async () => {
	vi.spyOn(AlecService, 'validateLLMConfig').mockResolvedValue({
		ok: false,
		message: 'HTTP 401 from the provider'
	})
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKey = 'sk-bad'
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.vm.$nextTick()
	await wrapper.vm.validateLlm()
	await flushPromises()
	expect(wrapper.vm.llmValidated).toBe(false)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(wrapper.vm.message).toContain('Validate key')
})

test('A passed validation is invalidated when the endpoint, model or key changes', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKey = 'sk-typed'
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.vm.$nextTick()
	await validateOk(wrapper)
	expect(wrapper.vm.llmValidated).toBe(true)
	expect(wrapper.find('[data-test="llm-validate-stale"]').exists()).toBe(false)

	wrapper.vm.llmModel = 'openai/gpt-4o-mini'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmValidated).toBe(false)
	expect(wrapper.find('[data-test="llm-validate-stale"]').exists()).toBe(true)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(wrapper.vm.message).toContain('Validate key')

	// Validating the new values clears the gate again.
	await validateOk(wrapper)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0].model).toBe('openai/gpt-4o-mini')
})

test('A validation is not reported as stale after the save that stored it', async () => {
	const { wrapper, store } = buildWrapper()
	;(store.setLLMConfig as any).mockImplementation(async () => {
		store.llmConfig = {
			...(store.llmConfig as any),
			baseUrl: 'https://api.openai.com/v1',
			model: 'openai/gpt-4o',
			apiKeyPresent: true,
			validated: true
		}
		return true
	})
	wrapper.vm.llmApiKey = 'sk-typed'
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.vm.$nextTick()
	await validateOk(wrapper)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	// The key input was scrubbed, yet the shown result still matches the form
	// and the setup counts as validated (server says so, nothing is dirty).
	expect(wrapper.vm.llmApiKey).toBe('')
	expect(wrapper.find('[data-test="llm-validate-stale"]').exists()).toBe(false)
	expect(wrapper.vm.llmSetupDirty).toBe(false)
	expect(wrapper.vm.llmValidated).toBe(true)
	// And a second save (nothing changed) goes straight through.
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(2)
})

test('An unchanged validated stored setup needs no re-validation to toggle a feature', async () => {
	const validateSpy = vi.spyOn(AlecService, 'validateLLMConfig')
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'http://127.0.0.1:1234/v1', 'qwen3-14b')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmSetupDirty).toBe(false)

	wrapper.vm.llmEnabled = true
	await wrapper.vm.$nextTick()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(validateSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0].enabled).toBe(true)
})

test('A partial setup with no key cannot be validated, so it stays locked until discarded', async () => {
	const validateSpy = vi.spyOn(AlecService, 'validateLLMConfig')
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmModel = 'qwen3-14b'
	await wrapper.vm.$nextTick()
	// Nothing to validate with (the button is disabled) — and the tabs are
	// locked until the user either adds a key and validates, or discards.
	expect(wrapper.vm.llmCannotValidate).toBe(true)
	expect(wrapper.vm.llmSetupLocked).toBe(true)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(validateSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(wrapper.vm.message).toContain('Validate key')

	await wrapper.find('[data-test="llm-discard-setup"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmSetupLocked).toBe(false)
	expect(wrapper.vm.llmBaseUrl).toBe('')
})

// --- ALEC-310: not-validated banner + Remove LLM configuration ---

test('Banner tells the user to choose the non-LLM options while a feature is on without a validated setup', async () => {
	const { wrapper, store } = buildWrapper()
	// e.g. the validation record is gone (or an upgrade): stored but not validated.
	store.llmConfig = {
		...(store.llmConfig as any),
		baseUrl: 'http://127.0.0.1:1234/v1',
		model: 'google/gemma-4-e4b',
		apiKeyPresent: true,
		validated: false
	}
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmModel = 'google/gemma-4-e4b'
	wrapper.vm.llmApiKeyPresent = true
	wrapper.vm.llmEnabled = true
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	let banner = wrapper.find('[data-test="llm-not-validated-banner"]')
	expect(banner.exists()).toBe(true)
	expect(banner.text()).toContain('not validated')
	expect(banner.text()).toContain('turn LLM Root Cause Analysis off')
	expect(banner.text()).toContain('switch the Correlation Engine to Clustering')

	// Only the features still selected are named.
	wrapper.vm.engineName = CONST.ENGINE_DBSCAN
	await wrapper.vm.$nextTick()
	banner = wrapper.find('[data-test="llm-not-validated-banner"]')
	expect(banner.text()).toContain('turn LLM Root Cause Analysis off')
	expect(banner.text()).not.toContain('Correlation Engine')

	// Choosing the non-LLM options clears it …
	wrapper.vm.llmEnabled = false
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-not-validated-banner"]').exists()).toBe(false)

	// … and so does validating instead.
	wrapper.vm.llmEnabled = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-not-validated-banner"]').exists()).toBe(true)
	await validateOk(wrapper)
	expect(wrapper.find('[data-test="llm-not-validated-banner"]').exists()).toBe(false)
})

test('No banner when nothing LLM is selected, even unvalidated', async () => {
	const { wrapper } = buildWrapper()
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmEnabled).toBe(false)
	expect(wrapper.vm.isLlmEngine).toBe(false)
	expect(wrapper.find('[data-test="llm-not-validated-banner"]').exists()).toBe(false)
})

test('Remove LLM configuration resets everything to the empty state and falls back to Clustering', async () => {
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'http://127.0.0.1:1234/v1', 'google/gemma-4-e4b')
	wrapper.vm.llmDefaultBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmDefaultModel = 'google/gemma-4-e4b'
	wrapper.vm.llmEnabled = true
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	const button = wrapper.find('[data-test="llm-remove-config"]')
	expect(button.exists()).toBe(true)

	// Cancelling the confirmation changes nothing.
	confirmSpy.mockReturnValue(false)
	await button.trigger('click')
	await wrapper.vm.$nextTick()
	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(wrapper.vm.llmApiKeyCleared).toBe(false)
	expect(wrapper.vm.llmBaseUrl).toBe('http://127.0.0.1:1234/v1')
	expect(wrapper.vm.engineName).toBe(CONST.ENGINE_LLM)
	expect(wrapper.vm.llmEnabled).toBe(true)

	// Confirming empties the setup, turns RCA off and picks Clustering.
	confirmSpy.mockReturnValue(true)
	await button.trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmApiKeyCleared).toBe(true)
	expect(wrapper.vm.llmApiKeyPresent).toBe(false)
	expect(wrapper.vm.llmBaseUrl).toBe('')
	expect(wrapper.vm.llmModel).toBe('')
	expect(wrapper.vm.llmDefaultBaseUrl).toBe('')
	expect(wrapper.vm.llmDefaultModel).toBe('')
	expect(wrapper.vm.llmEnabled).toBe(false)
	expect(wrapper.vm.engineName).toBe(CONST.ENGINE_DBSCAN)
	expect(wrapper.vm.llmValidated).toBe(false)
	// Nothing LLM is selected any more, so no banner and no lock; the
	// pending-clear hint says what will happen on Save.
	expect(wrapper.find('[data-test="llm-not-validated-banner"]').exists()).toBe(false)
	expect(wrapper.vm.llmSetupLocked).toBe(false)
	expect(wrapper.find('[data-test="llm-cleared-hint"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-remove-config"]').exists()).toBe(false)

	// Save persists the empty state: key cleared, blanks everywhere, DBSCAN.
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0]).toMatchObject({
		clearApiKey: true,
		enabled: false,
		baseUrl: '',
		model: '',
		defaultBaseUrl: '',
		defaultModel: ''
	})
	expect((store.setLLMConfig as any).mock.calls[0][0].apiKey).toBeUndefined()
	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
	expect((store.setEngineInfo as any).mock.calls[0][0]).toBe(CONST.ENGINE_DBSCAN)
	expect(wrapper.vm.isError).toBe(false)
})

test('Discard after Clear Key restores the stored key and the feature state', async () => {
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'http://127.0.0.1:1234/v1', 'google/gemma-4-e4b')
	store.llmConfig = { ...(store.llmConfig as any), enabled: true }
	wrapper.vm.llmEnabled = true
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-clear-key"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmApiKeyCleared).toBe(true)
	expect(wrapper.vm.llmEnabled).toBe(false)
	// The pending-clear notice carries the way back.
	const hint = wrapper.find('[data-test="llm-cleared-hint"]')
	expect(hint.exists()).toBe(true)
	expect(hint.find('[data-test="llm-discard-setup"]').exists()).toBe(true)

	await hint.find('[data-test="llm-discard-setup"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmApiKeyCleared).toBe(false)
	expect(wrapper.vm.llmApiKeyPresent).toBe(true)
	expect(wrapper.vm.llmEnabled).toBe(true)
	expect(wrapper.vm.llmValidated).toBe(true)
	expect(wrapper.find('[data-test="llm-cleared-hint"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-clear-key"]').exists()).toBe(true)
})

test('Discard after Remove LLM configuration puts everything back, including the engine', async () => {
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'http://127.0.0.1:1234/v1', 'google/gemma-4-e4b')
	store.llmConfig = {
		...(store.llmConfig as any),
		enabled: true,
		defaultBaseUrl: 'http://127.0.0.1:1234/v1',
		defaultModel: 'google/gemma-4-e4b'
	}
	wrapper.vm.llmDefaultBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmDefaultModel = 'google/gemma-4-e4b'
	wrapper.vm.llmEnabled = true
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	confirmSpy.mockReturnValue(true)
	await wrapper.find('[data-test="llm-remove-config"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.engineName).toBe(CONST.ENGINE_DBSCAN)

	await wrapper.find('[data-test="llm-discard-setup"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmBaseUrl).toBe('http://127.0.0.1:1234/v1')
	expect(wrapper.vm.llmModel).toBe('google/gemma-4-e4b')
	expect(wrapper.vm.llmDefaultBaseUrl).toBe('http://127.0.0.1:1234/v1')
	expect(wrapper.vm.llmDefaultModel).toBe('google/gemma-4-e4b')
	expect(wrapper.vm.llmApiKeyCleared).toBe(false)
	expect(wrapper.vm.llmApiKeyPresent).toBe(true)
	expect(wrapper.vm.llmEnabled).toBe(true)
	expect(wrapper.vm.engineName).toBe(CONST.ENGINE_LLM)
	expect(wrapper.vm.llmValidated).toBe(true)
	expect(wrapper.vm.llmSetupDirty).toBe(false)
})

test('Remove LLM configuration is offered only when something is stored or typed', async () => {
	const { wrapper } = buildWrapper()
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-remove-config"]').exists()).toBe(false)
	wrapper.vm.llmModel = 'm'
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-remove-config"]').exists()).toBe(true)
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

test('Usage rollup renders humanized tokens; the dollar estimate is hidden for now', async () => {
	const { wrapper, store } = buildWrapper()
	store.llmUsage = usageFixture as any
	await wrapper.vm.$nextTick()

	const tokens = wrapper.find('[data-test="llm-usage-tokens"]')
	expect(tokens.exists()).toBe(true)
	// 1,234,567 should render as "1.2M" — that's the humanizeTokens contract.
	expect(tokens.text()).toContain('1.2M')
	// Raw count goes into the title attribute for hover.
	expect(tokens.attributes('title')).toContain('1,234,567')

	// The dollar-value estimate is intentionally commented out until the cost
	// model is reworked — the cost element must not render, and no "$" leaks into
	// the summary row.
	expect(wrapper.find('[data-test="llm-usage-cost"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-usage"]').text()).not.toContain('$')
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
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	await validateOk(wrapper)
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
			defaultBaseUrl: '',
			defaultModel: '',
			dailyTokenLimit: 0,
			monthlyTokenLimit: 0,
			systemPrompt: '',
			defaultSystemPrompt: '',
			apiKeyPresent: true,
			validated: true
		}
		return true
	})
	wrapper.vm.llmApiKey = 'sk-ant-new'
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	await validateOk(wrapper)
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	// trigger('click') fires the handler but doesn't await the chained promises
	// inside saveConfiguration; flushPromises lets the post-save scrub run.
	await flushPromises()

	// The secret must not linger in the input after the round-trip.
	expect(wrapper.vm.llmApiKey).toBe('')
	expect(wrapper.vm.llmApiKeyCleared).toBe(false)
	expect(wrapper.vm.llmApiKeyPresent).toBe(true)
})

test('Save never POSTs the LLM section when the stored config failed to load', async () => {
	// Mount WITHOUT the pre-seeded llmConfig: the store starts empty and the
	// mount-time fetch fails, so the form holds blank initial values that must
	// not overwrite the server's stored endpoint/model/prompt.
	const wrapper = mount(AccountSettings, {
		global: {
			plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })]
		}
	} as any) as any
	const store = useUserStore()
	store.setEngineInfo = vi.fn().mockResolvedValue(true)
	store.getEngineInfo = vi.fn()
	store.setLLMConfig = vi.fn().mockResolvedValue(true)
	store.getLLMConfig = vi.fn().mockResolvedValue(null) // fetch fails
	store.getLLMUsage = vi.fn().mockResolvedValue(null)
	await flushPromises()

	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	// Engine settings still save; the LLM POST is skipped entirely.
	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	// A config that never loaded is not an edit: the other tabs stay reachable.
	expect(wrapper.vm.llmSetupDirty).toBe(false)
	expect(wrapper.vm.llmSetupLocked).toBe(false)
})

test('Leaving the LLM Based engine saves the engine before the LLM section', async () => {
	// While the stored engine is "llm" the server refuses a cleared key, so
	// the engine has to be saved first.
	const { wrapper, store } = buildWrapper()
	seedValidatedStore(wrapper, store, 'http://10.0.0.137:8081/v1', 'qwen3.5-4b')
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-clear-key"]').trigger('click')
	await wrapper.vm.saveConfiguration()
	await flushPromises()

	expect((store.setEngineInfo as any).mock.calls[0][0]).toBe(CONST.ENGINE_DBSCAN)
	expect((store.setLLMConfig as any).mock.calls[0][0].clearApiKey).toBe(true)
	expect((store.setEngineInfo as any).mock.invocationCallOrder[0]).toBeLessThan(
		(store.setLLMConfig as any).mock.invocationCallOrder[0]
	)
	expect(wrapper.vm.isError).toBe(false)
})

test('A rejected engine save does not post the LLM section', async () => {
	const { wrapper, store } = buildWrapper()
	store.setEngineInfo = vi.fn().mockResolvedValue(false)
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(wrapper.vm.isError).toBe(true)
})

test('Enable checkbox can always be turned OFF, even when re-enabling is blocked', async () => {
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	// Feature is on against a validated stored setup, then the model is
	// changed: re-enabling would be blocked (not validated any more), yet the
	// checkbox must stay operable so the user can switch the integration off.
	seedValidatedStore(wrapper, store, 'https://api.anthropic.com/v1/', 'claude-sonnet-4-6')
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmModel = 'claude-opus-4-6'
	await wrapper.vm.$nextTick()

	expect(wrapper.vm.llmCannotEnable).toBe(true)
	const enabledBox = wrapper.findComponent('[data-test="llm-enabled"]') as any
	expect(enabledBox.exists()).toBe(true)
	// ON + blocked prerequisites → still operable (so the user can turn it off).
	expect(enabledBox.props('disabled')).toBe(false)

	// Once OFF with the setup still unvalidated, it locks (can't re-enable).
	wrapper.vm.llmEnabled = false
	await wrapper.vm.$nextTick()
	expect(enabledBox.props('disabled')).toBe(true)
})

test('Saving with RCA on and an unvalidated setup is blocked with a pointer to Validate key', async () => {
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	// Persisted "enabled" from before ALEC-310 (or a forced value) with no
	// validation record: Save must not go through until validated.
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmApiKeyPresent = true
	store.llmConfig = {
		...(store.llmConfig as any),
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		apiKeyPresent: true,
		validated: false
	}
	await wrapper.vm.$nextTick()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(store.setEngineInfo).not.toHaveBeenCalled()
	expect(wrapper.vm.isError).toBe(true)
	expect(wrapper.vm.message).toContain('LLM Root Cause Analysis needs a validated LLM')

	// Validating the stored key (nothing typed) unblocks it.
	await validateOk(wrapper)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0].enabled).toBe(true)
})
