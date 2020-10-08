<template>
  <div
    class="wrapper"
    ref="wrapper"
  >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//引入Bscroll
import Bscroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      scroll: null,
    };
  },
  mounted () {
    //创建Bscroll
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //实时监听
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    //监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    //调用在刷新
    refresh () {
      this.scroll && this.scroll.refresh();
    },
    //调用返回顶部
    scrollTo (x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //上拉加载完成
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp();
    },
    //记录当前滚动的y值
    getScrollY () {
      return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>

<style scoped>
</style>
