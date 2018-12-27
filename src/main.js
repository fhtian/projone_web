// 入口文件
console.log('OK')

import Vue from 'vue';
//导入路由的包
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);

import Vueresource from 'vue-resource';

Vue.use(Vueresource);
//设置请求根路径
// Vue.http.options.root='http://www.tcjfh.cn';
Vue.http.options.root='http://localhost';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css';

import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);

//导入自己的router.js
import router from './router.js'


Vue.component(Header.name, Header);

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})