<template>
  <div class="Item">
    <p class="Item-desc">{{ info.name }} <span class="badge" data-badge-caption="" v-if="info.quantity" >{{info.quantity}}</span></p>
    <p v-if="info.desc" v-html="info.desc" class="Item-gain"></p>
    <p v-if="info.gain" class="Item-gain">Gain : {{ info.gain }}$/sec</p>
    <p v-if="info.capacity" class="Item-gain">Capacité : {{ info.capacity }}</p>
    <p v-if="info.price" class="Item-price">
      Cout : {{ this.definePrice }}
      <span v-html="unit"></span>
    </p>
    <small class="Item-available">
      <button class="waves-effect waves-light btn disabled" v-if="info.price && !serviceIsAvailable(info.price[info.quantity])">Indisponible</button>
      <button v-else @click="buyItemService(info)" class="waves-effect waves-light btn Dealer-add" type="button" name="button">Acheter</button>
    </small>
  </div>
</template>

<script>
  import service from '../mixins/service'
  import { store } from '../vuex/store'
  import { mapActions } from 'vuex'

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
      unit: {
        type:String,
        default: '€'
      },
    },
    computed: {
      definePrice() {
        if (typeof this.info.price === 'object') {
          return this.info.price[this.info.quantity]
        } else {
          return this.info.price
        }
      }
    },
    methods: {
      ...mapActions([
        'buyService'
      ]),
      buyItemService (service) {
        this.buyService({
          category: 'distribution',
          service
        })
      }
    }
  }
</script>

<style scoped>
  .Item {
    flex: 1 auto;
    padding: 10px;
    border-left: 1px solid #eee;
    padding: 0 30px;
  }
  .Item-desc {
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
