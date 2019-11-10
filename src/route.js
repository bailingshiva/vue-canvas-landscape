import Vue from 'vue'
import Router from 'vue-router'
import landscape from '@/landscape.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landscape',
      component: landscape
    }
  ]
})
