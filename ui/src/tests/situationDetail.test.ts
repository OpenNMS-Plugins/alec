import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SituationDetailTab from '@/components/SituationDetailTab.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'
import { useSituationsStore } from '@/store/useSituationsStore'

const situation = situationsMock[0]

vi.mock('@/services/AlecService', () => {
	return {
		sendFeedbackAcceptSituation: async () => true
	}
})

const wrapper = mount(SituationDetailTab, {
	global: {
		plugins: [createTestingPinia()]
	},
	props: { situationInfo: situation }
} as any) as any

test('Should change situation status on click', async () => {
	const store = useSituationsStore()
	const btnAccept = wrapper.find('[data-test="btn-reject"]')
	await btnAccept.trigger('click')
	expect(wrapper.vm.status).toEqual('REJECTED')
	expect(store.getSituation).toBeCalled()
})

test('Entity-encoded description renders as real HTML, not literal angle brackets', () => {
	// Pre-fix this rendered with v-html directly, so &lt;p&gt;...&lt;/p&gt; came
	// out as the literal text "<p>...</p>" on the page — see the screenshot
	// captured during the first manual test on the real OpenNMS deploy.
	const encoded = {
		...situationsMock[0],
		description:
			'&lt;p&gt;A outage was identified on interface.&lt;/p&gt; ' +
			'&lt;p&gt;ALEC Diagnostic: 5 alarms in 0.11s.&lt;/p&gt;'
	}
	const w = mount(SituationDetailTab, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: encoded }
	} as any) as any
	const desc = w.find('[data-test="situation-description"]')
	const html = desc.html()
	// The decoded markup should produce real <p> elements in the DOM.
	expect(desc.findAll('p').length).toBe(2)
	// And nothing inside the rendered text should be the literal entity form.
	expect(desc.text()).not.toContain('&lt;')
	expect(desc.text()).not.toContain('&gt;')
	// The human-readable content is intact.
	expect(desc.text()).toContain('A outage was identified on interface.')
	expect(desc.text()).toContain('ALEC Diagnostic: 5 alarms in 0.11s.')
	// Sanity: the wrapper element exists.
	expect(html).toContain('data-test="situation-description"')
})

test('Raw HTML description (already decoded) still renders correctly', () => {
	const raw = {
		...situationsMock[0],
		description: '<p>Raw paragraph one.</p> <p>Raw paragraph two.</p>'
	}
	const w = mount(SituationDetailTab, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: raw }
	} as any) as any
	const desc = w.find('[data-test="situation-description"]')
	expect(desc.findAll('p').length).toBe(2)
	expect(desc.text()).toContain('Raw paragraph one.')
})
