import Vue from 'vue'
import Layout from './components/Layout'
// import router from './router'
import ElementUI from 'element-ui'
import 'normalize.css' // TODO: 为何Bootstrap不格式化
// import 'element-ui/lib/theme-chalk/index.css'
// import Aplayer from 'vue-aplayer'
import './scss/__main.css'

Vue.use(ElementUI)

let MazeyBlog = new Vue({
  el: '#mazey',
  // router,
  template: '<Layout/>',
  components: {
    Layout
  }
})

Vue.use(MazeyBlog)
