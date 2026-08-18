// Vitest global setup.
//
// The tests run in the jsdom environment (see vite.config.testing.ts for why
// not happy-dom). jsdom does not implement ResizeObserver / IntersectionObserver,
// which some @featherds components (e.g. @featherds/tabs) construct in their
// mounted() hook. Provide no-op stubs so mounting those components in tests
// doesn't throw. These are UI-only browser APIs with nothing to assert here.
class NoopObserver {
	observe() {
		return undefined
	}
	unobserve() {
		return undefined
	}
	disconnect() {
		return undefined
	}
	takeRecords() {
		return []
	}
}

globalThis.ResizeObserver = globalThis.ResizeObserver || (NoopObserver as any)
globalThis.IntersectionObserver =
	globalThis.IntersectionObserver || (NoopObserver as any)

// jsdom has no matchMedia; PrimeVue Select's mounted hook queries it for
// orientation handling.
globalThis.matchMedia =
	globalThis.matchMedia ||
	(((query: string) => ({
		matches: false,
		media: query,
		addEventListener: () => undefined,
		removeEventListener: () => undefined,
		addListener: () => undefined,
		removeListener: () => undefined,
		onchange: null,
		dispatchEvent: () => false
	})) as any)

// Tests own their apps (unlike production, where the host app renders ALEC's
// root), so PrimeVue can be installed the normal way. Theme 'none' skips the
// runtime style engine — component behavior, not styling, is under test.
import { config } from '@vue/test-utils'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

config.global.plugins.push([PrimeVue, { theme: 'none' }], ToastService)
