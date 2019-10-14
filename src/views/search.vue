<template>
  <div>
    <mt-header title="搜索帖子或主题">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <input type="text" class="search" v-model="inputMsg" @focus="apperHis"  @keyup="showRes" />
    <el-button id="el-button" icon="el-icon-search" circle @click="handleSearch"></el-button>
    <div class="searchMain">
      <div class="history">
        <ul v-show="showHisory" class="historyList">
          <li  v-show="showHisory">搜索历史</li>
          <p class="el-icon-delete" @click="clearHis"></p>
          <li v-for="item in historySearch" :key="item.keyWord" @click="searchHis(item.keyWord)">
            <span class="el-icon-time"></span>
            {{item.keyWord}}
          </li>

        </ul>
      
      </div>
      <div class="list" v-if="show">
        <ul class="showList" v-for="item in rows" :key="item.id">
          <li @click="getInvitation(item.postsId)">{{item.title}}</li>

          <img :src="item.coverImgUrl" alt class="picture" />

          <div class="contain">{{item.intro}}</div>
          <img :src="item.avatar" class="pictureTitle" />
          <span class="writer">{{item.userName}}</span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchRes } from "@/services/index";
export default {
  data() {
    return {
      inputMsg: "",
      historySearch: [],
      showHisory: false,
      rows: [],
      show: false
    };
  },
  watch: {
    inputMsg() {
     if (this.inputMsg == "") {
        this.show = false;
        this.showHisory=true
      } else {
        this.show = true;
        this.showHisory=false
      }
    }
  },
  methods: {
    clearHis(){
     this.historySearch="",
     localStorage.setItem("searchWord","[]")
    },
    searchHis(keyWord) {
      this.inputMsg = keyWord;
      getSearchRes(this.inputMsg).then(res => {
        return (this.rows = res.rows);
      });
    },
    getInvitation(item) {
      //  this.$store.commit({
      //         type: "changeInvitation",
      //         invitation: item
      //       });
      this.$router.push({
        path: "/msgDetail",
        query: {
          postsId: item
        }
      });
    },
    apperHis() {
      this.showHisory = true;
    },
    showRes() {
      getSearchRes(this.inputMsg).then(res => {
        return (this.rows = res.rows);
      });
    },
    //  showResult(){
    //     getSearchRes(inputMsg).then(res=>{
    //         return rows=res.rows
    //   })

    //  },
    handleSearch() {
      if (this.inputMsg !== "") {
        let storage = window.localStorage;
        if (storage.getItem("searchWord") == null) {
          this.historySearch.unshift({ keyWord: this.inputMsg });
          storage.setItem("searchWord", JSON.stringify(this.historySearch));
        } else {
          if (
            !JSON.parse(storage.getItem("searchWord")).find(
              v => v.keyWord === this.inputMsg
            )
          ) {
            if (this.historySearch.length >= 6) {
              this.historySearch.pop();
            }
            this.historySearch.unshift({ keyWord: this.inputMsg });
            storage.setItem("searchWord", JSON.stringify(this.historySearch));
          }
        }
      }
    }
  },
  created() {
    let storage = window.localStorage;
    if (storage.getItem("searchWord") !== null) {
      this.historySearch = JSON.parse(storage.getItem("searchWord"));
    }
  }
};
</script>

<style lang="less">
.search {
  width: 80%;
  height: 25px;
  margin-top: 2%;
  margin-left: 9%;
  margin-bottom: 2%;
  border: 1px solid;
  border-radius: 10px;
}
.historyList {
  margin-left: 25px;
}
.searchMain {
  height: calc(100vh - 100px);
  overflow: scroll;
}
</style>