<template>
  <div class="detail">

    <detail-tab-bar
      class="tabbar"
      @itemClick="itemClick"
      ref="tabbar"
    ></detail-tab-bar>

    <scroll
      class="content"
      ref="scroll"
      :pull-up-load="true"
      :probe-type=3
      @scroll="contenScroll"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info
        :goods-info="detailInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="params"
        :param-info="itemParams"
      ></detail-param-info>
      <comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></comment-info>
      <goods-list
        ref="recomment"
        :goods="recommends"
      ></goods-list>
    </scroll>

    <detail-bot-bar @addCart="addToCart"></detail-bot-bar>

    <!-- 返回顶部 -->
    <back-top
      class="backtop"
      @backtopclick="backtopclick"
      v-show="isShow"
    ></back-top>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailTabBar from './childCopms/DetailTabBar'
import DetailSwiper from './childCopms/DetailSwiper'
import DetailBaseInfo from './childCopms/DetailBaseInfo'
import DetailShopInfo from './childCopms/DetailShopInfo'
import DetailGoodsInfo from './childCopms/DetailGoodsInfo'
import DetailParamInfo from './childCopms/DetailParamInfo'
import commentInfo from './childCopms/DetailCommentInfo'
import DetailBotBar from '../detail/childCopms/DetailBotBar'
import BackTop from "../../components/content/backtop/BackTop";

import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from "../../components/common/scroll/Scroll"
import { getDetail, Goods, Shop, getRecommend } from '../../network/detail'

import { debounce } from '../../common/utils'
import {
  itemListenerMinxin
} from "../../common/mixin";
export default {
  name: "Detail",
  data () {
    return {
      iid: null,
      topImages: [],
      data: null,
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getthemeTopY: null,
      positionY: null,
      currentIndex: null,
      isShow: false,
    }
  },
  created () {
    //获取 iid
    this.iid = this.$route.params.iid
    //请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      //1.获取数据
      const data = res.result
      //2.获取顶部的轮播图数据      
      this.topImages = data.itemInfo.topImages
      //3.创造商品对象
      this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //4.店铺信息展示
      this.shopInfo = new Shop(data.shopInfo)
      //5.取出详情信息
      this.detailInfo = data.detailInfo
      //6.参数信息
      this.itemParams = data.itemParams
      //7.取出评论信息
      if (data.rate.cRate !== 0)
      {
        this.commentInfo = data.rate.list[0]
      }
    })
    //请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
    //获取导航栏跳转的Y值
    this.getthemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recomment.$el.offsetTop - 44)
      this.themeTopYs.push(Number.MAX_VALUE)
    })
  },
  mixins: [itemListenerMinxin],
  mounted () {
  },
  destroyed () {
    //1.imgisload 监听事件销毁
    this.$bus.$off("imgisload", this.itemImgListener);
  },
  methods: {
    //1.监听图片加载刷新
    imgLoad () {
      this.$refs.scroll.refresh()
      this.getthemeTopY()
    },
    //2.点击导航跳转
    itemClick (index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    //3.监听事件滚动时 导航栏切换currentIndex
    contenScroll (position) {
      //1.判断导航的切换
      this.positionY = -position.y
      for (let i = 0; i < this.themeTopYs.length - 1; i++)
      {
        if (this.currentIndex !== i && (this.positionY >= this.themeTopYs[i] && this.positionY < this.themeTopYs[i + 1]))
        {
          this.currentIndex = i
          this.$refs.tabbar.currentIndex = i
        }
      }

      //2.监听scroll 实现返回顶部 的隐藏和显示
      this.isShow = -position.y > 1000 ? true : false;

    },
    //4. 版回顶部的点击事件
    backtopclick () {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //5.购物车点击
    addToCart () {
      //1.获取购物车需要展示的信息
      const project = {}
      project.images = this.topImages[0];
      project.title = this.goodsInfo.title;
      project.desc = this.goodsInfo.desc;
      project.Price = this.goodsInfo.lowPrice;
      project.iid = this.iid;
      //2.添加商品
      this.$store.dispatch('addCar', project).then(res => {

        // this.$toast.show
        this.$toast.show(res, 1500)
      })


    }
  },
  components: {
    DetailTabBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    commentInfo,
    DetailBotBar,
    BackTop,

    Scroll,
    GoodsList
  }
}
</script>

<style lang="scss" scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 9;
}
.tabbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: 93vh;
  background-color: #fff;
}
</style>
