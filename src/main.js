import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'lib-flexible';
import "./style/base.less";


import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
