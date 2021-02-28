import { createStore, createLogger } from 'vuex'
import { oauth } from '@/store/modules/oauth'
import { loading } from '@/store/modules/loading'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    oauth,
    loading,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
})
