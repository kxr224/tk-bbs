<template>
  <div id="app">
    <mt-tabbar id="tabBar" v-model="selected">
      <mt-tab-item id="index" class="el-icon-s-home" @click.native.capture="goIndex"></mt-tab-item>

      <router-link to="/publishMsg">
        <div id="add">+</div>
      </router-link>

      <mt-tab-item id="login" class="el-icon-user-solid" @click.native.capture="goMine"></mt-tab-item>
    </mt-tabbar>

    <router-view />
  </div>
</template>
<script>
import { checkIsLogin } from "./services/mine";
export default {
  data() {
    return {
      selected: "index"
    };
  },
  methods: {
      goIndex(){
          this.$router.push({path:'/index/recomend'})
      },
      goMine(){
          this.$router.push({path:'/mine'})
      }
  },
  created() {
    checkIsLogin().then(res => {
      if(res.code==0){
          this.$store.commit({
            type: "loginsucess",
            user: res.data
          })
        
      }
       else{
             this.$store.commit({
                 type:'loginfail',
                 
             })
         }
      // 如果登陆了怎么办？设置vuex里的状态，设置isLogin=true ,设置user字段内容
      // 如果未登陆？设置vuex里的状态，设置isLogin=false
    //   if (res.code == 403) {
    //     this.$router.push({ path: "/login" });
    //   }
    });

    if (this.$route.path == "/index") {
      this.selected = "index";
    } else if (this.$route.path == "/login") {
      this.selected = "login";
    }
  },
  watch: {
    selected(newval) {
      if (newval == "index" && this.$route.path != "/index") {
        this.$router.push({ path: "/index" });
      } else if (newval == "login" && this.$route.path != "/mine") {
        this.$router.push({ path: "/mine" });
      }
    }
  }
};
</script>

<style lang="less" scoped>
#tabBar {
  position: fixed;
  bottom: 0px;
}
::v-deep .mt-tabbar {
  height: 450px;
}

::v-deep .mint-tab-item-label {
  color: inherit;
  font-size: 15px;
  line-height: 3;
}

#add {
  font-size: 43px;
  background-color: #26a2ff;
  border-radius: 50%;
  width: 58.8px;
  height: 58.8px;
  text-align: center;
  line-height: 53px;
  color: white;
}
.router-link-exact-active {
  text-decoration: none;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: none;
  background:#26a2ff;
}
.mint-tabbar > .mint-tab-item.is-selected{
background-color: #eaeaea;
    color: #26a2ff;
    padding: 14px 0;
    font-size: 30px;
}
.mint-tab-item {
    display: block;
    padding: 7px 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 30px;
    padding: 14px 0;
    text-decoration: none;
}
</style>
