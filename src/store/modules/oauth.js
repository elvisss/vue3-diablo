import * as oauth from '@/api/oauth'

const oauthModule = {
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
      try {
        const { data } = await oauth.getToken()
        console.log(data)
        commit('SET_ACCESS_TOKEN', data.access_token)
      } catch (err) {
        commit('SET_ACCESS_TOKEN', null)
        console.log('Error OAuth: ', err)
      } finally {
        console.log('done')
      }
    },
  },
  getters: {},
}

export { oauthModule }
