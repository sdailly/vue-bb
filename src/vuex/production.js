export default {
  state: {
    totalCooked: 100,
    timer: {
      manually: 0.25,
      auto: 0
    }
  },
  mutations: {
    incrementProduction (state, n = state.timer.manually) {
      state.totalCooked += n
    },
    decrementProduction (state, n = state.timer.manually) {
      state.totalCooked -= n
    }
  },
  actions: {
    checkProduction ({commit, state}) {
      return state.totalCooked > 0
    },
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
    kilo (state) {
      return state.totalCooked / 1000
    },
    timerProduction (state) {
      return state.timer
    }
  }
}
