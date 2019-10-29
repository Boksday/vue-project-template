
import UserApi from '../api/UserApi'

const state = {
  session: {}
}

const getters = {

}

const actions = {
  login: ({ commit }, payload) => {
    return UserApi.userLogin(payload).then((res) => {
      const loginUser = {
        id: res.data.id,
        name: res.data.name,
        role: res.data.role
      }
      if (res.data) {
        commit('setSession', loginUser)
      }
      window.sessionStorage.setItem('loginUser', JSON.stringify(loginUser))
      return res
    })
  },
  loadSession ({ commit }) {
    let loginUser = sessionStorage.getItem('loginUser')

    if (loginUser) {
      console.log(JSON.parse(loginUser))
      commit('setSession', JSON.parse(loginUser))
    }
  },
  destroySession ({ commit }) {
    commit('setSession', {})

    sessionStorage.clear()
  },
  kakaoLogin ({ commit }, payload) {
    sessionStorage.setItem('loginUser', JSON.stringify(payload))
    commit('setSession', payload)
  }

}

const mutations = {
  setSession: (state, payload) => {
    state.session = payload
    console.log(state.session + '////')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
