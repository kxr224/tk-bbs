<template>
    <div>
<mt-header title="搜索帖子或主题">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  </mt-header>

      <input type="text" class="search">
      <mt-button type="primary" size="small" >搜索</mt-button>
      <div class="history">
          <ul>
              <li>搜索历史</li>
               
          </ul>
       </div>
       <div class="list">
           <ul>
               <li></li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    
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

</style>