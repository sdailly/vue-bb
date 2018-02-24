<template>
  <div>
    <p>Destiné à la vente des produits</p>
    <div class="Listing">
      <Item gainType="money" :info="info" :key=index v-for="(info, index) in distributors"></Item>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { store } from '../vuex/store'
  import Item from '../components/item.vue'

  export default {
    name: 'Distribution',
    store,
    computed: {
      ...mapGetters([
        'distributors'
      ])
    },
    components: {
      Item
    }
  }
</script>

<style>
  .Listing {
    display: flex;
    flex-flow: row wrap;  
  }
</style>
