"use strict";

async function build () {
  const { build: viteBuild } = await import("vite");
  const plugins = [];
  if (process.env.npm_config_report || process.argv.includes("--report")) {
    const { visualizer } = await import("rollup-plugin-visualizer");
    plugins.push(visualizer({
      filename: "node_modules/.cache/bundle-report.html",
      open: process.env.CI !== "true",
    }));
  }
  await viteBuild({ plugins });
}

build().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
