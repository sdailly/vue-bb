<template>
  <div class="Listing">
    <Item :info="info" v-for="(info, index) in manufacturers"></Item>
  </div>
</template>

<script>
  import Item from '../components/item.vue'
  import { store } from '../vuex/store'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Production',
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
