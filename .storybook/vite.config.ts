import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'
import { defineConfig } from 'vitest/config'

import viteConfig from '../vite.config'

export default defineConfig({
  ...viteConfig,
  plugins: [
    ...(viteConfig.plugins?.filter(
      (x): x is Plugin =>
        typeof x === 'object' &&
        x !== null &&
        'name' in x &&
        x.name !== 'vite:vue',
    ) ?? []),
    vue(),
  ],
})
