<template>
  <div class="app-container">
    <!-- 顶部放Header区域 -->
    <!-- 该组件是mint UI 中的，所以要在main.js中按需导入 -->
   <mt-header fixed title="Vuey移动端项目练习"></mt-header>


    <!-- 中间放 路由 router-view 区域 -->
	<!-- 承载路由内容区--> 
	<!-- 切换时中间区域在变换，所以加动画效果，用transition 包裹起来 -->
    <!-- 给transition 加　mode='out-in' 属性，滚动的效果慢，有等待的效果，底部还卡到滚动条　不好，
	　　另一种处理方式：overflow-x : hidden
	-->
     <transition >
		 <router-view></router-view>
	 </transition>


    <!-- 底部放 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
		<!--将a链接改成路由，并指定跳转的地址(href->to)  -->
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
   
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
   .app-container{
     padding-top: 40px;
	 overflow-x: hidden;
   }

.v-enter{
	opacity: 0;
	transform: translateX(100%);
	position: absolute;
}
.vleave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
 .v-enter-active,.v-leave-active{
	 transition: all 0.5s ease;
 }
</style>
