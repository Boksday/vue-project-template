import { apiClient } from '../network/HttpClientFactory'

export default {
  userLogin (data) {
    console.log(apiClient.post('/login', data))
    return apiClient.post('/login', data)
  }
}
