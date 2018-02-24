<template>
  <div class="Item">
    <p class="Item-desc">{{ info.name }} <span class="badge" data-badge-caption="" v-if="info.quantity" >{{info.quantity}}</span></p>
    <div class="Item-bottom">
      <p v-if="info.desc" v-html="info.desc" class="Item-gain"></p>
      <p v-if="info.gain" class="Item-gain">Gain : {{ info.gain }}{{units.gain.unit}}{{units.gain.auto}}</p>
      <p v-if="info.capacity" class="Item-gain">Capacité : {{ info.capacity }}</p>
      <p v-if="info.price" class="Item-price">
        Cout : {{ this.definePrice }}${{units.cost.auto}}
        <!--<span v-html="unit"></span>-->
      </p>
      <!--<button class="waves-effect waves-light btn disabled" v-if="notAvailable">
        <span v-if="!info.price[info.quantity]">Limite atteinte</span>
        <span v-if="info.price && !serviceIsAvailable(info.price[info.quantity])">Indisponible</span>
      </button>-->
      <!--<button v-else @click="buyItemService(info)" class="waves-effect waves-light btn Dealer-add" type="button" name="button">Acheter</button>-->
    </div>
  </div>
</template>

<script>
  import service from '../mixins/service'
  import { store } from '../vuex/store'

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
      },
      gainType: {
        type: String,
        required: true
      },
      gainAuto: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    computed: {
      notAvailable () {
        return (!this.info.price[this.info.quantity] || !this.info.price)
      },
      definePrice () {
        if (typeof this.info.price === 'object') {
          return this.info.price[this.info.quantity]
        } else {
          return this.info.price
        }
      },
      units () {
        const dollars = '$'
        const gramme = 'g'
        const perSec = '/sec'
        const unit = (this.gainType === 'money') ? dollars : gramme

        return {
          gain: {
            unit,
            auto: (this.info.gainAuto || this.gainAuto) ? perSec : null
          },
          cost: {
            unit: dollars,
            auto: (this.info.costAuto) ? perSec : null
          }
        }
      }
    },
    methods: {
      buyDistribution (service) {
      }
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
  .Item-bottom {
    display: inline-block;
  }
</style>
