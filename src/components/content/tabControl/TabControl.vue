<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="tabclick(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script >
export default {
  name: "TabControl",
  data () {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  created () { },
  mounted () { },
  methods: {
    tabclick (index) {
      this.currentIndex = index;
      this.$emit("tabclick", index);
    },
  },
  components: {},
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: #ff699c;
}
.active span {
  border-bottom: 1px solid #ff699c;
}
</style>
