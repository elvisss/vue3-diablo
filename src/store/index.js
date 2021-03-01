import { createStore, createLogger } from 'vuex'
import oauth from '@/store/modules/oauth'
import loading from '@/store/modules/loading'
import error from './modules/error'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    oauth,
    loading,
    error,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
})
