import { test, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import SituationCard from '@/components/SituationCard.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'
import * as AlecService from '@/services/AlecService'

beforeEach(() => {
	// Default: no AI record for this situation. Individual tests override.
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue(null)
})

test('Should emit situation Id on click', async () => {
	const situation = situationsMock[0]
	const wrapper = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: situation, selected: true }
	} as any) as any
	const card = wrapper.find('.card')
	await card.trigger('click')
	expect(wrapper.emitted()['situation-selected'][0]).toEqual([situation.id])
})

// --- AI badge (slice 6) ---

test('AI badge is hidden when server returns no suggestion record', async () => {
	const wrapper = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: situationsMock[0] }
	} as any) as any
	await flushPromises()
	expect(wrapper.find('[data-test="ai-badge"]').exists()).toBe(false)
})

test('AI badge renders "AI" with ready class when status is ready', async () => {
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue({
		situationId: 'x',
		status: 'ready',
		rootCauses: ['c'],
		resolutions: ['r'],
		requestedAt: 1,
		completedAt: 2,
		error: null,
		model: 'claude-sonnet-4-6'
	})
	const wrapper = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: situationsMock[0] }
	} as any) as any
	await flushPromises()
	const badge = wrapper.find('[data-test="ai-badge"]')
	expect(badge.exists()).toBe(true)
	expect(badge.text().trim()).toBe('AI')
	expect(badge.classes()).toContain('ready')
})

test('AI badge renders "AI…" with pending class while analysis is in flight', async () => {
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue({
		situationId: 'x',
		status: 'pending',
		rootCauses: [],
		resolutions: [],
		requestedAt: 1,
		completedAt: null,
		error: null,
		model: 'claude-sonnet-4-6'
	})
	const wrapper = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: situationsMock[0] }
	} as any) as any
	await flushPromises()
	const badge = wrapper.find('[data-test="ai-badge"]')
	expect(badge.exists()).toBe(true)
	expect(badge.text()).toContain('…')
	expect(badge.classes()).toContain('pending')
})

test('AI badge surfaces failed state', async () => {
	vi.spyOn(AlecService, 'getClaudeSuggestion').mockResolvedValue({
		situationId: 'x',
		status: 'failed',
		rootCauses: [],
		resolutions: [],
		requestedAt: 1,
		completedAt: 2,
		error: 'HTTP 401: invalid api key',
		model: 'claude-sonnet-4-6'
	})
	const wrapper = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: situationsMock[0] }
	} as any) as any
	await flushPromises()
	const badge = wrapper.find('[data-test="ai-badge"]')
	expect(badge.exists()).toBe(true)
	expect(badge.classes()).toContain('failed')
})

test('Description strips HTML markup from raw tags and entity-encoded tags', () => {
	const rawTags = {
		...situationsMock[0],
		description: '<p>Raw HTML description.</p>'
	}
	const wrapperRaw = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: rawTags, small: true }
	} as any) as any
	const descRaw = wrapperRaw.find('.description').text()
	expect(descRaw).not.toContain('<p>')
	expect(descRaw).not.toContain('</p>')
	expect(descRaw).toContain('Raw HTML description.')

	const encoded = {
		...situationsMock[0],
		description: '&lt;p&gt;Encoded HTML description.&lt;/p&gt;'
	}
	const wrapperEncoded = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: encoded, small: true }
	} as any) as any
	const descEncoded = wrapperEncoded.find('.description').text()
	expect(descEncoded).not.toContain('&lt;')
	expect(descEncoded).not.toContain('<p>')
	expect(descEncoded).toContain('Encoded HTML description.')
})
