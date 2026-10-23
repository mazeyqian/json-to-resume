import { defineConfig, devices } from "@playwright/test";

const mode = process.env.E2E_MODE || "dev";
const baseURL = "http://127.0.0.1:8081" + (mode === "pages" ? "/json-to-resume/" : "/");
const commands = {
  dev: "npm run dev -- --no-open",
  preview: "npm run preview",
  pages: "npm run preview:pages",
};

export default defineConfig({
  testDir: "./test/e2e/specs",
  reporter: "list",
  use: {
    baseURL,
    trace: "retain-on-failure",
  },
  webServer: {
    command: commands[mode],
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
