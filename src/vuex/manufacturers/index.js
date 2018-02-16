import gain from './gain'
import price from './cost'

const dealers = ['jeune dealer', 'dealer confirmé', 'dealer expérimenté']
const distributors = dealers.map((name, index) => {
  return {
    name: name,
    active: false,
    quantity: 0,
    gain: gain[index],
    price: price[index]
  }
})

export default {
  state: {
    distributors
  },
  mutations: { },
  actions: { },
  getters: {
    distributors (state) {
      return state.distributors
    },
    distributorsBuy (state) {
      return state.distributors.filter((distributor) => {
        return distributor.quantity > 0
      })
    }
  }
}
