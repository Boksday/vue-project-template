import { apiClient } from '../network/HttpClientFactory'

export default {
  coffeeList () {
    return apiClient.get('/coffeeList').then((res) => { return res })
  },
  getCoffeeDetail (data) {
    return apiClient.post('/getCoffee', data).then((res) => { return res })
  },
  buyCoffee (data) {
    return apiClient.post('/buyCoffee', data).then((res) => { return res })
  },
  checkOptions (data) {
    return apiClient.post('/checkOptions', data).then((res) => {
      return res
    })
  },
  addCoffee (data) {
    return apiClient.post('/addCoffee', data).then((res) => {
      return res
    })
  },
  addOption (data) {
    return apiClient.post('/addOption', data).then((res) => {
      return res
    })
  }
}
