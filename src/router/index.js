import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list.vue',
      component: List
    }
  ]
})
