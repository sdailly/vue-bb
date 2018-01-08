import { mapGetters } from 'vuex'
import { store } from '.././vuex/store.js'

export default {
  store,
  computed: {
    ...mapGetters([
      'totalCooked'
    ])
  },
  methods: {
    serviceIsAvailable (need) {
      return this.totalCooked >= need
    }
  }
}
