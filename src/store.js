import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  islogin:false,
  user:{},
  // invitation:{}
  },
  mutations: {
     loginsucess(state,payload){
         state.user=payload.user
          state.islogin=true
     }
     ,
     loginfail(state){
          state.islogin=false
     }
    
    //  changeInvitation(state,payload){
    //    state.invitation=payload.invitation
    //  }

  },
  actions: {

  }
})
