import { fileURLToPath } from 'node:url'

import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      include: ['./src/**/*.spec.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      watch: false,
    },
  }),
)
