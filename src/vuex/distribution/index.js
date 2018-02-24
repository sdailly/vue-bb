import price from './cost'
import dealers from './type'

const distributors = dealers.map((distributor, index) => {
  return {
    name: distributor.name,
    costType: distributor.costType,
    costAuto: distributor.costAuto,
    gainAuto: distributor.gainAuto,
    quantity: 0,
    gain: distributor.gain,
    price: price[index]
  }
})

export default {
  state: {
    distributors
  },
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
