import manufacturersTypes from './type'

const manufacturers = manufacturersTypes.map((manufacturer, index) => {
  return {
    ...manufacturer,
    active: false,
    quantity: 0,
    category: 'production'
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
