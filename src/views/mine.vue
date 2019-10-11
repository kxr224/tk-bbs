<template>
  <div>
    <div class="title">
      <h2>bb Talk</h2>
      <h3>个人主页</h3>
    </div>
    <div class="head">
      <el-upload
        class="avatar-uploader"
        action="/api/system/user/profile/update/avatar/nos"
        :show-file-list="false"
        name='avatarfile'
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="user.avatar" :src="user.avatar" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <p id="name">{{msg.userName}}</p>
    </div>
    <p>账号：{{msg.loginName}}</p>
    <p>手机号：{{msg.phonenumber}}</p>
    <p>邮箱：{{msg.email}}</p>
    <router-link to=""><p>我参与的 ></p></router-link>
    <router-link to="/changePersonal"><p>修改资料</p></router-link>
  </div>

</template>

<script>
import { getPerson } from "@/services/mine";
export default {
     methods: {
      handleAvatarSuccess(res, file) {
        if(res.code==0){
        this.imageUrl = URL.createObjectURL(file.raw);
        }
      
      
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
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
     user(){
         return this.$store.state.user
     }
  },
  beforeCreate() {
  
  },
  created() {
    if (!this.$store.state.islogin) {
      this.$router.push({ path: "/login" });
    }
    getPerson().then(res => {
      this.msg = res;
    });
  },
 
};
</script>

<style lang="less" scoped>
.head {
  margin-top: 100px;
  width: 100px;
  height: 100px;
  margin: 30px 10px;
  background: violet;
}
#name {
  position: absolute;
  right: 78px;
  top: 145px;
}
.title > h2 {
  text-align: center;
}
.title h3 {
  margin-left: 10px;
}

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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
</style>