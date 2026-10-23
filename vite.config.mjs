import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import normalizeBasePath from "./config/base-path.js";

export default defineConfig({
  plugins: [vue({ template: { compilerOptions: { whitespace: "preserve" } } })],
  base: normalizeBasePath(process.env.BASE_PATH),
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: {
    host: "127.0.0.1",
    port: Number(process.env.PORT || 8081),
    strictPort: true,
    open: !process.argv.includes("--no-open"),
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  css: {
    postcss: { plugins: [autoprefixer()] },
  },
  build: {
    outDir: "dist",
    assetsDir: "static",
    assetsInlineLimit: 10000,
    sourcemap: false,
  },
});
