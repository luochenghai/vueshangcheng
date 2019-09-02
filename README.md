## 这是一个移动端的基于vue的项目
## 主流开源协议之间的有何异同？（https://blog.csdn.net/xiaodaima2016/article/details/83645854）
## 制作首页　App 组件
1. 完成Header区域，使用的是Mint-ui中的Header组件
2. 制作底部Tabbar 区域，使用的是MUI的Tabbar.html
  + 在制作 购物车 小图标的时候，操作会多一点：
  + 先把扩展图标的css样式，拷贝到 项目中的lib 下的css文件中
  + 拷贝扩展字体库ttf文件到fonts文件中
  + 为购物车 小图标 添加如下样式：mui-icon mui-icon-extra mui-icon-extra-cart
3.  要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link


## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件


## 制作首页轮播图


## 加载首页轮播图数据
1. 获取数据,如何获取呢？使用vue-resourse,要装下该插件
2. 使用vue-resource 的 this.$http.get 获取数据
3. 获取数据后，保存到 data 身上
4. 使用 v-for循环 每个item 项

## 九宫格改造
1. 切换时中间区域在变换，所以加动画效果，用transition 包裹起来
2. 给transition 加　mode='out-in' 属性，滚动的效果慢，有等待的效果，底部还卡到滚动条　不好
3. 另一种处理方式：overflow-x : hidden 进行隐藏
4. v-enter 和 vleave-to分开加样式，解决向左滑动后，又向右回到100%处
5. 遗留问题：v-enter 和 vleave-to 加了position: absolute; 后，还是会上漂