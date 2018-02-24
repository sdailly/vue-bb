import gain from './gain'
import price from './cost'

const manufacturersTypes = [
  'jeune assistant', 
  'Assistant confirmé', 
  'Assistant expérimenté',
  'Caravane',
  'Cave',
  'Maison'
]
const manufacturers = manufacturersTypes.map((name, index) => {
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
    manufacturers
  },
  getters: {
    distributors (state) {
      return state.manufacturers
    },
    distributorsBuy (state) {
      return state.manufacturers.filter((manufacturer) => {
        return manufacturer.quantity > 0
      })
    }
  }
}
