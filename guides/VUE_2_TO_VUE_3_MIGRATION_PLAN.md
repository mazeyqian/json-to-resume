# Vue 3 + Vite 迁移计划

## 概要与已确认决策

将当前 Vue 2.7/Webpack 5 应用迁移至 Vue 3/Vite，保留简历数据、页面外观、打印样式和 GitHub Pages 部署行为。

已确认：

- 移除 BootstrapVue，以原生 HTML 保留现有 Bootstrap 4 样式。
- 使用现代浏览器目标，不增加 legacy 插件或 IE 兼容层。
- 保留 JavaScript 和 Options API，不引入 TypeScript、Pinia 或新 UI 库。
- 本文记录迁移方案及后续单页决策。制定初始计划时仓库工作树干净。
- 仅保留简历页，直接显示在站点根路径；移除首页和 Vue Router。

迁移风险主要是徽章链接语义、进度条样式、Sass 图片路径，以及生产子路径下的动态资源加载。现有 `new Vue`、`Vue.use`、运行时模板和未使用的事件总线需要替换；组件没有发现需迁移的 filters、`$set` 或事件总线调用。

## 技术栈与依赖处理

以下版本已在制定计划时通过 npm 元数据核对，实施时固定新增与迁移依赖版本，并更新现有 pnpm 锁文件：

| 当前依赖或工具                         | 目标                                                               |
|:---------------------------------------|:-------------------------------------------------------------------|
| Vue 2.7.16、`vue-template-compiler`      | Vue 与 `@vue/compiler-sfc` 3.5.44                                   |
| Vue Router 3                           | 移除，改为直接渲染简历                                                   |
| Webpack 5 及 Vue loader                 | Vite 8.3.5、`@vitejs/plugin-vue` 6.0.10                              |
| BootstrapVue                           | 原生徽章、链接和进度条                                             |
| Vue Test Utils 1、Karma、Mocha、Chai     | Vue Test Utils 2.5.1、Vitest 5.0.5、jsdom 26.1.0                      |
| Istanbul/Babel 覆盖率                   | `@vitest/coverage-v8` 5.0.5                                         |
| Webpack Bundle Analyzer                | `rollup-plugin-visualizer` 7.1.1                                    |
| Playwright、ESLint 9、Sass 1.77.8        | 保留现有版本与非冲突配置                                           |

- 使用 Node 22，最低版本为 22.12.0；按后续决定，不声明 `engines` 字段。Vite 与 Vitest 的最低要求均允许该范围。参考 [Vite](https://vite.dev/guide/) 和 [Vitest](https://vitest.dev/guide/)。
- 保留项目内维护的 Bootstrap Sass；移除未直接使用的 `bootstrap` 包以及 `bootstrap-vue`。
- 移除 Webpack 专用 loader/plugin、Babel、Karma 及其插件、Mocha 和直接 Chai 依赖。
- 保留 `mazey`，因为现有标签脚本仍使用它；不运行该发布脚本。
- 保留 pnpm 锁文件策略及 workspace 文件，清理其中失效的 BootstrapVue 安装规则。新增构建依赖若需安装脚本，只允许已核实必要的包。

## 实施变更

### 应用与 UI

- 使用 `createApp(Layout).mount("#mazey")`；删除旧运行时模板、`Vue.config.productionTip`、未使用的事件总线和 `Vue.use(Mazey)`。
- 布局组件直接导入简历组件，保留布局容器，移除无用途且会清空同源数据的旧存储初始化。删除首页组件、专用样式和测试，以及路由配置与依赖；不添加旧路由兼容逻辑。
- 标签使用带 `badge badge-secondary badge-pill` 的 `span`；产品有链接时渲染 `a`，无链接时渲染 `span`，保留颜色、图标、文本和新窗口打开行为。
- 进度条保留 `.progress`、`.progress-bar`、12px 高度和百分比宽度，保留进度 ARIA 属性并以技能名称提供可访问名称。
- 保留简历数据结构、可信静态数据的 `v-html`、页面标题；不添加内部数据防御性包装。

### 构建、脚本与验证配置

- 新增 `vite.config.mjs`，复用 `config/base-path.js`；保留 `@` 别名、8081 端口、`PORT` 覆盖、自动打开与 `--no-open`，启用严格端口检查。
- `index.html` 增加模块入口；Vite 负责复制 `public/`。输出继续使用忽略的 `dist/` 和带 hash 的 `static/` 资源，关闭生产 source map，由 Vite 管理模块打包。
- 使用 Vite 默认现代浏览器目标，移除旧 ES5/Browserslist 承诺；Webpack 专属 runtime 文件由 Vite 的模块加载机制替代。参考 [Vite 浏览器目标](https://vite.dev/config/build-options.html#build-target)。
- 将现有构建入口精简为调用 Vite 的包装脚本，保留 `build`、`build:pages` 和可选报告行为。报告写到忽略的缓存目录，不进入部署产物。
- 新增 `preview` 和 `preview:pages`，分别匹配根路径与 `/json-to-resume/`；继续维护 `validate:pages`。
- 用 Vitest 接管 `unit`，保留 LCOV/text 覆盖率目录和无阈值策略；明确仅发现组件单测，排除 Node 和 Playwright 套件。
- 删除其余 Webpack 配置、旧环境配置、`.babelrc` 和 Karma 启动文件；保留仍使用的路径验证辅助模块。
- ESLint 切换 Vue 3 规则，保留现有格式规范；Vite/Vitest 使用 `.mjs`，现有 Node 工具继续使用 CommonJS。

### CI 与文档

- 保留 Pages 双任务结构、`main`/手动触发、权限、并发策略及 `dist/` 产物，不引入 npm 发布。
- 使用 Node 22、`npm install`、`npm run test` 和现有验证脚本，禁用缓存；按已提供的 action 约定使用 `setup-node@v6`。
- Pages 构建后增加生产预览浏览器测试，再上传产物。
- 更新 README 和 AGENTS.md，记录新命令、浏览器范围、UI 替换和 pnpm/npm 边界；不新增 `packageManager`、Corepack 或安装器。

## 验证与验收

制定计划时的基线：lint、4 个 Node 测试、1 个 Karma 单测、Pages 构建及产物验证通过；构建有两项既有体积警告。Playwright 因缺少 Chromium 未执行页面断言。

实施时：

1. 使用 pnpm 完成依赖变更，再运行 `npm run e2e:install`。修改 UI 前记录桌面、窄屏和打印模式截图。
2. 以布局直接渲染简历的测试替换首页单测；补充徽章有/无链接、自定义颜色、技能进度、空经验区隐藏、HTML 描述和打印隐藏规则的回归覆盖。
3. 保留路径归一化与目录逃逸测试；浏览器测试覆盖站点根路径直接加载、刷新、URL 不变、页面标题和无未捕获错误。
4. 执行 lint、Node/组件/E2E 测试、普通构建、Pages 构建和 Pages 产物验证。
5. 分别通过根路径和 Pages 生产预览检查 JS、CSS、图片、robots 和 sitemap；相关资源不得出现 404。
6. 对比迁移前后截图与打印布局，验证可选构建报告，最后检查 Git 差异、锁文件和 `git diff --check`。

完成后提供实际修改/删除清单、依赖替换理由、最终 `package.json`、验证结果与剩余限制。迁移验收使用本地生产预览，不部署、不修改远端 Pages 设置。
