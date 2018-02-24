export default {
  state: {
    listServicesBuy: []
  },
  mutations: {
    pushProductToCart (state, item) {
      state.listServicesBuy.push(item)
    },
    addQtyService (state, item) {
      const index = state.listServicesBuy.indexOf(item)
      state.listServicesBuy[index].quantity++
    }
  },
  actions: {
    addProductToCart ({state, commit, dispatch}, item) {
      dispatch('decrementDollars', item.formationCost)
      const cartItem = state.listServicesBuy.find(service => service.name === item.name)
      if (cartItem) {
        commit('addQtyService', cartItem)
      } else {
        commit('pushProductToCart', item)
        commit('addQtyService', item)
      }
    },
    addToCartDistribution ({commit, dispatch}, buy) {
    },
    returnObjectIfExist ({state}, item) {
      return state.listServicesBuy.find((item) => {
        return item.name === item.name
      })
    }
  },
  getters: {
    Cart_Production (state) {
      return state.listServicesBuy.filter(service => service.category === 'production')
    },
    Cart_Distribution (state) {
      return state.listServicesBuy.filter(service => service.category === 'distribution')
    },
    Cart_Gain_production (state, getters) {
      if (!getters.Cart_Production.length) return null
      const qty = getters.Cart_Production.map(item => item.quantity).reduce((acc, current) => acc + current)
      const gain = getters.Cart_Production.map(item => item.gain).reduce((acc, current) => acc + current)
      return qty * gain
    },
    Cart_Cost_production (state, getters) {
      if (!getters.Cart_Production.length) return null
      return getters.Cart_Production.map(item => item.cost).reduce((acc, current) => acc + current)
    }
  }
}
