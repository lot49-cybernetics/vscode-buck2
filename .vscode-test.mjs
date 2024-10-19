import { defineConfig } from '@vscode/test-cli'

export default defineConfig({
  files: 'tests/e2e/**/*.test.ts',
  mocha: {
    ui: 'bdd',
    preload: 'tsx/cjs'
  },
})
