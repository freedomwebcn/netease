import Vue from 'vue'
import Axios from "axios"
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import "@/mock/mockServer"
import {
  Style
} from 'cube-ui'
import {
  Popup
} from 'vant';

Vue.use(Popup);


Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')