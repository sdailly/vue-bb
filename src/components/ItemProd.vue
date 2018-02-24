<template>
  <div class="Item">
    <p class="Item-desc">
      {{ info.name }} 
      <span class="badge" data-badge-caption="" v-if="info.quantity" >{{info.quantity}}</span>
    </p>
    <div class="Item-bottom">
      <small v-if="info.description" v-html="info.desc" class="Item-gain"></small>
      <p v-if="info.gain" class="Item-gain">
        <label>Gain/heure :</label><br>
        {{info.gain}}g </p>
      <p v-if="info.formationCost" class="Item-price">
        <label>Coût formation :</label><br> 
        {{info.formationCost | numberWithSpaces}}$
        <!--<span v-html="unit"></span>-->
      </p>
      <p v-if="info.cost" class="Item-price">
        <label>Coût/heure : </label><br>
        {{info.cost | numberWithSpaces}}$
      </p>
      <button v-if="totalSell < info.formationCost" class="waves-effect waves-light btn disabled">
        <!--<span v-if="!info.cost">Limite atteinte</span>-->
        <span>Indisponible</span>
      </button>
      <button v-else @click="addProductToCart(info)" class="waves-effect waves-light btn Dealer-add" type="button" name="button">Recruter</button>
    </div>
  </div>
</template>

<script>
  import service from '../mixins/service'
  import { store } from '../vuex/store'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Item',
    store,
    mixins: [
      service
    ],
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'totalSell'
      ]),
      notAvailable () {
        return (!this.info.price[this.info.quantity] || !this.info.price)
      },
      definePrice () {
        if (typeof this.info.price === 'object') {
          return this.info.price[this.info.quantity]
        } else {
          return this.info.price
        }
      }
    },
    filters: {
      numberWithSpaces: function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      }
    },
    methods: {
      ...mapActions([
        'addProductToCart'
      ])
    }
  }
</script>

<style scoped>
  .slither-enter-active, .slither-leave-active {
    transition: transform 3s;
  }

  .slither-enter, .slither-leave-to {
    transform: translateX(-100%);
  }

  .slither-enter-to, .slither-leave {
    transform: translateX(0);
  }
  .Item {
    display: inline-flex;
    align-self: stretch;
    flex-flow: column;
    justify-content: space-between;
    flex: 0 25%;
    padding: 10px;
    margin-bottom: 20px;
    border-left: 1px solid #eee;
    padding: 0 30px;
    transition: all ease .5s;
  }
  .Item-desc {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0;
    line-height: 1;
  }
  .Item-description {
    line-height: 1;
  }
  .Item-bottom {
    display: inline-block;
  }
  p {
    margin: 5px 0 10px;
    line-height: 1.35;
  }
  label {
    font-size: 12px;
    line-height: 1;
  }
</style>
