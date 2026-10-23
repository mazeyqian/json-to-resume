import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.mjs";

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: "jsdom",
    include: ["test/unit/specs/**/*.spec.js"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{js,vue}"],
      exclude: ["src/main.js"],
      reportsDirectory: "test/unit/coverage",
      reporter: ["lcov", "text"],
    },
  },
}));
