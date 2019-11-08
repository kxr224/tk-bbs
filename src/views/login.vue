<template>
  <div class="main" id="id">
    <h2>bbTalk</h2>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" @blur.native.capture="checkName">
      <span class="tip">{{msgName}}</span>
    </mt-field>

    <mt-field
            label="密码"
            placeholder="请输入密码"
            type="password"
            v-model="password"
            @keyup.native.capture.enter="log"
            @blur.native.capture="checkPassword"
    >
      <span class="tip">{{msgpassword}}</span>
    </mt-field>
    <div class="but">
      <mt-button type="primary" size="large" @click="log" >登陆</mt-button>
    </div>
    <p v-if="see" class="alert">用户名或密码错误</p>

    <p class="noNum">
      没有账号？去
      <router-link to="/registe">注册</router-link>
    </p>
    <router-link to="/forgetPassword">忘记密码</router-link>
  </div>
</template>

<script>
import { login } from "@/services/mine";
export default {
  data() {
    return {
      username: "",
      msgName: "",
      password: "",
      msgpassword: "",
      see: false
    };
  },
  computed: {

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

    // data() {
    //   return {
    //     username: "",
    //     password: ""
    //   };
    // },
    //登陆成功跳转到我的页面
    log() {
      login(this.username, this.password).then(res => {
        if (res.code == 0) {
          this.$store.commit({
            type: "loginsucess",
            user: res.data
          });
          this.$router.push({ path: "/mine" });
        } else {
          this.see = true;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
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
  color: red;
  font-size: 13px;
}
.alert {
  color:red
}
</style>
