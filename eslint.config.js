const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    rules: {
      // Common best practices
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Example opinionated rules (optional)
      'no-trailing-spaces': 'error',
      'brace-style': ['error', '1tbs'],
    },

    ignores: ['node_modules/*', 'dist/*', 'build/*', '.expo/*', 'coverage/*'],
  },
])
