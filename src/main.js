import Vue from 'vue'
import Layout from './components/Layout'
// 路由
import router from './router'
// vuex
import store from './store/index'
// import ElementUI from 'element-ui'
// import 'normalize.css' // DONE: 为何Bootstrap不格式化
// import 'element-ui/lib/theme-chalk/index.css'
// import Aplayer from 'vue-aplayer'
import './assets/main.css'
// import 'jquery'
// import 'bootstrap/js/dist/index'
// import 'bootstrap/js/dist/util'
// import 'bootstrap/js/dist/collapse'
import 'bootstrap/dist/js/bootstrap.bundle.min' // TODO: 后期按需引入插件
// require('bootstrap')
// Vue.use(ElementUI)
// 引入字体
import './assets/icon-font/iconfont.css'
// import './assets/icon-font/iconfont.js'

Vue.config.productionTip = false

let Mazey = new Vue({
  el: '#mazey',
  router,
  store,
  template: '<Layout/>',
  components: {
    Layout
  },
  data: {
    eventHub: new Vue()
  }
})

Vue.use(Mazey)
