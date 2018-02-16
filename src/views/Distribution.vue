<template>
  <div class="Listing">
      <Item :info="info" :key=index v-for="(info, index) in distributors"></Item>
  </div>
</template>

<script>
  import { store } from '../vuex/store'
  import { mapGetters } from 'vuex'
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
