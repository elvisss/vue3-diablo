import * as oauthApi from '@/api/oauth'

const oauth = {
  namespaced: true,
  state: {
    accessToken: null,
  },
  mutations: {
    SET_ACCESS_TOKEN(state, payload) {
      state.accessToken = payload
    },
  },
  actions: {
    async getToken({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })
      try {
        const { data } = await oauthApi.getToken()
        console.log(data)
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

export { oauth }
