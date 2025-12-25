// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import pluginOxlint from 'eslint-plugin-oxlint'
import pluginSecurity from 'eslint-plugin-security'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginStorybook from 'eslint-plugin-storybook'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/ignores',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      'commitlint.config.js',
      'knip.json',
    ],
  },

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        allowDefaultProject: ['*.js', '*.ts', '*.mjs'],
      },
    },
  },
  pluginUnicorn.configs['recommended'],
  pluginSecurity.configs.recommended,
  ...pluginStorybook.configs['flat/recommended'],
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  {
    name: 'app/import-sorting',
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  ...pluginOxlint.configs['flat/recommended'],
  {
    name: 'app/custom-rules',
    files: ['**/*.{ts,mts,tsx,vue}'],
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      'vue/no-v-html': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-at': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  skipFormatting,
)
