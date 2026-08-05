// Feather component base styles, bundled into the extension's style.css.
//
// Until OpenNMS 36 the host web UI was itself built on FeatherDS, so every
// Feather component class (.btn, .feather-input-wrapper, tabs, radio, ...)
// was already styled by the host page and the extension shipped none of it.
// The OpenNMS 37 UI moved to PrimeVue and no longer loads any Feather CSS,
// which left this plugin rendering unstyled. Import the component styles
// explicitly so the bundle is self-sufficient on any host. On a Feather-based
// host these define the same rules the host already has, so they are harmless.
//
// Keep this the FIRST import of main.ts: application styles must come after
// the Feather base rules in the generated style.css so they can override them.
import '@featherds/styles'
import '@featherds/app-bar/dist/style.css'
import '@featherds/app-layout/dist/style.css'
import '@featherds/autocomplete/dist/style.css'
import '@featherds/button/dist/style.css'
import '@featherds/checkbox/dist/style.css'
import '@featherds/chips/dist/style.css'
import '@featherds/date-input/dist/style.css'
import '@featherds/dialog/dist/style.css'
import '@featherds/drawer/dist/style.css'
import '@featherds/dropdown/dist/style.css'
import '@featherds/expansion/dist/style.css'
import '@featherds/icon/dist/style.css'
import '@featherds/input/dist/style.css'
// Transitive Feather packages (pulled in by input/select/autocomplete et al.);
// their CSS is required for the composed widgets to render correctly.
import '@featherds/input-helper/dist/style.css'
import '@featherds/list/dist/style.css'
import '@featherds/megamenu/dist/style.css'
import '@featherds/menu/dist/style.css'
import '@featherds/navigation-rail/dist/style.css'
import '@featherds/pagination/dist/style.css'
import '@featherds/progress/dist/style.css'
import '@featherds/protected-input/dist/style.css'
import '@featherds/radio/dist/style.css'
import '@featherds/ripple/dist/style.css'
import '@featherds/select/dist/style.css'
import '@featherds/snackbar/dist/style.css'
import '@featherds/table/dist/style.css'
import '@featherds/tabs/dist/style.css'
import '@featherds/textarea/dist/style.css'
import '@featherds/tooltip/dist/style.css'

// Theme variables (--feather-*). A Feather-based host defines these on :root
// and switches them for dark mode, so injecting a theme unconditionally would
// pin the plugin to one theme and break dark mode there. Instead, when the
// host page defines no Feather theme (the PrimeVue-based OpenNMS 37 host),
// inject the matching theme at runtime. That host still stamps the Feather
// theme name ("open-light"/"open-dark") as a class on <html> and flips it
// with its dark-mode toggle, so key off that class and follow it live. The
// vendored copies keep only the :root variable blocks — no @font-face (would
// base64-inline fonts the host provides) and no global utility classes
// (would restyle host pages). The <style> is head-PREPENDED so a real host
// theme, should one appear later in the cascade, still wins every tie.
import openLightTheme from './assets/feather-open-light-vars.css?inline'
import openDarkTheme from './assets/feather-open-dark-vars.css?inline'

// Probe two sentinels so a stray single-var definition by some other plugin
// or host shim can't make us skip injection and leave the rest undefined.
const rootStyle = getComputedStyle(document.documentElement)
const hostHasTheme =
	rootStyle.getPropertyValue('--feather-primary').trim() !== '' &&
	rootStyle.getPropertyValue('--feather-background').trim() !== ''
if (!hostHasTheme) {
	const style = document.createElement('style')
	style.setAttribute('data-alec-feather-theme', '')
	let currentDark: boolean | undefined
	const applyTheme = () => {
		const dark = document.documentElement.classList.contains('open-dark')
		if (dark === currentDark) return
		currentDark = dark
		style.textContent = dark ? openDarkTheme : openLightTheme
	}
	applyTheme()
	document.head.prepend(style)
	new MutationObserver(applyTheme).observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['class']
	})
}
