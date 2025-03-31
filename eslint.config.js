import pluginJs from '@eslint/js'
import vitest from '@vitest/eslint-plugin'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginPromise from 'eslint-plugin-promise'
import pluginReactRefresh from "eslint-plugin-react-refresh";
import globals from 'globals'
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint'
import pluginImport from 'eslint-plugin-import';


export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReactRefresh.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPromise.configs['flat/recommended'],
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginImport.flatConfigs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { 'react-hooks': pluginReactHooks },
    rules: { 'react-hooks/rules-of-hooks': 'error', 'react-hooks/exhaustive-deps': 'warn' },
  },
  {
    ignores: ['dist/', 'public/', 'history/'],
  },
  {
    files: ['**/*.test.{tsx,ts}'],
    plugins: {
      vitest,
    },
    rules: vitest.configs.recommended.rules,
  },
  {
    ...jsxA11y.flatConfigs.recommended,
    plugins: { 'jsx-a11y': jsxA11y },
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: { ...globals.serviceworker, ...globals.browser },
    },
  },
  {
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'prefer-const': 'error',
      eqeqeq: 'error',
      'no-duplicate-imports': 'error',
      'react/prop-types': 0,
      'react/forbid-dom-props': ['error', { forbid: ['style'] }],
    },
  },
]
