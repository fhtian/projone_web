import VueRouter from 'vue-router'

//导入对应的路由组件
import Home from './components/tabbar/Hom.vue';
import Msg from './components/tabbar/Msg.vue';
import Self from './components/tabbar/Self.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home',component:Home},
    {path:'/msg',component:Msg},
    {path:'/self',component:Self},
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router