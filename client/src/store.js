import Vue from 'vue'
import Vuex from 'vuex'

import user from './js/store/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})
