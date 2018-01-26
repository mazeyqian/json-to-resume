import Vue from 'vue'
import Mazey from './components/Mazey'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Aplayer from 'vue-aplayer'

Vue.use(ElementUI)

let MazeyBlog = new Vue({
  el: '#mazey',
  router,
  template: '<Mazey/>',
  components: {
    Mazey,
    Aplayer
  }
})

Vue.use(MazeyBlog)
