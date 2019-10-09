<template>
    <div id="app">
    
    
    
    
    
        <mt-tabbar v-model="selected">
    
            <mt-tab-item id="index">
    
    
    
                首页
    
            </mt-tab-item>
    
            <router-link to="/publishMsg">
    
                <div id="add">
    
                    +
    
                </div>
    
            </router-link>
    
            <mt-tab-item id="login">
    
    
    
                我的
    
            </mt-tab-item>
    
    
    
        </mt-tabbar>
    
    
    
        <router-view/>
    
    </div>
</template>
<script>
import index from '@/views/index.vue'
import mine from '@/views/mine.vue'
export default {
    data() {
        return {
            selected: "index"
        }
    },
    created() {

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
        },

    }
}
</script>

<style lang="less" scoped>
::v-deep .mt-tabbar {
    height: 450px;
}

::v-deep .mint-tab-item-label {
    color: inherit;
    font-size: 15px;
    line-height: 3;
}

#add {
    font-size: 40px;
    background-color: wheat;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 46px;
}
.router-link-exact-active{
   text-decoration: none
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
}

</style>
