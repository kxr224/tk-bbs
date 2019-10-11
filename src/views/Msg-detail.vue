<template>
    <div id="box">
    
    
    
        <mt-header title="帖子详情">
    
    
    
            <router-link to="/" slot="left">
    
    
    
                <mt-button icon="back">返回</mt-button>
    
    
    
            </router-link>
    
    
    
            <mt-button icon="more" slot="right"></mt-button>
    
    
    
        </mt-header>
    
        <div id="innerBox">
    
            <div id="picture">头像</div>
    
            <div id="hoster">楼主：陈俊宇</div>
    
          
    
        </div>
          <div id="msgArea">帖子展示区域</div>
          <div id="contentArea">评论区域</div>
    
        <el-input id="context" placeholder="发表评论 :"></el-input>
    
        <el-button id="contextSubmit" type="success" icon="el-icon-check"></el-button>
    
    
    
    
    
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
#box {
    height: calc(100vh - 58.8px);
}

#context {
    width: 80%;
    position: fixed;
    left: 10px;
    bottom: 58.8px;
}

#contextSubmit {
    position: fixed;
    right: 10px;
    bottom: 58.8px;
}

#innerBox {
    overflow: hidden;
    #picture {
        float: left;
        height: 100px;
        background-color: red;
    }
    #hoster {
        float: left;
        height: 100px;
        background-color: blue;
    }
    
    }
    #msgArea {
        height: 200px;
        background-color: #ccc;
}
#contentArea{
    height: 100px;
    background-color: yellow;
}
</style>