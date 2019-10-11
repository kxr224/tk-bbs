<template>
    <div class="themeContent">
        <ul class="themeList">
         <li v-for="item in rows" :key="item.name">
            <p>{{item.name}}</p>
         <img :src="item.cover" alt="" class="themeImg">
     </li>
        </ul>
    
    </div>
</template>

<script>
import {getTheme} from "@/services/index"
export default {
    data() {
        return {
            rows:[]

        }
    },
    created() {
        getTheme(1,9).then(res=>{
            return this.rows=res.rows
        })
    },

}
</script>



<style lang="less" scoped>
   .themeList>li{
       float:left;
       width:100px;
       height:100px;
    //    background-color:pink;
     
   }
   .themeContent{
       height:calc(100vh - 148px);
       overflow: scroll;
       margin-left:47px;
       margin-top:10px;
   }
   .themeImg{
       width:70px;
       height:60px;
       margin-top:10px;
   }
</style>