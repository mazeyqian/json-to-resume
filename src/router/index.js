import Vue from 'vue'
import Router from 'vue-router'
// import DemoVueScreenfull from '../demo/demo-vue-screenfull'
// import Home from '../components/page/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/page/home.vue'], resolve) // Home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: resolve => require(['@/demo/index.vue'], resolve),
      children: [
        {
          path: 'vue-screenfull',
          name: 'DemoVueScreenfull',
          component: resolve => require(['@/demo/demo-vue-screenfull.vue'], resolve)
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
