<template>
    <div>
     
 <router-link to="/search"><input type="text" class="searchInput"></router-link>
 <el-button id="el-button" icon="el-icon-search" circle></el-button>
<tablist></tablist>
 <transition name="movie-tran" mode="out-in"><router-view></router-view></transition>
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
 #el-button{
     padding: 0;
     border: 0;
     font-size: 20px;
     margin-left:10px;
 }
.searchInput{
    width:250px;
    height:25px;
    margin-top:5px;
    margin-left:56px;
     border: 1px solid

}
.button{
    width:50px;
    height:30px;
    margin-left:5px;
      color: #26a2ff;
    
      
}
.movie-tran-enter,.movie-tran-leave-to{
    transform: translateX(100%);
    opacity: 0;
}
.movie-tran-enter-to,.movie-tran-leave{
    
    transform: translateX(100%)
}
.movie-tran-enter-active,.movie-tran-leave{
    transition: all 0.3s ease
}

</style>