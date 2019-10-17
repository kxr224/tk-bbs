<template>
  <div id="cjy">
    <mt-header title="搜索帖子">
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
         
          <li v-for="item in historySearch" :key="item.keyWord" @click="searchHis(item.keyWord)">
            <span class="el-icon-time"></span>
            {{item.keyWord}}
          </li>
          <p class="el-icon-delete" @click="clearHis"></p>
        </ul>
      
      </div>
      <div class="list" v-if="show">
        <ul class="showList" v-for="item in rows" :key="item.id" @click="getInvitation(item.postsId)">
        <div class="listLeft">
          <img :src="item.avatar" class="pictureTitles" />
          <span class="writers">{{item.userName}}</span>
        </div>
        <div class="listMid">
          <li class="titles">{{item.title}}</li>
          <div class="contains">{{item.intro}}</div>
        </div>
        <div class="listRight">
          <img :src="item.coverImgUrl" alt class="pictures" />
        </div>
      </ul>
        <!-- <ul class="showList" v-for="item in rows" :key="item.id">
          <li @click="getInvitation(item.postsId)">{{item.title}}</li>

          <img :src="item.coverImgUrl" alt class="picture" />

          <div class="contain">{{item.intro}}</div>
          <img :src="item.avatar" class="pictureTitle" />
          <span class="writer">{{item.userName}}</span>
        </ul> -->
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
#cjy{
  background-color: #f5f7fa;
}
.search {
  width: 70%;
  height: 25px;
  margin-top: 2%;
  margin-left: 12%;
  margin-bottom: 2%;
  border: 1px solid;
  border-radius: 10px;
  outline: none;
}
#el-button{
  margin-bottom: 2%;
}
.historyList {
  margin-left: 25px;
}
.searchMain {
  height: calc(100vh - 140px);
  overflow: scroll;
   background: #f5f7fa;
  .main{
      overflow-y: scroll;
    padding: 10px;
    height: calc(100vh - 99px);
    box-sizing: border-box;
    background: #f5f7fa;
    .showList {
  margin-left: 3%;
  width: 90%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 3px 3px rgba(242, 246, 252, 0.31);
  background: white;

  .listLeft {
    text-align: center;
    width: 25%;
    .pictureTitles {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
    .writers {
      font-size: 12px;
    }
  }
  .listMid {
    text-align: left;
    width: 50%;
    .titles {
      text-align: left;
      list-style: none;
      padding: 5px 0;
      font-size: 16px;
      font-weight: bolder;
    }
    .contains {
      color: #888888;
      padding: 2px;
      font-size: 12px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .listRight {
    padding: 2px;
    width: 25%;
    .pictures {
      width: 100%;
      border-radius: 20px;
    }
  }
}
  }
}
.el-icon-search:before {
    content: "\E778";
    background: #f2f6fc;
}
</style>