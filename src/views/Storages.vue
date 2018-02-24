<template>
  <div class="Listing">
      <Item :info="info" :key=index v-for="(info, index) in storages"></Item>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { store } from '../vuex/store'
  import Item from '../components/item.vue'

  export default {
    name: 'StoragesView',
    store,
    computed: {
      ...mapGetters([
        'storages'
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
    justify-content: flex-start;
    align-items: flex-start
  }
</style>
