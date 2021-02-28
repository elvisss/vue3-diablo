import { createStore, createLogger } from 'vuex'
import { oauthModule } from '@/store/modules/oauth'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    oauth: oauthModule,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
})
