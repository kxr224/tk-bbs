<template>
  <div id="indexBox">
    <router-link to="/search">
      <input type="text" class="searchInput" placeholder="搜索一下" />
    </router-link>
    <el-button style="color:#eee" id="el-button" icon="el-icon-search" circle></el-button>
    <tablist></tablist>
    <transition name="movie-tran" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import tablist from "@/components/tab.vue";
export default {
  components: {
    tablist
  }
};
</script>

<style lang="less">
#indexBox {
  text-align: center;
  height: calc(100vh - 58.8px);
  ::-webkit-input-placeholder {
    text-align: center;
  }
}
#el-button {
  vertical-align: bottom;
  padding: 0;
  border: 0;
  font-size: 25px;
  margin-left: 10px;
}
.searchInput {
  width: 70%;
  border-radius: 20px;
  height: 25px;
  margin-top: 5px;
  background-color: #eee;
  // margin-left: 10%;
  border: 1px solid #eee;
}

.button {
  width: 50px;
  height: 30px;
  margin-left: 5px;
  color: #26a2ff;
}
.movie-tran-enter,
.movie-tran-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.movie-tran-enter-to,
.movie-tran-leave {
  transform: translateX(100%);
}
.movie-tran-enter-active,
.movie-tran-leave {
  transition: all 0.3s ease;
}
</style>