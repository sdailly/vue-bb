import Vue from 'vue'
import Vuex from 'vuex'
import distribution from './distribution'
import production from './production'
import sale from './sale'
import timer from './timer'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    distribution,
    production,
    sale,
    timer
  }
})
