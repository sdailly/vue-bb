<template>
  <div class="Item">
    <p class="Item-desc">{{ info.name }} <span class="badge" data-badge-caption="">{{info.quantity}}</span></p>
    <p class="Item-gain">Gain : {{ info.gain[info.quantity] }}$/sec</p>
    <p class="Item-price">Cout : {{ info.price[info.quantity] }}g</p>
    <small class="Item-available">
      <button class="waves-effect waves-light btn disabled" v-if="!serviceIsAvailable(info.price)">Indisponible</button>
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
