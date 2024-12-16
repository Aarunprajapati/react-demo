import process from 'node:process'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import { VitePWA } from 'vite-plugin-pwa'

// Load environment variables and merge them with process.env
process.env = {
    ...process.env,
    ...loadEnv(process.env.ENV || 'development', process.cwd()),
} // PWA Options
const pwaOptions: Partial<VitePWAOptions> = {
    mode: 'development',
    base: '/',
    includeAssets: ['favicon.svg'],
    manifest: {
        name: 'PWA',
        short_name: 'PWA Router',
        theme_color: '#FFFFFF',
        icons: [
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
            },
        ],
    },
    devOptions: {
        enabled: process.env.SW_DEV === 'true',
        type: 'module',
        navigateFallback: 'index.html',
    },
}

// Export Vite Configuration
export default defineConfig({
    build: {
        sourcemap: process.env.SOURCE_MAP === 'true',
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    antd: ['antd'],
                },
            },
        },
        dynamicImportVarsOptions: { warnOnError: true },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [react(), VitePWA(pwaOptions)],
})
