<template>
  <div>
    <p>Destiné pour augmenter la production</p>
    <div class="Listing">
      <ItemProd
        :info="info" 
        :key=index v-for="(info, index) in manufacturers">
      </ItemProd>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { store } from '../vuex/store'
  import ItemProd from '../components/itemProd.vue'

  export default {
    name: 'Manufacturers',
    store,
    computed: {
      ...mapGetters([
        'manufacturers'
      ])
    },
    components: {
      ItemProd
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Listing {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start
  }
</style>
