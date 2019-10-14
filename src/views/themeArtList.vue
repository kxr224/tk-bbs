<template>
    <div class="main">
      <mt-header title="">
  <router-link to="/index/theme" slot="left">
    <mt-button icon="back">返回</mt-button>  </router-link>
    </mt-header>
       <h2>{{name}}</h2>
       <ul class="showList" v-for="item in rows" :key="item.id"  @click="getInvitation(item.postsId)">
        
      <li>{{item.title}}</li>
     
          <img :src="item.coverImgUrl" alt="" class="picture">
      
      <div class="contain">
          {{item.intro}}
      </div>
      <img :src="item.avatar" class="pictureTitle" />
      <span class="writer">{{item.userName}}</span>
    </ul> 
    </div>
</template>

<script>
import {getThemeArtList} from "@/services/index"
import {getTheme} from "@/services/index"
export default {
    data() {
        return {
            rows:[],
            name:this.$route.query.name
        }
    },
    created() {
        getThemeArtList(this.$route.query.categoryId).then(res=>{
            return this.rows=res.rows
            
        })
    },
    methods: {
        getInvitation(item) {
   
      this.$router.push({
        path: "/msgDetail",
        query: {
          postsId: item 
        }
      });
    },
    },
    
}
</script>

<style lang="less">
   .pictureTitle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 10px;
}
.showList {
    margin-left: 3%;
    margin-top: 10%;
    position: relative;
  // overflow-y: scroll;

  li {
    margin-top: 10px;
    box-shadow: 11px 6px -2px #7bc1f6;
    border-top: 1px solid #7bc1f6;
    font-size: 18px;
    font-weight: bold;
    
  }
  .writer {
    font-size: 14px;
  }
}
.mainList {
  height: calc(100vh - 110px);
  overflow: scroll;
}
.picture{
  width: 50px;
  height: 50px;
//   background: #7bc1f6;
  position: absolute;
  top: 14px;
  left: 268px;
}
h2{
      margin-top: 8%;
    margin-left: 5%;
}
.contain{
     width: 159px;
    height: 50px;
    position: absolute;
    top: 24px;
    left: 90px;
    font-size: 13px;
    text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
    
}

</style>