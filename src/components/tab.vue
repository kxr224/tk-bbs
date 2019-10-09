<template>
    <div>
 <ul class="tab-list">
  <li>
      <router-link to="/index/recomend">
      推荐
      </router-link>
  </li>
  <li>
      <router-link to="/index/theme">
      主题
      </router-link>
  </li>

 </ul>

  
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">

       .tab-list {
  display: flex;
  justify-content: space-around;
      
 
}
ul>li{
    list-style:none;
    font-size:18px;
  
}
a:-webkit-any-link {
     color: #26a2ff;
    cursor: pointer;
    text-decoration: none
}
.router-link-active{
  border-bottom:2px solid #26a2ff
}


</style>