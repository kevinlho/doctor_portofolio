import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            // Treat ion-icon as custom element
            isCustomElement: (tag) => tag === 'ion-icon'
          }
        }
      }
    ),
    vueDevTools(),
  ],
  base: '/doctor_portofolio/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    watch: {
      usePolling: true,
    }
  },
})
