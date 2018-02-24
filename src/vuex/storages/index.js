import storages from './types'

export default {
  state: {
    storages,
    level: 0,
    unit: '$'
  },
  getters: {
    storages (state) {
      return state.storages
    },
    storageUnit (state) {
      return state.unit
    }
  }
}
