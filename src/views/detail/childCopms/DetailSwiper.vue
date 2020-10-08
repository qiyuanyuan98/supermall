<template>
  <swiper class="banner">
    <swiper-item v-for="item in topImages">
      <a :href="item">
        <img :src="item">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper/index';

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scope>
.banner {
  height: 300px;
}
</style>
