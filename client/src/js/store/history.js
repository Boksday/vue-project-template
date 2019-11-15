import HistoryApi from '../api/HistoryApi'
const state = {
  histories: []
}
const getters = {

}
const actions = {
  getAllHistory ({ commit }) {
    HistoryApi.getAllHistory().then((res) => {
      commit('setHistories', res)
    })
  }
}
const mutations = {
  setHistories (state, payload) {
    state.histories = payload
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
