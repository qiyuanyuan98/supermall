<template>
  <nav-bar>
    <div
      slot="left"
      class="leftnavbar"
      @click="leftitem"
    >
      <img
        src="../../../assets/img/箭头-左.png"
        alt=""
      >
    </div>
    <div
      slot="center"
      class="title"
    >
      <div
        v-for="(item,index) in titles"
        class="titleitem"
        @click="itemClick(index)"
        :class="{active:index ===currentIndex}"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../../components/common/navbar/NavBar'
export default {
  data () {
    return {
      currentIndex: 0,
      titles: ['商品', '参数', '评论', '推荐'],
    }
  },
  created () { },
  mounted () { },
  methods: {
    //导航点击事件
    itemClick (index) {
      this.currentIndex = index
      this.$emit("itemClick", index)
    },
    //导航左侧点击返回
    leftitem () {
      this.$router.back()
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
}
.titleitem {
  flex: 1;
}
.active {
  color: red;
}
.leftnavbar img {
  width: 55%;
  margin-top: 6px;
}
</style>
