import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: true,
      provider: "istanbul",
      include: ["tests/**/*.{js,ts}"],
      reporter: ["json", "lcov"],
    },
  },
});
