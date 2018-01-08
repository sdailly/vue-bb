export default {
  state: {
    distribution: [],
    production: []
  },
  mutations: {
    addService (state, item) {
      state[item.category].push(item.service)
    },
    addQuantityOfService (state, object) {
      object.quantity += 1
    }
  },
  actions: {
    buyService ({commit, dispatch}, buy) {
      commit('addQuantityOfService', buy.service)
      dispatch('decrementProduction', buy.service.price)
      dispatch('returnObjectIfExist', buy).then((object) => {
        if (!object) {
          commit('addService', buy)
        }
      })
    },
    returnObjectIfExist ({state}, buy) {
      return state[buy.category].find((item) => {
        return item.name === buy.service.name
      })
    }
  },
  getters: {
    gainProduction (state) {
      // return state.gain.production
    },
    gainSale (state) {
      // return state.gain.sale
    }
  }
}
