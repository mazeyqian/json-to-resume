import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/resume',
      name: 'resume',
      component: resolve => require(['@/components/m-resume.vue'], resolve) // Resume
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/m-home.vue'], resolve) // Resume
    },
    {
      path: '/',
      redirect: {name: 'home'}
    }
  ]
})
