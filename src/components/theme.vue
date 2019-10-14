<template>
  <div class="themeContent" >
    <!-- <ul class="themeList">
      <li v-for="item in rows" :key="item.name">
         
        <router-link :to="{path:'/themeArtList',query:{categoryId:item.categoryId,name:item.name}}">
          <p>{{item.name}}</p>
        </router-link>
        <img :src="item.cover" alt class="themeImg" />
      </li>
    </ul>-->
    <el-row :gutter="10"  justify="space-around">
      <el-col :span="8" v-for="item in rows" :key="item.name" class="category-item">
          <router-link
            :to="{path:'/themeArtList',query:{categoryId:item.categoryId,name:item.name}}"
          >
           
          </router-link>
          <img :src="item.cover" alt class="themeImg" />
           <p>{{item.name}}</p>
      </el-col>
    </el-row>
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
    getTheme(1, 9).then(res => {
      return (this.rows = res.rows);
    });
  },
  methods: {}
};
</script>



<style lang="less" scoped>
.category-item{
     display: flex;
    justify-content: center;
    flex-direction: column;
        align-items: center;
        margin-top:20px;

}
a:-webkit-any-link {
  cursor: pointer;
  text-decoration: none;
}
.themeContent {
  height: calc(100vh - 110px);
  overflow: scroll;


 
}


p {

  height: 5px;
  color: black;
  font-weight: bold;
  margin-top: 7px;

}
.themeImg {
  width: 100px;
  height: 100px;
  border-radius: 40%;
  
    margin-top: 23px;
}

</style>