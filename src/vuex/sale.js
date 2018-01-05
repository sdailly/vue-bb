export default {
  state: {
    totalSell: 0,
    price: 1,
    timer: {
      manually: 1,
      auto: 0
    }
  },
  mutations: {
    incrementSell (state, n = 1) {
      state.totalSell += n
    },
    decrementSell (state, n = 1) {
      state.totalSell -= n
    },
    incrementTimerSell (state, n = 1) {
      state.timer.auto += n
    }
  },
  actions: {
    incrementTotalSell ({ commit }, n) {
      commit('incrementSell', n)
    },
    decrementTotalSell ({ commit }, n) {
      commit('decrementSell', n)
    },
    incrementTimerSell ({ commit }, n) {
      commit('incrementTimerSell', n)
    }
  },
  getters: {
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
