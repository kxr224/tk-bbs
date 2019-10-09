<template>
    <div>
          <h3>个人主页</h3>
             <div class="head">
            <img src="../assets/ceshi.png" alt="">
             <p id="name">用户名</p>
        </div>
        <p>账号</p>
        <p>破壳日</p>
        <p>个人说明</p>
        <p>我参与的 ></p>


                                   

    </div>
</template>

<script>
export default {
    beforeCreate() {

        if(!this.$store.state.islogin){
          this.$router.push({path:'/login'})
        }
    },
}
</script>

<style lang="less">
    .head{
        margin-top:100px;
       width:300px;
        height:100px;
        margin:30px 10px;
    }
    #name{
        width:100px;
        float: right;
    }
</style>