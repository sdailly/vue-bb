<template>
  <div id="app">
    <navigation></navigation>
    <aside class="Aside">
      <div class="Aside-cook">
        <p>{{ totalCookedFormatted }} en stock</p>
        <button @click="cook(20)" class="Aside-cookBtn waves-effect waves-light btn" type="button" name="button">
          Cuisiner
          </button>
        <br>
        <small v-if="Cart_Gain_production && Cart_Cost_production ">
          <strong>production :</strong> {{Cart_Gain_production}}g/sec & {{Cart_Cost_production}}$/sec
        </small>
      </div>
      <hr>
      <div class="Aside-sell">
        <p class="Aside-sellTotal">{{totalSell}} $</p>
        <button :disabled="totalCookedIsZero" @click="sellOneProduct" class="Aside-sellBtn waves-effect waves-light btn" type="button" name="button">Vendre</button>
        <br>
        <small>
          <!--vente : {{timerSell.auto}}/sec<br>-->
          <!--<button class="waves-effect waves-light btn" :disabled="stopInterval" @click="toggleSale">
            <span v-show="!sellIsActive">Activer</span>
            <span v-show="sellIsActive">Désactiver</span>
            la vente automatique
          </button>-->
        </small>
      </div>
    </aside>
    <div class="Content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from './vuex/store'
import interval from './mixins/interval'
import Navigation from './components/navigation'

export default {
  name: 'app',
  store,
  data () {
    return {
      limitStock: 100,
      interval: null
    }
  },
  mixins: [
    interval
  ],
  computed: {
    ...mapGetters([
      'totalCooked',
      'totalSell',
      'Cart_Gain_production',
      'Cart_Cost_production'
    ]),
    totalCookedFormatted () {
      const format = 'g'
      return `${this.totalCooked} ${format}`
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
      this.sellProduct(30)
    },
    cook (numberCooked) {
      this.incrementProduction(numberCooked)
    },
    setInterval () {
      if (this.interval) this.clearInterval()
      this.interval = setInterval(() => {
        this.incrementProduction(this.Cart_Gain_production)
      }, 1000)
    },
    clearInterval () {
      clearInterval(this.interval)
    }
  },
  components: {
    Navigation
  },
  watch: {
    Cart_Gain_production () {
      if (this.Cart_Gain_production > 0 && !this.interval) {
        this.setInterval()
      }
    }
  }
}
</script>

<style>
  @import 'materialize-css/dist/css/materialize.min.css';
  .btn {
    font-size: 14px;
    text-transform: none;
    border-radius: 5px;
    box-shadow: none
  }
  .btn:hover {
    box-shadow: none
  }
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
    position: relative;
    z-index: 1;
  }

  .Content {
    width: 80%;
    padding: 20px;
  }
</style>
