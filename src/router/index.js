import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import requireAuth from '@/helpers/requireAuth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      beforeEnter: requireAuth,
      name: 'Admin',
      component: Admin
    }
  ]
})

