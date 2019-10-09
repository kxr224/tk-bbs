<template>

  <div class="main" id="id">
    <h2>bbTalk</h2>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" @blur.native.capture="checkName">
        <span class="tip">{{msgName}}</span>
    </mt-field>

    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" @blur.native.capture="checkPassword">
        <span class="tip">{{msgpassword}}</span>
    </mt-field>
    <div class="but">
      <mt-button type="primary" size="large" @click="log">登陆</mt-button>

  
      
   

    </div>

    <p class="noNum">
      没有账号？去
      <router-link to="/registe">注册</router-link>
    </p>
    <a href="http://">忘记密码</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      msgName:'',
      password: "",
      msgpassword:'',
    };
  },
  methods: {
    checkName() {
      if (this.username.length == 0) {
        this.msgName = "用户名不能为空!";
      } else {
        this.msgName = "";
      }
    },
    checkPassword() {
      var word = this.password.trim();
      if (word == "") {
        this.msgpassword = "密码不能为空!";
      } 
    },
    log(){
        
    }
  }
};
</script>

<style lang="less">
.main {
  text-align: center;
  margin-top: 50px;
}

.but {
  margin-top: 30px;
  margin-left: 5px;
}

.noNum {
  margin-top: 50px;
}
.tip{
        color:red;
        font-size:13px;
    }
   

</style>