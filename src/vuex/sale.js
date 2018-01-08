export default {
  state: {
    active: false, // auto sale
    totalSell: 0, // total gain $
    price: 0.10, // $ per unit
    timer: {
      manually: 0.15, // sell product per click
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
          dispatch('checkProductionBeforeSale', n).then((number) => {
            commit('decrementProduction', number)
            // add gain = nProduit * productUnitPrice
            commit('addGain', number)
          })
        }
      })
    },
    checkProductionBeforeSale ({getters}, n) {
      return (getters.totalCooked - n < 0) ? getters.totalCooked : n
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
      return Math.round(state.totalSell * 100) / 100
    },
    priceSell (state) {
      return state.price
    },
    timerSell (state) {
      return state.timer
    }
  }
}
