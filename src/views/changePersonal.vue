<template>
  <div id="box">
    <mt-header title="修改个人资料">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div id="bodyBox">
      <mt-field label="昵称：" type="text" v-model="userName" :placeholder="user.userName"></mt-field>
      <mt-field label="email：" type="text" v-model="email" :placeholder="user.email"></mt-field>
      <mt-field
        label="手机号："
        type="text"
        v-model="phonenumber	"
        @blur.native.capture="checkPhone()"
        :placeholder="user.phonenumber"
      >
        <span class="tips">{{msgPhone}}</span>
      </mt-field>
      <el-button plain @click="changePersonalMsg()">确认修改</el-button>
    </div>
  </div>
</template>


<script>
import { changePersonalMsg } from "@/services/mine.js";
export default {
  data() {
    return {
      userName: "",
      email: "",
      phonenumber: "",
      msgPhone: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    changePersonalMsg() {
      changePersonalMsg(this.userName, this.email, this.phonenumber).then(
        res => {
          if (res.code == 0) {
            this.$notify({
              title: "修改成功",
              //   message: '这是一条成功的提示消息',
              type: "success",
              position: "top-left"
            });
          }
        }
      );
    },
    checkPhone() {
      var word = this.phonenumber.trim();
      if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(word)) {
        this.msgPhone = "";
      } else {
        this.msgPhone = "请输入正确的手机号";
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#box {
  text-align: center;
  #bodyBox {
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid #ccc;
    border-top: 0;
    .tips {
      color: tomato;
      font-size: 12px;
    }
  }
}
</style>