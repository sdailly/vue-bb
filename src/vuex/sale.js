export default {
  state: {
    active: false, // auto sale
    totalSell: 0, // total gain $
    price: 10, // $ per unit
    timer: {
      manually: 1, // sell product per click
      auto: 0 // sell product per seconds - group all distributions services
    }
  },
  mutations: {
    addGain (state, n) {
      state.totalSell += n * state.price
    },
    incrementTimerSell (state, n = 1) {
      state.timer.auto += n
    },
    toggleSale (state) {
      state.active = !state.active
    },
    activeSale (state) {
      state.active = true
    },
    disableSale (state) {
      state.active = false
    }
  },
  actions: {
    sellProduct ({ commit, dispatch }, n = 1) {
      // checkProduction
      dispatch('checkProduction').then((stockAvailable) => {
        if (stockAvailable) {
          commit('decrementProduction', n)
          // add gain = nProduit * productUnitPrice
          commit('addGain', n)
        }
      })
    },
    incrementTimerSell ({ commit }, n) {
      commit('incrementTimerSell', n)
    },
    toggleSale ({ commit }) {
      commit('toggleSale')
    },
    activeSale ({ commit }) {
      commit('activeSale')
    },
    disableSale ({ commit }) {
      commit('disableSale')
    }
  },
  getters: {
    sellIsActive (state) {
      return state.active
    },
    totalSell (state) {
      return state.totalSell
    },
    priceSell (state) {
      return state.price
    },
    timerSell (state) {
      return state.timer
    }
  }
}
