import Vue from 'vue'
import Router from 'vue-router'
import Menu from './menu'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: Menu
})
