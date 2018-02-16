<template>
  <div>
    <p>Destiné pour augmenter la production</p>
    <div class="Listing">
      <Item :info="info" :key=index v-for="(info, index) in manufacturers"></Item>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { store } from '../vuex/store'
  import Item from '../components/item.vue'

  export default {
    name: 'Manufacturers',
    store,
    computed: {
      ...mapGetters([
        'manufacturers'
      ])
    },
    components: {
      Item
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Listing {
    display: flex;
    flex-flow: row wrap;
  }
</style>
