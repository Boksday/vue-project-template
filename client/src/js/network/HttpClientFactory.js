import axios from 'axios'

const config = {

  baseURL: 'http://localhost:8090'

}
export const apiClient = axios.create(config)
