// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mazey from './Mazey'
import router from './router'

Vue.config.productionTip = false

let MazeyBlog = new Vue({
  el: '#mazey',
  router,
  template: '<Mazey/>',
  components: { Mazey }
})

Vue.use(MazeyBlog)
