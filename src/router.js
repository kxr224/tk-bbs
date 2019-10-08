import Vue from 'vue'
import Router from 'vue-router'
import registe from '/@views/registe'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/registe',
      component:registe,
      name:'registe'
    }
  ]
})
