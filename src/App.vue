<template>
  <div id="app">
    <aside class="Aside">
      <div class="Aside-cook">
        <p>{{ totalCookedFormatted }} en stock</p>
        <button @click="cook(timerProduction.manually)" class="Aside-cookBtn" type="button" name="button">Cuisiner</button>
        <br>
        <small>
          production : {{timerProduction.auto}}/sec
        </small>
      </div>
      <div class="Aside-sell">
        <p class="Aside-sellTotal">{{totalSell}} $</p>
        <button @click="sellOneProduct" class="Aside-sellBtn" type="button" name="button">Vendre</button>
        <br>
        <small>
          vente : {{timerSell.auto}}/sec<br>
          <button @click="toggleSale">
            <span v-show="!sellIsActive">Activer</span>
            <span v-show="sellIsActive">Désactiver</span>
            la vente automatique
          </button>
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
import interval from './mixins/interval'

export default {
  name: 'app',
  store,
  data () {
    return {
      limitStock: 100
    }
  },
  mixins: [
    interval
  ],
  computed: {
    ...mapGetters([
      'totalCooked',
      'numberCook',
      'totalSell',
      'priceSell',
      'timerProduction',
      'timerSell',
      'sellIsActive',
      'kilo',
      'gramme'
    ]),
    totalCookedFormatted () {
      const kilo = (this.totalCooked > 1000)
      const format = (kilo) ? 'Kg' : 'g'
      const prod = (kilo) ? this.kilo : this.totalCooked
      return `${Math.round(prod * 100) / 100}${format}`
    },
    totalCookedIsZero () {
      return this.totalCooked <= 0
    }
  },
  methods: {
    ...mapActions([
      'incrementProduction',
      'decrementProduction',
      'sellProduct',
      'toggleSale'
    ]),
    sellOneProduct () {
      this.sellProduct()
    },
    cook (numberCooked) {
      this.incrementProduction(numberCooked)
    },
    deleteProduction (value) {
      if (this.totalCookedIsZero) return
      this.totalCooked -= value
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
        // this.clearIntervalProduction('sale')
        // this.clearIntervalProduction('production')
      } else {
        this.stopInterval = false
        // this.setIntervalProduction()
        // this.setIntervalSale()
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
    font-size: 14px;
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
