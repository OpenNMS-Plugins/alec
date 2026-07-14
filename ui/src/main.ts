import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
const envMode = import.meta.env.MODE
// Base Feather utility classes (theme-independent). We deliberately do NOT
// import a Feather *theme* here: this bundle is loaded as a UI extension inside
// the OpenNMS host, which already defines the active theme (light or dark) via
// the :root --feather-* variables. Pinning open-light here would force the
// plugin to light and make the OpenNMS dark mode unreadable. The standalone dev
// server has no host shell, so it loads a theme separately via index.html
// (src/theme-dev.ts) — that file is not referenced by this entry, so it is not
// bundled into the extension.
import '@featherds/styles'
import { createPinia } from 'pinia'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window['alecUiExtension'] = App

if (envMode == 'development') {
	createApp(App).use(router).use(createPinia()).mount('#app')
}
