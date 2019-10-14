<template>
  <div id="box">
    <mt-header title="帖子详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="goBack()">返回</mt-button>
      </router-link>

      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div id="bodyBox">
      <div id="innerBox">
        <div id="picture">
          <img :src="invitationDetails.avatar" alt />
        </div>

        <div id="hoster">
          楼主：
          <span>{{invitationDetails.userName}}</span>
        </div>
      </div>

      <div id="msgArea">
        <div class="imgBox" ref="imgBox">
          <img class="invitationimg" :src="invitationDetails.coverImgUrl" alt />
        </div>

        <h4>{{invitationDetails.title}}</h4>

        <p class="text">{{invitationDetails.intro}}</p>

        <div class="msgAreaBot">
          <i class="el-icon-delete" @click="deleteMsg(invitationDetails.postsId)"></i>
          <i class="el-icon-chat-round" @click="goComment()">评论</i>
        </div>
      </div>

      <div id="contentArea">
        <h5>全部评论</h5>

        <!-- <li v-for="(item,index) in comtentMsgList" :key="index">{{item.commentContent}}</li> -->

        <div class="contentBox" v-for="(item,index) in comtentMsgList" :key="index">
          <img :src="item.avatar" alt />
          <span>{{item.userName}}</span>

          <p>{{item.commentContent}}</p>

          <div class="rbCommentCard" v-for="(item2,index2) in item.rbCommentList" :key="index2">
            <!-- /////////////////////////////////////////////////////// -->

            <img :src="item2.avatar" alt />
            <span>{{item2.userName}}</span>

            <p>{{item2.commentContent}}</p>
          </div>

          <div class="commentIcon">
            <i class="el-icon-delete" @click="deleteComment(item.commentId)"></i>
            <i @click="rbComment(item.commentId,item)" class="el-icon-chat-round">回复</i>
          </div>
        </div>
      </div>
    </div>

    <el-input ref="commentInput" id="context" v-model="input" placeholder="发表评论 :"></el-input>

    <el-button v-show="isShow" class="contextSubmit" icon="el-icon-check" @click="sendAComent()">评论</el-button>

    <el-button
      v-show="!isShow"
      class="contextSubmit"
      icon="el-icon-check"
      @click="sendARbComent()"
    >回复</el-button>
  </div>
</template>
<script>
import {
  getCommentContent,
  sendComment,
  sendRbComment,
  getRbCommentList,
  deleteComment,
  getInvitationDetails
} from "@/services/index.js";
export default {
  // ref只能在页面加载之后才能用
  //    mounted(){
  //         //  this.$refs.imgBox.style.color='red'
  //          this.$refs.imgBox.style.backgroundImage =`url(${this.invitationDetail.coverImgUrl})`
  //     // },
  data() {
    return {
      comtentMsgList: [],
      // rbCommentList: [],
      input: "",
      isShow: true,
      commentId: "",
      postsId: "",
      invitationDetails: ""
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    goComment() {
      this.$refs.commentInput.focus();
      // this.$refs.commentInput.scrollIntoView()
      this.isShow = true;
    },
    sendAComent() {
      this.$forceUpdate();
      //调用发送评论的函数
      sendComment(this.$route.query.postsId, this.input).then(res => {
        //发送评论后刷新评论列表
        getCommentContent(this.$route.query.postsId).then(res => {
          this.comtentMsgList = res.rows;
        });
      });
      //刷新请求帖子详情的页面
      getCommentContent(this.$route.query.postsId).then(res => {
        this.$forceUpdate();
        this.comtentMsgList = res.rows;
      });
      this.input = "";
    },
    rbComment(commentId, item) {
       this.$forceUpdate();
      this.$refs.commentInput.focus();
      this.isShow = false;
      this.commentId = commentId;
      //再次点击清除这个列表，达到再次点击关闭回复这个小页面
      if (item.rbCommentList) {
       
        item.rbCommentList = "";
      } else {
        //调用回复列表的接口
        getRbCommentList(commentId).then(res => {
        this.$forceUpdate();        
          if (res.code == 0) {
            item.rbCommentList = res.rows;

            // this.comtentMsgList = {...this.comtentMsgList}
          }
        });
      }
    },
    sendARbComent() {
      //调用回复接口
      sendRbComment(this.$route.query.postsId, this.commentId, this.input).then(
        res => {
          if (res.code == 0) {
            alert("回复成功");
            this.input = "";
          }
        }
      );
    },
    //删除评论
    deleteComment(commentId) {
      this.$forceUpdate();
      deleteComment(commentId).then(res => {
        //删除成功后刷新评论列表
        getCommentContent(this.$route.query.postsId).then(res => {
          this.comtentMsgList = res.rows;
        });
      });
    },
    // 删除帖子
    deleteMsg(postsId) {
      console.log(postsId);
      deleteComment(postsId).then(res => {
        if (res.code == 0) {
          this.$router.push({ path: "/index" });
          console.log("删除成功");
        }
      });
    }
  },

  created() {
    this.postsId = this.$route.query.postsId;
    console.log(this.$route.query.postsId);
    getCommentContent(this.$route.query.postsId).then(res => {
      this.comtentMsgList = res.rows;
    });
    //请求帖子的详情
    getInvitationDetails(this.postsId).then(res => {
      this.invitationDetails = res.data;
    });
  }
};
</script>
<style lang="less" scpoed>
* {
  margin: 0;
  padding: 0;
}

#box {
  height: calc(100vh - 58.8px);
  #bodyBox {
    margin-top: 0;
    height: calc(100vh - 140px);
    overflow: scroll;
  }
}

#context {
  width: 75%;
  position: fixed;
  left: 0;
  bottom: 58.8px;
}

#context:focus {
  color: #fff;
  background-color: #888888;
}

.contextSubmit {
  position: fixed;
  right: 1px;
  bottom: 58.8px;
}

#innerBox {
  overflow: hidden;
  background-color: #f5f7fa;
  background-position: center;
  background-size: 100%;
  #picture {
    margin-left: 30px;
    border-radius: 50%;
    float: left;
    height: 50px;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
  #hoster {
    padding: 0 10px;
    line-height: 50px;
    float: left;
    height: 50px;
    span {
      font-size: 12px;
    }
  }
}

#msgArea {
  padding: 0 30px;
  text-align: left;
  background-color: #f5f7fa;
  .imgBox {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .text {
    padding: 5px 0;
    font-size: 13px;
    color: #888888;
  }
  .msgAreaBot {
    text-align: right;
    padding-bottom: 10px;
    border-bottom: 1px dashed black;
    i {
      margin-left: 10px;
      border-radius: 20px 20px 20px 20px;
      padding: 5px;
      border: 1px solid #ccc;
      font-size: 14px;
    }
  }
}

#contentArea {
  overflow: scroll;
  padding: 0 30px;
  text-align: left;
  height: calc(100% - 100px);
  background-color: #f5f7fa;
  h5 {
    padding: 10px 0;
  }
  .contentBox {
    padding: 10px 0 0 10px;
    text-align: left;
    margin: 10px 10px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px #ccc;
    border-radius: 10px;
        background: #f5deb342;
    img {
      width: 25px;
      border-radius: 50%;
    }
    span {
      font-size: 14px;
      font-weight: bolder;
    }
    p {
      font-size: 13px;
    }
    .rbCommentCard {
    text-align: left;
    margin: 0 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 5px;
    padding: 5px;
      img {
        width: 20px;
        border-radius: 50%;
      }
      span {
        font-size: 12px;
        font-weight: bolder;
      }
      p {
        font-size: 10px;
        color: #888888;
      }
    }
    .commentIcon {
      text-align: right;
      i {
        margin: 0 10px 10px 0;
        border-radius: 20px 20px 20px 20px;
        padding: 5px;
        border: 1px solid #ccc;
        font-size: 12px;
      }
      i:hover {
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>