<template>
  <div class="Item">
    <p class="Item-desc">{{ info.name }}</p>
    <p class="Item-gain">Gain : {{ info.gain }}$/sec</p>
    <p class="Item-price">Cout : {{ info.price }}g</p>
    <p class="Item-price">Quantité : {{ info.quantity }}</p>
    <p class="Item-active">Vente auto : {{ info.active }}</p>
    <small class="Item-available">
      <span v-if="!serviceIsAvailable(info.price)">Indisponible</span>
      <button v-else @click="buyItemService(info)" class="Dealer-add" type="button" name="button">Acheter</button>
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
    padding: 10px;
  }
</style>
