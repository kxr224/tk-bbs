import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import theme from './components/theme.vue'
import recomend from './components/recomend.vue'
import login from './views/login.vue'
import mine from './views/mine.vue'

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
          path:'/mine',
          component:mine
        }

  ]
})
