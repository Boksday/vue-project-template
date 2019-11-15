import { apiClient } from '../network/HttpClientFactory'

export default {
  getBoardList () {
    return apiClient.get('/getBoardList')
  },
  insertBoard (payload) {
    return apiClient.post('/insertBoard', payload)
  },
  getBoard (params) {
    return apiClient.get('/getBoard', { params }).then((res) => {
      return res
    })
  },
  updateBoard (params) {
    return apiClient.patch('/updateBoard', params).then((res) => {

    })
  },
  deleteBoard (params) {
    console.log(params.no)
    return apiClient.delete('/deleteBoard/' + params.no).then((res) => {

    })
  }
}
