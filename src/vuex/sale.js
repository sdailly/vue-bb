export default {
  state: {
    autoIsActive: false, // auto sale
    totalSell: 6000, // total gain $
    price: 0.70 // $ per unit
  },
  mutations: {
    addGain (state, n) {
      state.totalSell += n * state.price
    },
    removeGain (state, n) {
      state.totalSell -= n
    },
    toggleSale (state) {
      state.autoIsActive = !state.autoIsActive
    },
    activeSale (state) {
      state.autoIsActive = true
    },
    disableSale (state) {
      state.autoIsActive = false
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
    decrementDollars ({commit}, n) {
      commit('removeGain', n)
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
      return state.autoIsActive
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
