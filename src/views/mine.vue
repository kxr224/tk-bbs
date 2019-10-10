<template>
  <div>
    <h3>个人主页</h3>
    <div class="head">
      <img :src="msg.avatar" alt="">
      <p id="name">昵称：{{msg.loginName}}</p>
    </div>
    <p>账号：{{msg.phonenumber}}</p>

    <p>我参与的 ></p>
  </div>
</template>

<script>
import {getPerson} from '@/services/mine'
export default {
    data(){
        return {
            msg:[]
        }
    
    },
    beforeCreate() {

        if(!this.$store.state.islogin){
          this.$router.push({path:'/login'})
        }
        
    },
    created(){
          
            getPerson().then(res=>{
               this.msg=res
            
            })
       
    },
    methods: {
       
    },
}
</script>

<style lang="less">
.head {
  margin-top: 100px;
  width: 300px;
  height: 100px;
  margin: 30px 10px;
}
#name {
  width: 100px;
  float: right;
}
</style>