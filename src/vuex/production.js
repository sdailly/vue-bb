export default {
  state: {
    totalCooked: 50,
    numberCook: 1,
    timer: {
      manually: 1,
      auto: 0
    }
  },
  mutations: {
    incrementProduction (state, n = 1) {
      state.totalCooked += n
    },
    decrementProduction (state, n = 1) {
      state.totalCooked -= n
    }
  },
  actions: {
    incrementProduction ({ commit }, n) {
      commit('incrementProduction', n)
    },
    decrementProduction ({ commit }, n) {
      commit('decrementProduction', n)
    }
  },
  getters: {
    totalCooked (state) {
      return state.totalCooked
    },
    numberCook (state) {
      return state.numberCook
    },
    timerProduction (state) {
      return state.timer
    }
  }
}
