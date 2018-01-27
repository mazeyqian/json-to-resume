import Vue from 'vue'
import Layout from './components/Layout'
// import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Aplayer from 'vue-aplayer'
import './scss/main.css'

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
