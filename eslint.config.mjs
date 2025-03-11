import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
})

const eslintConfig = [
  ...compat.env({
    browser: true,
    es2021: true,
  }),
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ),
  ...compat.plugins('@typescript-eslint', 'react'),
  ...compat.config({
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  }),
]

eslintConfig.push({
  ignores: [
    "!.storybook/**", // Mantém a pasta .storybook
    "!.jest/**", // Mantém a pasta .jest
    "!.generators/**", // Mantém a pasta .generators
  ],
});

export default eslintConfig
