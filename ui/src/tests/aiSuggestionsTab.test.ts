import { test, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import AISuggestionsTab from '@/components/AISuggestionsTab.vue'
import { createTestingPinia } from '@pinia/testing'
import * as AlecService from '@/services/AlecService'

const mountTab = () =>
	mount(AISuggestionsTab, {
		global: {
			plugins: [createTestingPinia()],
			// router-link appears in the 'absent' state; stub it to avoid pulling vue-router into unit tests.
			stubs: { 'router-link': { template: '<a><slot /></a>' } }
		},
		props: { situationId: 'sit-1' }
	} as any) as any

beforeEach(() => {
	vi.useRealTimers()
})

test('Renders the "absent" empty-state when server returns no record (204)', async () => {
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue(null)
	const wrapper = mountTab()
	await flushPromises()
	expect(wrapper.find('[data-test="ai-absent"]').exists()).toBe(true)
})

test('Renders the pending state with spinner while server reports pending', async () => {
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue({
		situationId: 'sit-1',
		status: 'pending',
		rootCauses: [],
		resolutions: [],
		requestedAt: Date.now(),
		completedAt: null,
		error: null,
		model: 'claude-sonnet-4-6'
	})
	const wrapper = mountTab()
	await flushPromises()
	expect(wrapper.find('[data-test="ai-pending"]').exists()).toBe(true)
})

test('Renders ordered lists of root causes and resolutions when ready', async () => {
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue({
		situationId: 'sit-1',
		status: 'ready',
		rootCauses: ['link saturation', 'QoS misconfig'],
		resolutions: ['check interface counters', 'verify QoS policy', 'open vendor ticket'],
		requestedAt: 1000,
		completedAt: 2000,
		error: null,
		model: 'claude-sonnet-4-6'
	})
	const wrapper = mountTab()
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
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue({
		situationId: 'sit-1',
		status: 'failed',
		rootCauses: [],
		resolutions: [],
		requestedAt: 1000,
		completedAt: 2000,
		error: 'HTTP 401: invalid api key',
		model: 'claude-sonnet-4-6'
	})
	const wrapper = mountTab()
	await flushPromises()
	const panel = wrapper.find('[data-test="ai-failed"]')
	expect(panel.exists()).toBe(true)
	expect(panel.html()).toContain('HTTP 401: invalid api key')
	expect(wrapper.find('[data-test="ai-retry"]').exists()).toBe(true)
})

test('Retry button re-fetches the suggestion record', async () => {
	const spy = vi
		.spyOn(AlecService, 'getClaudeSuggestion')
		.mockResolvedValue({
			situationId: 'sit-1',
			status: 'failed',
			rootCauses: [],
			resolutions: [],
			requestedAt: 1000,
			completedAt: 2000,
			error: 'old error',
			model: 'claude-sonnet-4-6'
		})
	const wrapper = mountTab()
	await flushPromises()
	expect(spy).toHaveBeenCalledTimes(1)
	await wrapper.find('[data-test="ai-retry"]').trigger('click')
	await flushPromises()
	expect(spy).toHaveBeenCalledTimes(2)
})

test('Renders error state and Retry button when the GET itself fails', async () => {
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue(false as any)
	const wrapper = mountTab()
	await flushPromises()
	expect(wrapper.find('[data-test="ai-error"]').exists()).toBe(true)
})
