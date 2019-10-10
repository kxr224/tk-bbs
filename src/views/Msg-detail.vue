<template>
    <div id="box">
    
        <mt-header title="帖子详情">
    
            <router-link to="/" slot="left">
    
                <mt-button icon="back">返回</mt-button>
    
            </router-link>
    
            <mt-button icon="more" slot="right"></mt-button>
    
        </mt-header>
        <div>
            <div id="picture">头像</div><div id="hoster">楼主：陈俊宇</div>
        </div>
 <el-input id="context" placeholder="发表评论 :"></el-input>
 <el-button id="contextSubmit" type="success" icon="el-icon-check" ></el-button>
        
    
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
#box{
    height: calc(100vh - 58.8px);
  
  
}
#context{
    width:80%;
    position:fixed;
    left: 10px;
    bottom:58.8px;
}
#contextSubmit{
    position:fixed;
    right: 10px;
    bottom:58.8px;
}
#picture{
    float: left;
}
#hoster{
    float: left;
}
</style>