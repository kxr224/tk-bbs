<template>
  <div v-if="isLoading">
   
 
     <mt-header title="个人主页">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="title">
      <!-- <h1>bb Talk</h1> -->
      <!-- <h3>个人主页</h3> -->
    </div>
    <div class="personCard">
      <!-- <div class="head"> -->
      <!-- <div class="sculpture"> -->
      <el-upload
        ref="upload"
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
      <span id="name">{{msg.userName}}</span>
      <!-- </div>
      -->

      <!-- </div> -->
    </div>

    <div class="permsg">
      <p>账号: {{msg.loginName}}</p>
      <p class="el-icon-mobile-phone">: {{msg.phonenumber}}</p>
      <br />
      <p class="el-icon-message">: {{msg.email}}</p>
    </div>
    <div class="function">
      <router-link to="/iJoin">
        <p>我参与的 ></p>
      </router-link>
      <router-link to="/changePersonal">
        <p>修改资料 ></p>
      </router-link>
      <router-link to="/login">
        <p @click="exitLogin()">退出登陆 ></p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPerson } from "@/services/mine";
import { exitBbTalk } from "@/services/index";
import { checkIsLogin } from "@/services/mine";
export default {
  methods: {
    handleAvatarSuccess(res, file) {
      // this.$forceUpdate()
      // this.$refs.upload.clearFiles();
      //更换头像让他立即显示出来，改变计算属性user的值达到更新
      getPerson().then(resp => {
        this.user.avatar = resp.avatar;
      });
      if (res.code == 0) {
        this.imageUrl = URL.createObjectURL(file.raw);
      }
    },
    goLast() {
      this.$router.push({ path: "/index" });
    },
    beforeAvatarUpload(file) {
      this.$forceUpdate();
      const isJPG = file.type === "image/jpeg";
      const isGIF = file.type === "image/gif";
      const isPNG = file.type === "image/png";
      const isBMP = file.type === "image/bmp";
      const isLt5M = file.size / 1024 / 1024 < 10;

      if (!isJPG && !isGIF && !isPNG && !isBMP) {
        this.$message.error("上传头像图片只能是 JPG/GIF/PNG/BMP格式!");
      }
      if (!isLt5M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }

      return (isJPG || isBMP || isGIF || isPNG) && isLt5M;
    },
    //退出登陆
    exitLogin() {
      exitBbTalk().then(res => {
        console.log("退出成功");
      });
    }
  },
  data() {
    return {
      msg: {},
      isLoading: false
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    checkIsLogin().then(res => {
      this.isLoading = true;
      if (res.code == 0) {
        this.msg = res.data;
      } else {
        this.$router.push({ path: "/login" });
      }
    });
  }
};
</script>

<style lang="less" scoped>

// .sculpture{
//   margin-left:100px;
// }
#name {

  /*right: 48%;*/
  /*top: 31%;*/

  // top: 241px;
  font-size: 26px;

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
  justify-content: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;

}
.personCard {

  border-radius: 10px;
  // margin-top:50px;
  /*margin-top: 17%;*/
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;


  /*margin-top: 17%;*/
}
.el-icon-back:before {
  content: "\E6EA";
  font-size: 20px;
}
.permsg {
  margin-top: 65px;
  margin-bottom: 5px;
}
.permsg {
  // border: 2px solid #7bc1f6;
  box-shadow: -6px -1px 8px #7bc1f6;
  border-radius: 10px;
  p {
    margin: 8px;
  }
}
.avatar[data-v-4a6811ed] {
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 50%;

}
a {
  text-decoration: none;
  // color: black;
}
a:-webkit-any-link {
  // color: black;
  cursor: pointer;
  text-decoration: none;
}
.function {
  margin-top: 15px;
  margin-left: 10px;
  // border: 2px solid #7bc1f6;
  // box-shadow: -6px -1px 8px #7bc1f6;
  border-radius: 10px;
  a:-webkit-any-link{
    color:black;
  }
  p {
    margin-top: 5px;
  }
}
</style>