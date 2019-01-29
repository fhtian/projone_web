// 入口文件
console.log('OK')

import Vue from 'vue';
//导入路由的包
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);

import Vueresource from 'vue-resource';

Vue.use(Vueresource);
Vue.http.options.emulateJSON = true;//解决post请求变成option的请求问题
// Vue.http.options.headers = { 
//     "Content-Type": "application/json"
// }

import Axios from 'axios'
// import VueAxios from 'vue-axios'
// import Qs from 'qs';
// Vue.use(VueAxios, Axios)
// axios.defaults.baseURL="https://localhost:40000/"
Vue.prototype.Axios = Axios;    //全局注册，使用方法为:this.$axios
// Vue.prototype.qs = Qs;           //全局注册，使用方法为:this.qs


//设置请求根路径
Vue.http.options.root='https://www.tcjfh.cn';
// Vue.http.options.root='http://localhost:8080';
// Vue.http.options.root='https://localhost:40000';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// import VueClipboard from 'vue-clipboard2'
// VueClipboard.config.autoSetContainer = true
// Vue.use(VueClipboard)

import VueClipboard from 'vue-clipboard2';
//注册到vue原型上
// Vue.prototype.clipboard = VueClipboard;
Vue.use(VueClipboard)


// Vue.directive('focus', {
//     // 当被绑定的元素插入到 DOM 中时……
//     inserted: function (el) {
//       // 聚焦元素
//       el.focus()
//     }
//   }) 



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
import './lib/css/index.css';

Vue.component(Header.name, Header);

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})