<template>
  <div class="Distribution">
    <div class="Distribution-item Dealer">
      <div class="Dealer-list">
        <div class="Dealer-item">
          <p class="Dealer-desc">1 jeune dealer</p>
          <p class="Dealer-gain">Gain : 1$/sec</p>
          <p class="Dealer-price">Cout : 30 produits</p>
          <p class="Dealer-available">
            <span v-show="dealerIsAvailable">Disponible</span>
            <span v-show="!dealerIsAvailable">Indisponible</span>
          </p>
          <button @click="getDealer" :disabled="!dealerIsAvailable" class="Dealer-add" type="button" name="button">Acheter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../vuex/store'
  import { mapGetters, mapActions } from 'vuex'
  import interval from '../mixins/interval'

  export default {
    name: 'Distribution',
    store,
    mixins: [
      interval
    ],
    computed: {
      ...mapGetters([
        'totalCooked',
        'dealer'
      ]),
      dealerIsAvailable () {
        return this.totalCooked >= this.dealer.price
      }
    },
    methods: {
      ...mapActions([
        'decrementProduction',
        'incrementInterval'
      ]),
      getDealer () {
        // this.incrementTimerSell(this.dealer.sellProductPerSecond)
        this.decrementProduction(this.dealer.price)
        if (!this.intervalSaleIsStarted) {
          this.setNewInterval({name: 'sale', value: this.setIntervalSale})
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Distribution {
    display: flex;
    flex-flow: column wrap;
  }
</style>
