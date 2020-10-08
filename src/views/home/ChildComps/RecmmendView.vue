<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style >
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 16px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  width: 25%;
}
.recommend-item img {
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
}
</style>
