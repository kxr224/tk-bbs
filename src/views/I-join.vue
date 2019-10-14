<template>
  <div>
    <mt-header title="我参与的帖子">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div id="msgCard">
      <div class="msgBox" v-for="(item,index) in list" :key="index" @click="goMsgDetail(item)">
        <div id="topBox">
          <h3>{{item.title}}</h3>

          <img :src="item.coverImgUrl" alt />
        </div>
        <span style="font-size:12px">楼主：{{item.userName}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { iJoin } from "@/services/index.js";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    goMsgDetail(item) {
      this.$router.push({
        path: "/msgDetail",
        query: {
          postsId: item.postsId
        }
      });
    }
  },
  created() {
    iJoin().then(res => {
      this.list = res.rows;
    });
  }
};
</script>
<style lang="less" scoped>
#msgCard {
  height: calc(100vh - 100px);
  overflow: scroll;
  padding: 10px;
  background: #f5f7fa;
}
.msgBox {
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  -webkit-box-shadow: 4px 5px #ccc;
  box-shadow: 2px 2px #ccc;
  background-color: white;
  #topBox {
    overflow: hidden;
  }
}

h3 {
  float: left;
}

img {
  width: 80px;
  float: right;
}
</style>