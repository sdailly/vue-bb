<template>
  <div id="app">
    <aside class="Aside">
      <div class="Aside-cook">
        <p>{{ totalCookedFormatted }} produits en stock</p>
        <button @click="cook(timerProduction.manually)" class="Aside-cookBtn" type="button" name="button">Fabriquer</button>
        <br>
        <small>
          production : {{timerProduction.auto}}/sec
        </small>
      </div>
      <div class="Aside-sell">
        <p class="Aside-sellTotal">{{totalSell}} $</p>
        <button @click="sale" class="Aside-sellBtn" type="button" name="button">Vendre</button>
        <br>
        <small>
          vente : {{timerSell.auto}}/sec
        </small>
      </div>
    </aside>
    <div class="Content">
      <nav class="Navigation">
        <a>Fabrication</a>
        <router-link :to="{path: 'distribution'}">Distribution</router-link>
        <a>Matériels</a>
        <a>Fabrication</a>
        <a>Succes</a>
      </nav>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { store } from './vuex/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  store,
  data () {
    return {
      limitStock: 100
    }
  },
  computed: {
    ...mapGetters([
      'totalCooked',
      'numberCook',
      'totalSell',
      'priceSell',
      'timerProduction',
      'timerSell'
    ]),
    totalCookedFormatted () {
      return Math.ceil(this.totalCooked)
    },
    totalCookedIsZero () {
      return this.totalCooked <= 0
    },
    intervalSaleIsStarted () {
      return this.interval.sale !== null
    },
    intervalProductionIsStarted () {
      return this.interval.production !== null
    }
  },
  methods: {
    ...mapActions([
      'incrementProduction',
      'decrementProduction',
      'incrementTotalSell',
      'decrementTotalSell'
    ]),
    cook (numberCooked) {
      this.incrementProduction(numberCooked)
    },
    sale () {
      this.sellProduct()
      this.deleteProductInStock()
    },
    deleteProduction (value) {
      if (this.totalCookedIsZero) return
      this.totalCooked -= value
    },
    sellProduct (value = 1) {
      if (this.totalCookedIsZero) return
      this.incrementTotalSell(value)
    },
    setIntervalProduction () {
      this.interval.production = setInterval(() => {
        this.cook(this.timerProduction.auto)
      }, 1000)
    },
    setIntervalSale () {
      this.interval.sale = setInterval(() => {
        this.deleteProductInStock(this.timerSell.auto)
        this.sellProduct(this.price)
      }, 1000)
    },
    clearIntervalProduction (intervalName) {
      const intervalObject = this.$data.interval[intervalName]
      if (!intervalObject) return
      window.clearInterval(intervalObject)
      console.log(this.$data.interval[intervalName])
      this.$data.interval[intervalName] = null
    }
  },
  watch: {
    totalCookedIsZero (value) {
      if (this.totalCookedIsZero) {
        this.stopInterval = true
        this.clearIntervalProduction('sale')
        this.clearIntervalProduction('production')
      } else {
        this.stopInterval = false
        this.setIntervalProduction()
        this.setIntervalSale()
      }
    }
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-flow: row wrap;
    color: #2c3e50;
  }

  .Aside {
    align-items: flex-start;
    width: 20%;
    height: 100%;
    background: #eee;
    padding: 20px;
    text-align: center;
  }

  .Content {
    padding: 20px;
  }
</style>
