<template>
  <div class="main" id="id">
    <h2>bbTalk</h2>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" @keyup="check"></mt-field>

    <mt-field label="密码" placeholder="请输入密码" type="password" v-modal="password" @keyup="check"></mt-field>
    <div class="but">
      <mt-button type="primary" size="large" @click="log">登陆</mt-button>
    </div>

    <p class="noNum">
      没有账号？去
      <a href>注册</a>
    </p>
    <a href="http://">忘记密码</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    checkName() {
      if (this.username.length == 0) {
        this.msgName = "用户名不能为空";
      } else if (this.username.length < 2) {
        this.msgName = "用户名至少2个字符";
      } else {
        this.msgName = "";
      }
    },
    checkPassword() {
      var word = this.password.trim();
      if (word == "") {
        this.msgpassword = "密码不能为空";
      } else {
        var count = 0;
        if (/[0-9]/.test(word)) {
          count++;
        }
        if (/[A-Za-z]/.test(word)) {
          count++;
        }
        if (/[^0-9A-Za-z]/.test(word)) {
          count++;
        }
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
</style>