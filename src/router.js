import VueRouter from 'vue-router'



//引入tabber 路由
import HomeContainer    from './components/tabbar/HomeContainer.vue'
import MemberContainer  from './components/tabbar/MemberContainer.vue'
import SearchContainer  from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  //配置路由表
  routes: [
    {
      path:'/',
      redirect:'/home',
    },
    {
      path:'/home',
      component:HomeContainer
    },
    {
      path: '/member',
      component:MemberContainer
    },
    {
      path: '/search',
      component:SearchContainer
    },
    {
      path: '/shopcar',
      component:ShopcarContainer
    }
  ],
  //设置激活样式
  linkActiveClass:'mui-active',//覆盖默认的路由高亮类，默认的类叫做rouer-link-active
})

// 把路由对象暴露出去
export default router