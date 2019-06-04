import Vue from 'vue'
import Router from 'vue-router'
import Other from '../components/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Other',
      component: Other
    }
  ]
})
