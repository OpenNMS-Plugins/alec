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
