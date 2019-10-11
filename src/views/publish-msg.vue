<template>
  <div id="box">
    <mt-header title="发布帖子">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
<div id="innerBox">
      <div id="selectTopic">
      <span class="topic" :style="{'color':item.categoryId==categoryId?'red':'green'}" v-for="(item,index) in list" :key="index" @click="selectTopic(item.categoryId)">{{item.name}}</span>
    </div>
    <h4>请输入发布的内容:</h4>
    <div id="msg">
      <input id="msgTitle" placeholder=" 文章标题 :" v-model="title" type="text">
     
      <textarea placeholder=" 文章内容 : " id="textarea" cols="50" rows="8" v-model="intro"></textarea>
      <el-upload
        class="avatar-uploader"
        action="/api/nos/upload/image"
        name="file"
        :data="{fileUseForEnum:'BBS'}"
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
        <el-button type="success" icon="el-icon-check" round @click="publish()">发布</el-button>
        </div>
</div>
  </div>
</template>
<script>
import {getTopics,publish} from '@/services/index.js'
export default {
  data() {
    return {
      list: [
        
      ],
      imageUrl: "",
      categoryId:'',
      title:'',
      intro:'',
    };
  },
  methods: {
    handleAvatarSuccess(res) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.imageUrl=res.url
     
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
    },
    selectTopic(categoryId){
        this.categoryId = categoryId
       
    },
    publish(){
      publish(this.categoryId,this.title,this.intro,this.imageUrl).then(res=>{
       if(res.code==0){
                      this.$notify({
          title: '帖子发布成功',
        //   message: '这是一条成功的提示消息',
          type: 'success',
          position:'top-left'
        });
        // this.$router.push({path:'/'})
       }
      })
    }
  },
  created(){
   
  getTopics().then(res=>{
   this.list = res.rows
  })
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#innerBox{
  overflow:scroll;
  height: calc(100vh - 100px)
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
  #msgTitle{
    padding: 2px;
   border: 0;
   outline: none;
   border-bottom: 1px dashed #ccc;
   margin-bottom: 10px;
  }
}
#submit{
    padding: 5px;
    text-align: right;
  
}
#textarea {
  outline: none;
  resize: none;
  border: 1px solid #ccc;
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
.avatar-uploader-icon[data-v-02473fce]{
  background-color: #eee;
}
</style>