import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'intervalProduction',
      'intervalSale'
    ]),
    intervalSaleIsStarted () {
      return this.intervalSale !== null
    },
    intervalProductionIsStarted () {
      return this.intervalProduction !== null
    }
  },
  methods: {
    ...mapActions([
      'setNewInterval'
    ]),
    setIntervalSale (value) {
      return setInterval(() => {
        this.deleteProductInStock(this.timerSell.auto)
        this.sellProduct(1)
      }, 1000)
    }
  }
}
