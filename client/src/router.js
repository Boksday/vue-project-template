import Vue from 'vue'
import Router from 'vue-router'
import Home from './js/components/page/Home'
import Login from './js/components/page/Login'
import ProductList from './js/components/page/ProductList'
import ProductDetail from './js/components/page/ProductDetail'
import Manager from './js/components/page/Manager'
import AddProduct from './js/components/page/AddProduct'
import Board from './js/components/page/Board'
import BoardWrite from './js/components/page/BoardWrite'
import BoardDetail from './js/components/page/BoardDetail'
import BoardUpdate from './js/components/page/BoardUpdate'
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
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/product-detail',
      name: 'product-detail',
      component: ProductDetail
    },
    {
      path: '/manager',
      name: 'manager',
      component: Manager
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProduct
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    },
    {
      path: '/board/write',
      name: 'boardWrite',
      component: BoardWrite
    },
    {
      path: '/board/detail',
      name: 'boardDetail',
      component: BoardDetail
    },
    {
      path: '/board/update',
      name: 'boardUpdate',
      component: BoardUpdate
    }

  ]
})
