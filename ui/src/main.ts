// Must stay the first import: bundles the Feather base styles the OpenNMS 37
// (PrimeVue) host no longer provides, before any application CSS.
import './feather-styles'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
const envMode = import.meta.env.MODE
import { createPinia } from 'pinia'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window['alecUiExtension'] = App

if (envMode == 'development') {
	createApp(App).use(router).use(createPinia()).mount('#app')
}
