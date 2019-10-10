import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  islogin:false,
  user:{
      
  }
  },
  mutations: {
     loginsucess(state,payload){
         state.user=payload.user
          state.islogin=true
     }
  },
  actions: {

  }
})
