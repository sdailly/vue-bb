import price from './cost'
import manufacturersTypes from './type'

const manufacturers = manufacturersTypes.map((manufacturer, index) => {
  return {
    name: manufacturer.name,
    active: false,
    quantity: 0,
    gain: manufacturer.gain,
    price: price[index]
  }
})

export default {
  state: {
    manufacturers
  },
  getters: {
    manufacturers (state) {
      return state.manufacturers
    },
    manufacturersBuy (state) {
      return state.manufacturers.filter((manufacturer) => {
        return manufacturer.quantity > 0
      })
    }
  }
}
