import PrimeVueConfig from 'primevue/config'
import ToastService from 'primevue/toastservice'
import OpenNMSPreset from './opennms-preset'
import { getCurrentInstance, provide } from 'vue'
import type { App } from 'vue'

// ALEC is a UI extension: the OpenNMS host app renders our root component
// inside ITS Vue tree (vue/pinia/vue-router are build externals resolved to
// the host's globals), so we can never call app.use(PrimeVue) — we don't own
// the app. PrimeVue components resolve their config two ways:
//   1. Options-API `this.$primevue` -> the MOUNTING app's globalProperties
//   2. usePrimeVue()/useToast() -> inject() against non-exported Symbols that
//      live in OUR bundled copy of primevue
// This module makes both paths work on any host:
//   - PrimeVue-based host (OpenNMS >= 37): reuse the host's live $primevue
//     config (its theme and dark-mode handling included) and bridge it to our
//     bundled Symbols via provide().
//   - Feather-based host (OpenNMS <= 36, Meridian): install our own config +
//     vendored OpenNMS preset into the host app's globalProperties (additive —
//     the key is absent there) so the bundled components self-theme.
// The Symbols are obtained legitimately by running the plugins' install
// against a capture-only shim app and replaying what they provide.

// Mirrors the host's ui/src/theme/primevue-setup.ts options.
const PRIMEVUE_OPTIONS = {
	theme: {
		preset: OpenNMSPreset,
		options: {
			prefix: 'p',
			darkModeSelector: '.open-dark',
			cssLayer: {
				name: 'primevue',
				order: 'primevue'
			}
		}
	},
	zIndex: {
		overlay: 1060,
		menu: 1060,
		modal: 1100,
		tooltip: 2100
	}
}

type CapturedInstall = {
	provides: Map<unknown, unknown>
	globalProperties: Record<string, unknown>
}

const captureInstall = (plugin: unknown, options?: unknown): CapturedInstall => {
	const captured: CapturedInstall = {
		provides: new Map(),
		globalProperties: {}
	}
	const shim = {
		config: { globalProperties: captured.globalProperties },
		provide: (key: unknown, value: unknown) => {
			captured.provides.set(key, value)
		},
		directive: () => shim,
		component: () => shim,
		use: () => shim
	}
	const install = (plugin as { install?: (app: App, opts?: unknown) => void })
		.install
	if (install) {
		install(shim as unknown as App, options)
	}
	return captured
}

let installed: { config: CapturedInstall; toast: CapturedInstall } | undefined

// Must be called from the root component's setup() (provide() needs a
// component context). Safe to call once per page load; the host app's
// globalProperties persist across ALEC route changes.
export const useOnmsUiHost = () => {
	const instance = getCurrentInstance()
	if (!instance) {
		return
	}
	const hostGlobals = instance.appContext.config.globalProperties as Record<
		string,
		unknown
	>

	if (!installed) {
		installed = {
			config: captureInstall(PrimeVueConfig, PRIMEVUE_OPTIONS),
			toast: captureInstall(ToastService)
		}
	}

	const hostPrimeVue = hostGlobals.$primevue as
		| { config: Record<string, unknown> }
		| undefined
	if (hostPrimeVue) {
		// PrimeVue host: our bundled composition-API code must inject the
		// HOST's config object so theme/dark-mode stay host-managed. Replay
		// our captured Symbols but point the config one at the host's object.
		for (const [key, value] of installed.config.provides) {
			const isConfigProvide = value === installed.config.globalProperties.$primevue
			provide(key as symbol, isConfigProvide ? hostPrimeVue : value)
		}
	} else {
		// Feather host: become our own PrimeVue install. globalProperties is
		// the documented mechanism app.use(PrimeVue) itself relies on.
		Object.assign(hostGlobals, installed.config.globalProperties)
		for (const [key, value] of installed.config.provides) {
			provide(key as symbol, value)
		}
	}

	// Toast service is ALEC-local either way (OnmsToastHost renders in our
	// subtree; the event bus is module-level in our bundle).
	if (!hostGlobals.$toast) {
		Object.assign(hostGlobals, installed.toast.globalProperties)
	}
	for (const [key, value] of installed.toast.provides) {
		provide(key as symbol, value)
	}
}
