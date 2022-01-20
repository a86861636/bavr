import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
//多语言
import i18n from '@/locales/index.js'
//路由
import router from "./router.js";
//vuex
import store from './store.js';
//swiper
import 'swiper/css/swiper.css';

import "babel-polyfill";

new Vue({
    render: h => h(App),
    i18n,
    router,
    store,
    // mounted() {
    //   document.dispatchEvent(new Event('render-event'));
    // }
}).$mount('#app');
