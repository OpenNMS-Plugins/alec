import { test, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import ConfigurationInfo from '@/components/ConfigurationInfo.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '@/store/useUserStore'

const mountWithEngineInfo = (engineInfo: any) => {
	const pushSpy = vi.fn()
	const wrapper = mount(ConfigurationInfo, {
		global: {
			plugins: [createTestingPinia({ createSpy: vi.fn })],
			provide: {
				// useRouter composable reads from this — see ui/src/composables/useRouter.ts
				router: { push: pushSpy }
			},
			// Make useRouter return our stub so the click handler can be observed.
			mocks: { $router: { push: pushSpy } }
		}
	} as any) as any
	const store = useUserStore()
	store.engineInfo = engineInfo
	return { wrapper, store, pushSpy }
}

test('Configuration button is always rendered, even with no persisted engine config', async () => {
	const { wrapper } = mountWithEngineInfo(null)
	await flushPromises()
	// Pre-fix this was hidden by v-if when engineInfo was null, creating the
	// chicken-and-egg trap where the only path to /settings disappeared after
	// a fresh KAR deploy.
	expect(wrapper.find('[data-test="configuration-info"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="configuration-not-set"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="configuration-not-set"]').text()).toBe(
		'CONFIGURE'
	)
})

test('Configuration button shows CLUSTERING when DBSCAN is the active engine', async () => {
	const { wrapper } = mountWithEngineInfo({
		engineName: 'dbscan',
		distanceMeasureName: 'hellinger',
		alpha: 145,
		beta: 0.55,
		epsilon: 150
	})
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="configuration-info"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="configuration-not-set"]').exists()).toBe(
		false
	)
	expect(wrapper.text()).toContain('CLUSTERING')
})

test('Configuration button shows DEEP LEARNING for a deeplearning engine', async () => {
	const { wrapper } = mountWithEngineInfo({
		engineName: 'deeplearning',
		distanceMeasureName: '',
		alpha: 0,
		beta: 0,
		epsilon: 0
	})
	await wrapper.vm.$nextTick()
	expect(wrapper.text()).toContain('DEEP LEARNING')
	expect(wrapper.find('[data-test="configuration-not-set"]').exists()).toBe(
		false
	)
})
