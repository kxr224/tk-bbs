<template>
  <div>
    <mt-header title="搜索帖子或主题">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <input type="text" class="search" v-model="inputMsg" @focus="apperHis" />
    <el-button id="el-button" icon="el-icon-search" circle @click="handleSearch"></el-button>
    <div class="history">
      <ul v-show="showHisory" class="historyList">
          <li>搜索历史</li>
        <li v-for="item in historySearch" :key="item.keyWord"  @click="apperHis"><span class="el-icon-time"></span>{{item.keyWord}}</li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMsg: "",
      historySearch: [],
      showHisory:false
    };
  },
  methods: {
      apperHis(){
          console.log(1)
         this.showHisory=true
      },
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
      let storage=window.localStorage
        if(storage.getItem('searchWord')!==null){
            this.historySearch=JSON.parse(storage.getItem('searchWord'))
  }
  }
}
</script>

<style lang="less">
.search {
  width: 250px;
  height: 25px;
  margin-top: 5px;
  margin-left: 28px;
  border: 1px solid;
}
.historyList{
    margin-left:25px;
}
</style>