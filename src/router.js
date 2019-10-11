import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import theme from './components/theme.vue'
import recomend from './components/recomend.vue'
import login from './views/login.vue'
import registe from './views/registe.vue'
import forgetPassword from './views/Forget-password.vue'
import changePersonal from './views/changePersonal.vue'
import mine from './views/mine.vue'

import search from './views/search.vue'

import publishMsg from './views/publish-msg.vue'
import msgDetail from './views/Msg-detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
        {
          path:'/',
          redirect:"/index"
        },
        {
          path:"/index",
          component:index,
          children:[
            {
              path:'',
              redirect:'recomend'
            },
            {
              path:'theme',
              component:theme
            },
            {
              path:'recomend',
              component:recomend
            }
          ]

        },
        {
          path:'/login',
          component:login
        },
        {
          path:'/registe',
          component:registe
        },
        {
          path:'/mine',
          component:mine
        },
        {

          path:'/search',
          component:search},

          {path:'/publishMsg',
          component:publishMsg
        },
        {
          path:'/msgDetail',
          component:msgDetail

        },{
          path:'/forgetPassword',
          component:forgetPassword
        },
        {
          path:'/changePersonal',
          component:changePersonal
        }

  ]
})
