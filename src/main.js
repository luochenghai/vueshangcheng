// 入口文件
import Vue from 'vue'
//1.1导入路由包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)

//2.1导入 vue-resource (获取数据的，在home 组件中获取轮播图数据)
import VueResource from 'vue-resource'
//2.2 安装使用
Vue.use(VueResource)

//导入Mui 的css样式
import './lib/mui/css/mui.min.css'
//引入扩展图标的css样式
import './lib/mui/css/icons-extra.css'
    
//按需导入 Mint-UI中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入Mint-U轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//1.3导入自己的 router.js 路由模块（所有的路由都集中放在这个文件中，上次孙鹏老师的改造案例也是这样的）
import router from './router.js'



//导入App 根组件
 import app from './App.vue'


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    //1.4挂载路由到 VM 实例上
    router
})