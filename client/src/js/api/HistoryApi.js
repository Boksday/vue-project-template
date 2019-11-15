import { apiClient } from '../network/HttpClientFactory'

export default {
  getAllHistory () {
    return apiClient.post('/getAllHistory').then((res) => { return res })
  }
}
