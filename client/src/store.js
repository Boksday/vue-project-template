import Vue from 'vue'
import Vuex from 'vuex'

import user from './js/store/user'
import coffee from './js/store/coffee'
import history from './js/store/history'
import board from './js/store/board'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    coffee,
    history,
    board
  }
})
