export default {
  state: {
    manufacturors: [
      {
        name: 'Jeune assistant',
        active: false,
        quantity: 0,
        gain: 0.15,
        price: 100
      },
      {
        name: 'Assistant confirmé',
        active: false,
        quantity: 0,
        gain: 0.7,
        price: 850
      },
      {
        name: 'Assistant experimenté',
        active: false,
        quantity: 0,
        gain: 1,
        price: 1000
      }
    ]
  },
  mutations: { },
  actions: { },
  getters: {
    manufacturers (state) {
      return state.manufacturors
    }
  }
}
