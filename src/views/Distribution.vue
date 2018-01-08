<template>
  <div class="Distribution">
      <div class="Distribution-item" v-for="(distributor, index) in distributors">
        <p class="Distributor-desc">{{ distributor.name }}</p>
        <p class="Distributor-gain">Gain : {{ distributor.gain }}$/sec</p>
        <p class="Distributor-price">Cout : {{ distributor.price }}g</p>
        <p class="Distributor-price">Quantité : {{ distributor.quantity }}</p>
        <p class="Distributor-active">Vente auto : {{ distributor.active }}</p>
        <small class="Distributor-available">
          <span v-if="!serviceIsAvailable(distributor.price)">Indisponible</span>
          <button v-else @click="buyServiceDistribution(distributor)" class="Dealer-add" type="button" name="button">Acheter</button>
        </small>
      </div>
  </div>
</template>

<script>
  import { store } from '../vuex/store'
  import { mapGetters, mapActions } from 'vuex'
  import service from '../mixins/service'

  export default {
    name: 'Distribution',
    store,
    mixins: [
      service
    ],
    computed: {
      ...mapGetters([
        'distributors'
      ])
    },
    methods: {
      ...mapActions([
        'buyService'
      ]),
      buyServiceDistribution (service) {
        this.buyService({
          category: 'distribution',
          service
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Distribution {
    display: flex;
    flex-flow: row wrap;
  }
  .Distribution-item {
    padding: 10px;
  }


</style>
