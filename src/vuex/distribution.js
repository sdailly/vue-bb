export default {
  state: {
    dealer: {
      price: 30,
      sellProductPerSecond: 1
    }
  },
  mutations: { },
  actions: { },
  getters: {
    dealer (state) {
      return state.dealer
    }
  }
}
