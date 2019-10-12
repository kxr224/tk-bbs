<template>
  <div class="themeContent">
     
    <ul class="themeList">
      <li v-for="item in rows" :key="item.name">
         
        <router-link :to="{path:'/themeArtList',query:{categoryId:item.categoryId,name:item.name}}">
          <p>{{item.name}}</p>
        </router-link>
        <img :src="item.cover" alt class="themeImg" />
      </li>
    </ul>
  
  </div>
</template>

<script>
import { getTheme } from "@/services/index";
export default {
  data() {
    return {
      rows: []
    };
  },
  created() {
    getTheme(1,9).then(res => {
      return (this.rows = res.rows);
    });
  },
  methods: {}
};
</script>



<style lang="less" scoped>
.themeList > li {
  float: left;
  width: 80px;
  height: 80px;
  //    backgrouottnd-color:pink;
  padding: 20px;
  margin-bottom: 60px;
  text-decoration: none;
  position:relative;
}
a:-webkit-any-link {
   
    cursor: pointer;
    text-decoration: none;
}
.themeContent {
  height: calc(100vh - 148px);
  overflow: scroll;
  margin-left: -32px;
  
}
ul {
  margin: 0;
}

p {
  margin-left: 24px;
  margin-top: 6px;
  height: 5px;
  color:black;
  font-weight: bold;
//   position: absolute;
//   top:0;
//   left:0;
}
.themeImg {
  width: 100px;
  height: 100px;
  border-radius:40%
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>