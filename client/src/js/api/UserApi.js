import { apiClient } from '../network/HttpClientFactory'

export default {
  userLogin (data) {
    return apiClient.post('/login', data)
  }
}
