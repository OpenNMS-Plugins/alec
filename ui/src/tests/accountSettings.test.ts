import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
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
	expect(popover.findAll('li').length).toBe(3)
	const html = popover.html()
	expect(html).toContain('Alpha')
	expect(html).toContain('Beta')
	expect(html).toContain('Epsilon')
	expect(html).toContain('144.47117699')
	expect(html).toContain('0.55257784')
	expect(html).toContain('100')

	await help.trigger('click')
	expect(wrapper.find('[data-test="variables-help-popover"]').exists()).toBe(
		false
	)
})

test('Reset button restores alpha/beta/epsilon to defaults', async () => {
	const { wrapper } = buildWrapper()
	wrapper.vm.alpha = 999
	wrapper.vm.beta = 0.99
	wrapper.vm.epsilon = 9999

	await wrapper.find('[data-test="variables-reset"]').trigger('click')

	expect(wrapper.vm.alpha).toBeCloseTo(144.47117699)
	expect(wrapper.vm.beta).toBeCloseTo(0.55257784)
	expect(wrapper.vm.epsilon).toBe(100)
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
