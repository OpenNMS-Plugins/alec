import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SituationCard from '@/components/SituationCard.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'

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
