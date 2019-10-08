import Vue from 'vue'
import Router from 'vue-router'
import registe from './views/registe.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/registe'},
    {
      path:'/registe',
      component:registe,
      name:'registe'
    }
  ]
})
