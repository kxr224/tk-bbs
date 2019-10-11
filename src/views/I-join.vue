<template>
    <div>
    
    
    
        <mt-header title="我参与的帖子">
    
    
    
            <router-link to="/mine" slot="left">
    
    
    
                <mt-button icon="back">返回</mt-button>
    
    
    
            </router-link>
    
    
    
    
    
        </mt-header>
    
    
    
        <div id="msgCard">
            <div class="msgBox" v-for="(item,index) in list" :key="index">
    
         <div id="topBox">
                <h3>{{item.title}}</h3>
            
            <img :src="item.coverImgUrl" alt="">
         </div>
           
                <span style="font-size:12px">楼主：{{item.userName}}</span>
          
    
        </div>
        </div>
    
    </div>
</template>
<script>
import { iJoin } from '@/services/index.js'
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        iJoin().then(res => {
            this.list = res.rows
        })
    }
}
</script>
<style lang="less" scoped>
#msgCard{
 height: calc(100vh - 100px);
    overflow: scroll;
}
.msgBox {
    margin-top: 10px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    box-shadow: 4px 5px #ccc;
    #topBox{
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