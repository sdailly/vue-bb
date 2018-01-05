import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'intervalProduction',
      'intervalSale',
      'timerSell',
      'totalCooked'
    ]),
    intervalSaleIsStarted () {
      return this.intervalSale !== null
    },
    intervalProductionIsStarted () {
      return this.intervalProduction !== null
    },
    totalCookedIsZero () {
      return this.totalCooked <= 0
    }
  },
  methods: {
    ...mapActions([
      'setNewInterval',
      'decrementProduction',
      'incrementTotalSell'
    ]),
    setIntervalSale () {
      return setInterval(() => {
        this.deleteProductInStock(this.timerSell.auto)
        this.sellProduct(1)
      }, 1000)
    },
    deleteProductInStock () {
      if (this.totalCookedIsZero) return
      this.decrementProduction()
    },
    sellProduct (value = 1) {
      if (this.totalCookedIsZero) return
      this.incrementTotalSell(value)
    }
  }
}
