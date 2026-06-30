import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'

export default defineConfig({
	plugins: [
		vue(),
		viteExternalsPlugin({ vue: 'Vue' })
	],
	resolve: {
		alias: { '@/': new URL('./src/', import.meta.url).pathname },
		dedupe: ['vue']
	},
	build: {
		cssCodeSplit: false,
		lib: {
			entry: path.resolve(__dirname, 'src/chatbot.ts'),
			name: 'alecChatbot',
			fileName: (format) => `alecChatbot.${format}.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: { globals: { vue: 'Vue' } }
		}
	}
})
