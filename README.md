# blog.mazey.net

> My blog project by Vue.js.

## 主题

- 色系：#847B76
- 动物：猫咪三三

## 技术栈

Vue2, ES5+, localStorage

## Bug

- Node短时间内不同GET返回相同结果。

## 需求

- 页面加载的时候固定body尺寸。
- 轮播，标签云悬浮出现阴影。

## 完善

- 把文章列表属性放在Vuex里面，初始化的时候遍历下。
- 观察下面冒泡会不会失败，改成setTimeout异步试试。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
