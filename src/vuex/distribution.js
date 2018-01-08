export default {
  state: {
    distributors: [
      {
        name: 'jeune deader',
        active: false,
        quantity: 0,
        gain: 10,
        price: 100
      },
      {
        name: 'dealer confirmé',
        active: false,
        quantity: 0,
        gain: 50,
        price: 450
      },
      {
        name: 'deader experimenté',
        active: false,
        quantity: 0,
        gain: 150,
        price: 3000
      }
    ]
  },
  mutations: { },
  actions: { },
  getters: {
    distributors (state) {
      return state.distributors
    }
  }
}
