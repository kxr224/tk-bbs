<template>
  <div id="box">
    <mt-header title="发布帖子">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div id="selectTopic">
      <span v-for="(item,index) in list" :key="index">{{item}}</span>
    </div>
    <h4>请输入发布的内容:</h4>
    <div id="msg">
      <textarea id="textarea" cols="50" rows="8"></textarea>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        name="avatarfile"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <span>添加图片</span>
    </div>
    <div id="submit">
        <el-button type="success" icon="el-icon-check" round>发布</el-button>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "科学",
        "人文",
        "历史",
        "感情",
        "体育",
        "天文",
        "社会",
        "汽车",
        "游戏",
        "颜值",
        "舞蹈"
      ],
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

#selectTopic {
  padding: 5px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  span {
    border: 1px solid #ccc;
    border-radius: 20%;
    padding: 2px;
    margin: 10px;
  }
}
h4 {
  padding: 20px;
}
#msg {
    text-align: center;
  border: 1px solid #ccc;
}
#submit{
    padding: 5px;
    text-align: right;
  
}
#textarea {
  outline: none;
  resize: none;
  border: none;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
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
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>