import * as oauthApi from '@/api/oauth'

const oauth = {
  namespaced: true,
  state: {
    accessToken: null,
  },
  mutations: {
    SET_ACCESS_TOKEN(state, payload) {
      state.accessToken = payload
      if (payload === null) {
        localStorage.removeItem('access_token')
      }
    },
    INITIALISE_STORE(state) {
      const accessToken = localStorage.getItem('access_token')
      if (accessToken) {
        state.accessToken = accessToken
      }
    },
  },
  actions: {
    async getToken({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })
      try {
        const { data } = await oauthApi.getToken()
        localStorage.setItem('access_token', data.access_token)
        commit('SET_ACCESS_TOKEN', data.access_token)
      } catch (err) {
        commit('SET_ACCESS_TOKEN', null)
        console.log('Error OAuth: ', err)
      } finally {
        commit('loading/SET_LOADING', false, { root: true })
      }
    },
  },
  getters: {},
}

export default oauth
