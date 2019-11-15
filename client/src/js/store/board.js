import BoardApi from '../api/BoardApi'
const state = {
  boardList: [],
  board: {}
}
const getters = {

}
const actions = {
  getBoardList ({ commit }) {
    return BoardApi.getBoardList().then((res) => {
      console.log('dd')
      commit('setBoardList', res.data)
      return res.data
    })
  },
  insertBoard ({ commit }, payload) {
    BoardApi.insertBoard(payload).then((res) => {

    })
  },
  getBoard ({ commit }, payload) {
    if (payload.no === 0) {
      payload.no = sessionStorage.getItem('boardNo')
    } else {
      sessionStorage.setItem('boardNo', payload.no)
    }

    return BoardApi.getBoard(payload).then((res) => {
      commit('setBoard', res.data)
      return res.data
    })
  },
  updateBoard ({ commit }, payload) {
    BoardApi.updateBoard(payload).then((res) => {

    })
  },
  deleteBoard ({ commit }, payload) {
    BoardApi.deleteBoard(payload)
  }
}
const mutations = {
  setBoardList (state, payload) {
    state.boardList = payload
  },
  setBoard (state, payload) {
    state.board = payload
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
