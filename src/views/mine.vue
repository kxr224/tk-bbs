<template>
  <div>
    <div class="el-icon-back" @click="goLast"></div>
    <div class="title">
      <h1>bb Talk</h1>
      <h3>个人主页</h3>
    </div>
    <div class="personCard">
      <div class="head">
        <div class="sculpture">
            <el-upload
          class="avatar-uploader"
          action="/api/system/user/profile/update/avatar/nos"
          :show-file-list="false"
          name="avatarfile"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="user.avatar" :src="user.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </div>
        
        <p id="name">{{msg.loginName}}</p>
      </div>
    </div>

    <div class="permsg">
      <p>账号: {{msg.loginName}}</p>
    <p class="el-icon-mobile-phone">: {{msg.phonenumber}}</p>
    <br />
    <p class="el-icon-message">: {{msg.email}}</p>
    </div>
    <router-link to="/iJoin">
      <p> 我参与的 ></p>
    </router-link>
    <router-link to="/changePersonal">
      <p> 修改资料 ></p>
    </router-link>
  </div>
</template>

<script>
import { getPerson } from "@/services/mine";
export default {
  methods: {
    handleAvatarSuccess(res, file) {
      if (res.code == 0) {
        this.imageUrl = URL.createObjectURL(file.raw);
      }
    },
    goLast() {
      this.$router.go(-1);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  data() {
    return {
      msg: {}
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  beforeCreate() {},
  created() {
    if (!this.$store.state.islogin) {
      this.$router.push({ path: "/login" });
    }
    getPerson().then(res => {
      this.msg = res;
    });
  }
};
</script>

<style lang="less" scoped>
.head {
  margin-top: 100px;
  width: 100px;
  height: 100px;
  margin: 30px 10px;
  background: violet;
  border-radius: 50%;
}
#name {
 position: absolute;
    right: 128px;
    top: 150px;
    font-size: 43px;
}
.title > h1 {
  text-align: center;
}
.title h3 {
  margin-left: 10px;
}

.avatar-uploader .el-upload {
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
.personCard {
  border: 2px solid #7bc1f6;
  box-shadow: -6px -1px 8px #7bc1f6;
  border-radius: 10px;
  margin-top:50px;
}
.el-icon-back:before {
  content: "\E6EA";
  font-size: 20px;
}
.permsg{
  margin-top:10px;
 margin-bottom: 5px;
}
.permsg{
  p{
    margin:5px;
  }
}
.avatar[data-v-4a6811ed] {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 50%;
}
a{
  text-decoration: none;
  color: black;
}
</style>