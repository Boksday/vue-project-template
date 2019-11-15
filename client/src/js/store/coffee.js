
import CoffeeApi from '../api/CoffeeApi'

const state = {
  coffeeList: [],
  coffee: {},
  options: []
}

const getters = {

}

const actions = {
  getCoffeeList: ({ commit }) => {
    CoffeeApi.coffeeList().then((res) => {
      commit('setCoffeeList', res.data)
    })
  },
  getCoffeeDetail: ({ commit }, payload) => {
    commit('clearOptions')

    if (payload.no === 0) {
      payload.no = sessionStorage.getItem('coffeeNo')
    } else {
      sessionStorage.setItem('coffeeNo', payload.no)
    }
    CoffeeApi.getCoffeeDetail(payload).then((res) => {
      commit('setCoffee', res.data)
      CoffeeApi.checkOptions(payload).then((res) => {
        let options = []
        for (var i = 0; i < res.data.length; i++) {
          options.push(res.data[i].option)
        }
        commit('setOptions', options)
      })
    })
  },
  buyCoffee: ({ commit }, payload) => {
    CoffeeApi.buyCoffee(payload).then((res) => {
      return res
    })
  },
  addCoffee: ({ commit }, payload) => {
    CoffeeApi.addCoffee(payload).then((res) => {
      return res
    })
    CoffeeApi.addOption(payload).then((res) => {
      return res
    })
  }
}

const mutations = {
  setCoffeeList (state, payload) {
    state.coffeeList = payload
  },
  setCoffee (state, payload) {
    state.coffee = payload
    console.log(payload)
  },
  clearOptions (state, payload) {
    state.options = payload
  },
  setOptions (state, payload) {
    state.options = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
