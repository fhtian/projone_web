import VueRouter from 'vue-router'

//导入对应的路由组件
import Home from './components/tabbar/Hom.vue';
import Msg from './components/tabbar/Msg.vue';
import Self from './components/tabbar/Self.vue';
import home_article from './components/home/article.vue';
import articleInfo from './components/home/articleInfo.vue';
import search from './components/home/search.vue';
import pictures from './components/home/pictures.vue';
import girlsSkirt from './components/home/shoppingList.vue';
import computer from './components/home/shoppingList.vue';
import makeup from './components/home/shoppingList.vue';
import underwear from './components/home/shoppingList.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home/underwear',component:underwear},
    {path:'/home/makeup',component:makeup},
    {path:'/home/computer',component:computer},
    {path:'/home/girlsSkirt',component:girlsSkirt},
    {path:'/home/article',component:home_article},
    {path:'/',component:Home,name:'Home'},
    {path:'/home',component:Home},
    {path:'/msg',component:Msg},
    {path:'/self',component:Self},
    {path:'/article/:articleSort/:id',component:articleInfo},
    {path:'/home/search',component:search},
    {path:'/home/pictures',component:pictures}
  ],
  linkActiveClass:'mui-active'// 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router