<template>
    <div>
     
 <router-link to="/search"><input type="text" class="search"></router-link>
<mt-button type="primary" size="small">搜索</mt-button>
<tablist></tablist>
 <transition name="movie-tran"><router-view></router-view></transition>
    </div>
</template>

<script>
import tablist from '@/components/tab.vue'
export default {
    components:{
        tablist
    }
}
</script>

<style lang="less">
 
.search{
    width:250px;
    height:25px;
    margin-top:5px;
    margin-left:28px;
     border: 1px solid

}
.button{
    width:50px;
    height:30px;
    margin-left:5px;
      color: #26a2ff;
    
      
}

</style>