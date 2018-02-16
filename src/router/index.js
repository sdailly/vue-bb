import Vue from 'vue'
import Router from 'vue-router'
import Distribution from '@/views/Distribution'
import Manufacturer from '@/views/Manufacturer'
import Storages from '@/views/Storages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Distribution',
      component: Distribution
    },
    {
      path: '/distribution',
      name: 'Distribution',
      component: Distribution
    },
    {
      path: '/manufacturer',
      name: 'Manufacturer',
      component: Manufacturer
    },
    {
      path: '/storages',
      name: 'Storage',
      component: Storages
    }
  ]
})
