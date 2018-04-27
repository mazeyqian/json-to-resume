import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/page/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/page/home.vue'], resolve) // Home
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
