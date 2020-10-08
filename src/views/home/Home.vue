<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      @tabclick="tabclick"
      :titles="['流行', '新款', '精选']"
      ref="tabcontrol1"
      v-show="fixed"
    ></tab-control>
    <!-- 滚动事件 -->
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contenScroll"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recmmend-view :recommends="recommends"></recmmend-view>
      <feater-views></feater-views>
      <!-- 选项卡切 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrol2"
        v-show="!fixed"
      ></tab-control>
      <!-- 商品展示 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 返回顶部 -->
    <back-top
      class="backtop"
      @backtopclick="backtopclick"
      v-show="isShow"
    ></back-top>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import Scroll from "../../components/common/scroll/Scroll";

import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backtop/BackTop";

import HomeSwiper from "../../views/home/ChildComps/HomeSwiper";
import RecmmendView from "../../views/home/ChildComps/RecmmendView";
import FeaterViews from "../../views/home/ChildComps/FeatureViews";
import {
  getHomeMultidata,
  getHomeGoods
} from "../../network/home";

import {
  itemListenerMinxin
} from "../../common/mixin";

export default {
  name: "home",
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        },
      },
      currentType: "pop",
      isShow: false,
      fixed: false,
      tabOffSetTop: 0,
      saveY: 0,
    };
  },
  created () {
    //1.请求首页轮播图数据
    this.getHomeMultidata();
    //2.请求首页商品展示
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins: [itemListenerMinxin],
  mounted () {
    // //监听GoodsListItem发出的事件
    // const refresh = debounce(this.$refs.scroll.refresh);
    // this.itemImgListener = () => { refresh() }
    // this.$bus.$on("imgisload", this.itemImgListener);

    //TabControl的显示隐藏
    this.$bus.$on("swiperloadok", () => {
      this.tabOffSetTop = this.$refs.tabcontrol2.$el.offsetTop;
    })

  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    //封装created中的请求首页多个数据
    getHomeMultidata () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //封装created中的请求首页商品展示
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //解决上拉加载更多只能调用一次的方法
        this.$refs.scroll.finishPullUp();
      });
    },
    //事件监听方法--选项卡切换
    tabclick (index) {
      // console.log(index);
      switch (index)
      {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    //版回顶部的点击事件
    backtopclick () {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //监听响应顶部点击的隐藏和显示
    contenScroll (position) {
      // console.log(position);
      //1.判断backTop是否显示
      this.isShow = -position.y > 1000 ? true : false;
      //2.决定tabControl是否吸顶
      this.fixed = -position.y > this.tabOffSetTop - 44 ? true : false;
    },
    //上拉加载更多方法
    loadmore () {
      this.getHomeGoods(this.currentType);
    },


  },

  //销毁  解决：keep-alive
  destroyed () {
    // console.log("destroyed");
  },
  //当前页面-活跃
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  //当前页面-非活跃
  deactivated () {
    //1.保存离开时的的页面位置
    this.saveY = this.$refs.scroll.getScrollY()
    //2.imgisload 监听事件销毁
    this.$bus.$off("imgisload", this.itemImgListener);
  },

  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecmmendView,
    FeaterViews,
    Scroll,
    BackTop,
  },
};
</script>
<style scope>
.home-nav {
  background-color: var(--color-text);
  color: aliceblue;
}

.wrapper {
  height: 93vh;
  overflow: hidden;
}

.backtop {
  position: fixed;
  right: 10px;
  bottom: 55px;
}

.backtop img {
  width: 43px;
  height: 43px;
}
</style>