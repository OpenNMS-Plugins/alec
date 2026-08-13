import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		viteExternalsPlugin({
			vue: 'Vue',
			pinia: 'Pinia',
			'vue-router': 'VueRouter'
		}),
		AutoImport({
			imports: ['@vueuse/core', 'pinia'],
			eslintrc: {
				enabled: true,
				filepath: './.eslintrc-auto-import.json'
			}
		})
	],
	resolve: {
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname,
			'~@featherds': '@featherds'
		},
		dedupe: ['vue']
	},
	build: {
		cssCodeSplit: false, // keep css in one chunk
		lib: {
			entry: path.resolve(__dirname, 'src/main.ts'),
			name: 'alecUiExtension',
			fileName: (format) => `alecUiExtension.${format}.js`,
			// vite 6 names the emitted lib CSS after the package by default
			// (ui-extension.css); the OpenNMS host loads it as style.css, so
			// pin the name to keep the deployed ui-ext/style.css contract.
			cssFileName: 'style'
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue', 'pinia', 'vue-router'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue',
					pinia: 'Pinia',
					'vue-router': 'VueRouter'
				}
			}
		}
	}
})
