import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	console.info(`Running in ${mode} mode`)
	return {
		plugins: [
			react(),
			VitePWA({
				registerType: 'autoUpdate',
				// includeAssets copies files from `public` into the build output
				includeAssets: ['vite.svg', 'icons/icon-180x180.png'],
				manifest: {
					name: 'Frontend Template',
					short_name: 'Template',
					description: 'Starter template using Vite, React, and TypeScript.',
					lang: 'en',
					id: '/',
					start_url: '/',
					scope: '/',
					display: 'standalone',
					orientation: 'portrait',
					background_color: '#ffffff',
					theme_color: '#ffffff',
					categories: ['utilities'],
					icons: [
						{
							src: '/icons/icon-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: '/icons/icon-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
						{
							src: '/icons/icon-512x512.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'maskable',
						},
					],
				},
				devOptions: {
					enabled: mode === 'development',
				},
			}),
		],
	}
})
