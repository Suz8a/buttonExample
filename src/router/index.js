import Vue from 'vue'
import Router from 'vue-router'
import MyButton from '../components/MyButton'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
