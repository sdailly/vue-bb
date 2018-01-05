export default {
  state: {
    interval: {
      production: null,
      sale: null
    }
  },
  mutations: {
    createInterval (state, object) {
      state.interval[object.name] = object.value
    }
  },
  actions: {
    setNewInterval ({commit}, object) {
      commit('createInterval', object)
    }
  },
  getters: {
    interval (state) {
      return state.interval
    },
    intervalProduction (state) {
      return state.interval.production
    },
    intervalSale (state) {
      return state.interval.sale
    }
  }
}
