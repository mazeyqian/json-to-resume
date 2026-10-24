# Repository Guidelines

## Project structure and module organization

This repository is a Vue 3 single-page application built with Vite. Application code lives in `src/`: `main.js` mounts the layout, which renders the sole resume page directly; `components/` contains the resume, experience, and layout components, and `conf/resume.js` is the editable resume data source. Keep bundled images in `src/assets/img/` and the maintained Bootstrap 4 Sass in `src/style/`. Native badges and progress bars replace BootstrapVue. `vite.config.mjs` configures the build, `build/build.js` provides optional bundle analysis, and `config/base-path.js` normalizes `BASE_PATH`. Vite copies static crawler files from `public/`. Tests live in `test/node/`, `test/unit/`, and `test/e2e/`; their configuration is at the repository root. Production output is generated in ignored `dist/` and must not be edited by hand.

## Build, test, and development commands

Use Node.js 22, at least 22.12.0. The project does not declare an `engines` field. GitHub Actions uses `npm install` without dependency caching. Locally, use pnpm for dependency operations with the committed `pnpm-lock.yaml`; run lifecycle scripts through npm. Preserve the lockfile policy and do not add `packageManager`, Corepack, or installer automation.

- `pnpm install --frozen-lockfile` installs the dependency graph recorded in `pnpm-lock.yaml`.
- `npm run e2e:install` installs the Chromium browser used by end-to-end tests.
- `npm run dev` starts Vite on port 8081 and opens a browser; `PORT` overrides the development port.
- `npm run dev -- --no-open` starts the development server without opening a browser.
- `npm run build` creates a root-path production bundle in `dist/`.
- `npm run build:pages` creates the GitHub Pages bundle with `/json-to-resume/` as its base path.
- `npm run validate:pages` checks the built Pages assets, metadata, `robots.txt`, and `sitemap.xml`; run it after `npm run build:pages`.
- `npm run build -- --report` writes and opens `node_modules/.cache/bundle-report.html`; `CI=true` disables opening it.
- `npm run preview` previews a root-path build; `npm run preview:pages` previews a Pages build.
- `npm run lint` checks JavaScript, Vue components, and `index.html` with ESLint 9.
- `npm run lint:fix` applies supported ESLint fixes.
- `npm run test:node` checks base-path normalization and prevents artifact path traversal.
- `npm run unit` runs Vitest component tests with jsdom and V8 coverage.
- `npm run e2e` runs the Playwright Chromium suite.
- `npm run test` runs the Node, unit, and end-to-end suites in sequence.
- `npm run e2e:preview` and `npm run e2e:pages` test the corresponding production preview. Build the matching artifact first; both builds overwrite `dist/`, so run them sequentially.

## Coding style and naming conventions

Follow `.editorconfig`: use UTF-8, LF line endings, two-space indentation, a final newline, and no trailing whitespace. JavaScript follows the ESLint flat configuration with double quotes, semicolons, and trailing commas in multiline structures. Vue 3 templates use `eslint-plugin-vue` correctness rules, and `index.html` uses `@html-eslint`. Name Vue components and files in kebab case, following `m-resume.vue`. Use descriptive camelCase names. Keep compatible Options API components and JavaScript; do not introduce a store or TypeScript without a requirement. Node helpers remain CommonJS; Vite, Vitest, and Playwright configurations use `.mjs`. Do not add broad guards or fallback state around guaranteed internal resume data.

## Testing guidelines

Vitest discovers `test/unit/specs/**/*.spec.js` and mounts Vue 3 components with Vue Test Utils 2. Coverage includes application JS and Vue files except `main.js`, with LCOV and text reports under `test/unit/coverage/` and no threshold. Node checks live in `test/node/` and browser scenarios in `test/e2e/specs/`; these are excluded from Vitest discovery. Playwright starts the development server by default, or the matching preview for `E2E_MODE=preview` or `pages`. Check direct loading and refresh at the site root, badges, progress accessibility, print visibility, browser errors, and failed local resources. Generated reports are ignored. Before submitting, run lint and all tests, then build and browser-test each production base path sequentially. Run `validate:pages` after the Pages build.

## Framework and build boundaries

Keep Vue and `@vue/compiler-sfc` aligned. The layout imports the resume directly; there is no client-side router or hash redirect. Render the sole page at `/` locally and `/json-to-resume/` on Pages. Preserve port 8081, strict port checks, disabled production source maps, hashed assets under `dist/static/`, and optional bundle analysis outside the deployment artifact. Vite manages shared modules and preserves template whitespace to retain inline spacing. `config/base-path.js` normalizes `BASE_PATH`; root builds use `/`, while Pages builds use `/json-to-resume/`. Use Vite's default modern-browser target; no ES5 or IE compatibility is promised. Do not use `NODE_OPTIONS=--openssl-legacy-provider`.

## GitHub Pages deployment

`.github/workflows/pages.yml` runs on pushes to `main` and manual dispatch. Its build job installs dependencies and Chromium, runs lint and all tests, builds and validates Pages, runs the production Pages browser test, then uploads `dist/`. The separate deploy job publishes only that artifact. Keep the canonical URL, Open Graph URL, JSON-LD URL, `robots.txt`, sitemap, and `SITE_URL` in `scripts/validate-pages.js` aligned with `https://chengchuu.github.io/json-to-resume/`. Do not deploy or change repository Pages settings as routine validation.

## Commit and pull request guidelines

Recent history uses Conventional Commit-style subjects such as `feat(project): ...`, `chore(deps): ...`, and `docs: ...`. Keep the subject concise and imperative; add a scope when it clarifies the affected area. Husky runs lint-staged before commits, and lint-staged applies ESLint fixes without an explicit `git add`. Pull requests should explain the change and verification performed, link relevant issues, and include before-and-after screenshots for visible resume or layout changes. Do not commit generated `dist/` files unless a release workflow explicitly requires them.
