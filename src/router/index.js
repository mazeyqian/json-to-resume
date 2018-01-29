import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
