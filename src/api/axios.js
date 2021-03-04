import axios from 'axios'
import store from '@/store/index'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
  async(config) => {
    let accessToken = store.state.oauth.accessToken
    if (!accessToken) {
      await store.dispatch('oauth/getToken', null, { root: true })
      accessToken = store.state.oauth.accessToken
    }
    config.params.access_token = store.state.oauth.accessToken
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error.toJSON())
    if (error.response.status === 401) {
      store.commit('oauth/SET_ACCESS_TOKEN', null, { root: true })
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
