import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname,
			'~@featherds': '@featherds'
		},
		// Ensure a single Vue/Pinia copy in the test graph — two copies make
		// reactive objects from one instance hit another's private fields
		// ("Cannot read private member #destroyed ...") when mounting.
		dedupe: ['vue', 'pinia']
	},
	test: {
		globals: true,
		setupFiles: ['./src/tests/setup.ts'],
		// jsdom, not happy-dom: happy-dom 20's DOM classes use real ES private
		// fields (e.g. MutationObserver#destroyed) that throw when accessed
		// through a Vue-reactivity Proxy — which is exactly how @featherds
		// input-helper stores its observer. jsdom handles it. (happy-dom is
		// still a declared dep, pinned to the security-fixed 20.x.)
		environment: 'jsdom'
	}
})
