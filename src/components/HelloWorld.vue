<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'Vue-bb',
  data () {
    return {
      totalCooked: 50,
      numberCook: 1,
      totalSell: 0,
      price: 1,
      limitStock: 100,
      timer: {
        production: {
          manually: 1,
          auto: 0.2,
        },
        sale: {
          manually: 1,
          auto: 0,
        },
      },
      interval: {
        production: null,
        sale: null,
      },
      tools: {
        dealer: {
          price: 30,
          sellProductPerSecond: 1,
        }
      }
    }
  },
  computed: {
    totalCookedFormatted() {
      return Math.ceil(this.totalCooked);
    },
    totalCookedIsZero() {
        return this.totalCooked <= 0;
    },
    dealerIsAvailable() {
      return this.totalCooked >= this.tools.dealer.price;
    },
    intervalSaleIsStarted() {
      return this.interval.sale !== null;
    },
    intervalProductionIsStarted() {
      return this.interval.production !== null;
    },
  },
  methods: {
      cook(numberCooked) {
        this.totalCooked += numberCooked;
      },
      sale() {
        this.sellProduct();
        this.deleteProductInStock();
      },
      deleteProduction(value) {
        if (this.totalCookedIsZero) return;
        this.totalCooked -= value;
      },
      sellProduct(value = this.price) {
        if (this.totalCookedIsZero) return;
        this.totalSell += value;
      },
      deleteProductInStock() {
        if (this.totalCookedIsZero) return;
        this.totalCooked--;
      },
      setIntervalProduction() {
        this.interval.production = setInterval(() => {
          this.cook(this.timer.production.auto);
        }, 1000);
      },
      setIntervalSale() {
        this.interval.sale = setInterval(() => {
          this.deleteProductInStock(this.timer.sale.auto);
          this.sellProduct(this.price);
        }, 1000);
      },
      clearIntervalProduction(intervalName) {
        const intervalObject = this.$data.interval[intervalName];
        if (!intervalObject) return;
        window.clearInterval(intervalObject);
        console.log(this.$data.interval[intervalName]);
        this.$data.interval[intervalName] = null;
      },
      getDealer() {
        this.timer.sale.auto += this.tools.dealer.sellProductPerSecond;
        this.deleteProduction(this.tools.dealer.price);
        if (!this.intervalIsStarted) {
          this.setIntervalSale();
        }
      }
  },
  mounted() {
  },
  watch: {
    totalCookedIsZero(value) {
      if (this.totalCookedIsZero) {
        this.stopInterval = true;
        this.clearIntervalProduction('sale');
        this.clearIntervalProduction('production');
      } else {
        this.stopInterval = false;
        this.setIntervalProduction();
        this.setIntervalSale();
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
