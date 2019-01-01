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
// Vue.http.options.root='https://www.tcjfh.cn';
// Vue.http.options.root='http://localhost';
Vue.http.options.root='https://localhost';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css';

import { Lazyload } from 'mint-ui';
import { Search } from 'mint-ui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.component(Search.name, Search);
Vue.use(Lazyload);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//导入自己的router.js
import router from './router.js'
import global_ from './components/Global.vue'
Vue.prototype.global_ = global_;

Vue.component(Header.name, Header);

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})