import Vue from 'vue'
import Router from 'vue-router'
import Home from './js/components/page/Home'
import Login from './js/components/page/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
