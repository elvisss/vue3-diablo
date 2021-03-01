const error = {
  namespaced: true,
  state: {
    error: null,
  },
  mutations: {
    SET_ERROR(state, payload) {
      state.error = payload
    },
  },
}

export default error
