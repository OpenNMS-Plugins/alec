import { test, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import AISuggestionsTab from '@/components/AISuggestionsTab.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '@/store/useUserStore'
import * as AlecService from '@/services/AlecService'

// Seed llmConfig so the empty-state copy + Re-evaluate button visibility
// are testable. Pass null to simulate "no config fetched yet" (which is the
// same UI state as "disabled" from the user's perspective).
const mountTab = (llmConfig: any = { enabled: true, apiKeyPresent: true }) => {
	const wrapper = mount(AISuggestionsTab, {
		global: {
			plugins: [createTestingPinia({ createSpy: vi.fn })],
			stubs: { 'router-link': { template: '<a><slot /></a>' } }
		},
		props: { situationId: 7 }
	} as any) as any
	const store = useUserStore()
	store.llmConfig = llmConfig
	// Block the on-mount getLLMConfig call from clobbering our seed value.
	store.getLLMConfig = vi.fn().mockResolvedValue(llmConfig)
	return { wrapper, store }
}

beforeEach(() => {
	vi.useRealTimers()
})

// --- core states ---

test('Renders the "absent" empty-state when server returns no record (204)', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	const { wrapper } = mountTab()
	await flushPromises()
	expect(wrapper.find('[data-test="ai-absent"]').exists()).toBe(true)
})

test('Renders the pending state with spinner while server reports pending', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue({
		situationId: '7',
		status: 'pending',
		rootCauses: [],
		resolutions: [],
		requestedAt: Date.now(),
		completedAt: null,
		error: null,
		model: 'anthropic/claude-sonnet-4.6'
	})
	const { wrapper } = mountTab()
	await flushPromises()
	expect(wrapper.find('[data-test="ai-pending"]').exists()).toBe(true)
})

test('Renders ordered lists of root causes and resolutions when ready', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue({
		situationId: '7',
		status: 'ready',
		rootCauses: ['link saturation', 'QoS misconfig'],
		resolutions: ['check interface counters', 'verify QoS policy', 'open vendor ticket'],
		requestedAt: 1000,
		completedAt: 2000,
		error: null,
		model: 'anthropic/claude-sonnet-4.6'
	})
	const { wrapper } = mountTab()
	await flushPromises()
	expect(wrapper.find('[data-test="ai-ready"]').exists()).toBe(true)
	const causes = wrapper.find('[data-test="ai-root-causes"]').findAll('li')
	const resolutions = wrapper.find('[data-test="ai-resolutions"]').findAll('li')
	expect(causes.length).toBe(2)
	expect(resolutions.length).toBe(3)
	expect(causes[0].text()).toBe('link saturation')
	expect(resolutions[2].text()).toBe('open vendor ticket')
})

test('Renders error + Retry button when last attempt failed', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue({
		situationId: '7',
		status: 'failed',
		rootCauses: [],
		resolutions: [],
		requestedAt: 1000,
		completedAt: 2000,
		error: 'HTTP 401: invalid api key',
		model: 'anthropic/claude-sonnet-4.6'
	})
	const { wrapper } = mountTab()
	await flushPromises()
	const panel = wrapper.find('[data-test="ai-failed"]')
	expect(panel.exists()).toBe(true)
	expect(panel.html()).toContain('HTTP 401: invalid api key')
	expect(wrapper.find('[data-test="ai-retry"]').exists()).toBe(true)
})

test('Retry button re-fetches the suggestion record', async () => {
	const spy = vi
		.spyOn(AlecService, 'getLLMSuggestion')
		.mockResolvedValue({
			situationId: '7',
			status: 'failed',
			rootCauses: [],
			resolutions: [],
			requestedAt: 1000,
			completedAt: 2000,
			error: 'old error',
			model: 'anthropic/claude-sonnet-4.6'
		})
	const { wrapper } = mountTab()
	await flushPromises()
	expect(spy).toHaveBeenCalledTimes(1)
	await wrapper.find('[data-test="ai-retry"]').trigger('click')
	await flushPromises()
	expect(spy).toHaveBeenCalledTimes(2)
})

test('Renders error state and Retry button when the GET itself fails', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(false as any)
	const { wrapper } = mountTab()
	await flushPromises()
	expect(wrapper.find('[data-test="ai-error"]').exists()).toBe(true)
})

// --- config-aware empty-state messaging ---

test('Absent state copy says "disabled" when llmConfig.enabled is false', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	const { wrapper } = mountTab({ enabled: false, apiKeyPresent: true })
	await flushPromises()
	expect(wrapper.find('[data-test="ai-absent-disabled"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="ai-absent-no-key"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="ai-absent-not-yet-run"]').exists()).toBe(false)
})

test('Absent state copy says "no-key" when key is missing', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	const { wrapper } = mountTab({ enabled: true, apiKeyPresent: false })
	await flushPromises()
	expect(wrapper.find('[data-test="ai-absent-no-key"]').exists()).toBe(true)
})

test('Absent state copy says "not-yet-run" when fully configured', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	const { wrapper } = mountTab({ enabled: true, apiKeyPresent: true })
	await flushPromises()
	expect(wrapper.find('[data-test="ai-absent-not-yet-run"]').exists()).toBe(true)
})

// --- Re-evaluate button + reanalyze flow ---

test('Re-evaluate button is hidden when integration is disabled', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	const { wrapper } = mountTab({ enabled: false, apiKeyPresent: true })
	await flushPromises()
	expect(wrapper.find('[data-test="ai-reanalyze"]').exists()).toBe(false)
})

test('Re-evaluate button is hidden when no API key is configured', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	const { wrapper } = mountTab({ enabled: true, apiKeyPresent: false })
	await flushPromises()
	expect(wrapper.find('[data-test="ai-reanalyze"]').exists()).toBe(false)
})

test('Re-evaluate button is visible when integration is enabled with a key', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	const { wrapper } = mountTab({ enabled: true, apiKeyPresent: true })
	await flushPromises()
	expect(wrapper.find('[data-test="ai-reanalyze"]').exists()).toBe(true)
})

test('Re-evaluate click POSTs and transitions to pending on success', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	const reanalyzeSpy = vi
		.spyOn(AlecService, 'reanalyzeLLMSuggestion')
		.mockResolvedValue({
			situationId: '7',
			status: 'pending',
			rootCauses: [],
			resolutions: [],
			requestedAt: Date.now(),
			completedAt: null,
			error: null,
			model: 'anthropic/claude-sonnet-4.6'
		})
	const { wrapper } = mountTab()
	await flushPromises()

	await wrapper.find('[data-test="ai-reanalyze"]').trigger('click')
	await flushPromises()

	expect(reanalyzeSpy).toHaveBeenCalledWith(7)
	expect(wrapper.find('[data-test="ai-pending"]').exists()).toBe(true)
})

test('Re-evaluate failure shows an inline error in the absent panel', async () => {
	vi.spyOn(AlecService, 'getLLMSuggestion').mockResolvedValue(null)
	vi.spyOn(AlecService, 'reanalyzeLLMSuggestion').mockResolvedValue(false as any)
	const { wrapper } = mountTab()
	await flushPromises()

	await wrapper.find('[data-test="ai-reanalyze"]').trigger('click')
	await flushPromises()

	expect(wrapper.find('[data-test="ai-absent"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="ai-reanalyze-error"]').exists()).toBe(true)
})
