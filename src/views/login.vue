<template>
    <div class="main" id="id">
        <h3>请输入账号:</h3>
        <input type="text">
        <h3>请输入密码:</h3>
        <input type="text" id="password">
        <div class="but">
              <mt-button type="primary" size="normal">登陆</mt-button>
        </div>
        <p>没有账号？去<router-link to="/registe">注册</router-link>></p>
       <a href="http://">忘记密码</a>
   
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
    .main{
        margin-left: 85px;
        margin-top:100px;
    }
    .but{
        margin-top:10px;
            margin-left: 50px
    }
</style>