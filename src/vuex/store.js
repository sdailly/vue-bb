import Vue from 'vue'
import Vuex from 'vuex'
import production from './production'
import distribution from './distribution/'
import manufacturer from './manufacturers/'
import storages from './storages/'
import sale from './sale'
import timer from './timer'
import cart from './cart'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    production,
    sale,
    timer,
    distribution,
    manufacturer,
    storages,
    cart
  }
})
