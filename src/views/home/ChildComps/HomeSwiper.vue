<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperload" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script type="text/ecmascript-6">
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
  data() {
    return {
      isflag: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    swiperload() {
      if (!this.isflag) {
        this.$bus.$emit("swiperloadok");
        this.isflag = true;
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>
