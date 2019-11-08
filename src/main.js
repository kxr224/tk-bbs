import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.use(ElementUI);
// 按需引入vant-ui
// import 'vant/lib/index.css';
// import { Field,Cell, CellGroup } from 'vant';
// Vue.use(Cell).use(CellGroup).use(Field);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
