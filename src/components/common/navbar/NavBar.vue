<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "NavBar",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style >
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  max-width: 750px;
  margin: auto;
}
.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>
