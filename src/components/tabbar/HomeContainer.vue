<template>
  <div>
      <!--轮播图区域  -->
       <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            <mt-swipe-item>4</mt-swipe-item> 


      <!-- 动态从服务器里获取图片的 -->
        <!-- <mt-swipe-item v-for='item in lunbotuList' :key='item.url'> -->
            <!-- 要绑定src 属性，不然会把后面的值当字符串输出 -->
            <!-- <img :src="item.img" alt="">
        </mt-swipe-item> -->
      </mt-swipe> 


      <!-- 九宫格 到六宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                     <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                        </a>
                    </li>
		           
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                          <a href="#">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                          </a>
                     </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
                            </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div>
                        </a>
                    </li>
		        </ul>
     
  </div>
</template>

<script>
//就是个弹窗
import {Toast} from 'mint-ui'

export default {
    //获取轮播图数据
    data(){
        return {
            lunbotuList:[] //保存轮播图的数组 
        };
    },

    //组件一创建就加载轮播图
    // created(){
    //     this.getLunbotu();
    // },
    methods:{
        // getLunbotu(){
        //     this.$http.get("http://vue.studyit.io/api/getlunbo").then(res=>{
        //         // console.log(res.body);
        //         if(res.body.status ===0){
        //          this.lunbotuList = res.body.message;
        //         }
        //         else{
        //             //失败的
        //             Toast('加载轮播图失败。。。。');
        //         }
        //     });
        // }
    }

}
</script>

<style lang="scss" scoped>
  .mint-swipe{
      height: 200px;
      .mint-swipe-item{
        &:nth-child(1) {
            background-color: red;
        } 
         &:nth-child(2) {
            background-color:green;
        } 
         &:nth-child(3) {
            background-color:cyan;
        } 
      }
      img{
          width:100%;
          height:100%;
      }
  }

.mui-grid-view.mui-grid-9 {
    background-color: #ffff;
	border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border:none;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
</style>