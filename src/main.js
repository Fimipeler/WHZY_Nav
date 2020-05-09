import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import touch from "@/util/index.js";
import "./stylus/main.styl";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import less from "less";

import axios from "axios";
// 引用loading组件
import loading from "@/views/common/loading/loading.js";
// 引入swiper
import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
import "swiper/css/swiper.css";

// player
import VideoPlayer from "vue-video-player";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(touch);
Vue.use(ViewUI);
Vue.use(loading);
Vue.use(ElementUI);
Vue.use(less);

Vue.use(VideoPlayer);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
/* 配置请求http */
axios.defaults.baseURL = "http://47.104.238.83";
Vue.prototype.$axios = axios;

const vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// window.addEventListener('load', () => {
//     if (vue.$route.path !== '/') { // 首页
//         vue.$router.replace('/') // 切换到首页
//     }
// })
