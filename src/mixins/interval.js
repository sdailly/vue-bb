import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'intervalProduction',
      'sellIsActive',
      'intervalSaleIsActive',
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
        // if (!sellIsActive) return;
        this.deleteProductInStock(this.timerSell.auto)
      }, 1000)
    },
    deleteProductInStock () {
      if (this.totalCookedIsZero) return
      this.decrementProduction()
    }
  }
}
