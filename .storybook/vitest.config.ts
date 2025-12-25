import { fileURLToPath, URL } from 'node:url'

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import { configDefaults, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  plugins: [
    storybookTest({
      configDir: fileURLToPath(new URL('./', import.meta.url)),
    }),
  ],
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }],
      provider: playwright(),
      viewport: { height: 1080, width: 1920 },
    },
    exclude: [...configDefaults.exclude],
    setupFiles: [fileURLToPath(new URL('vitest.setup.ts', import.meta.url))],
    watch: false,
  },
})
