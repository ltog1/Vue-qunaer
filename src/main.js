import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/iconfont/iconfont.css'
import './assets/style/reset.css'
import './assets/style/border.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
