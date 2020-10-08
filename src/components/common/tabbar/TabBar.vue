<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "TabBar",
  data () {
    return {};
  },
  created () { },
  mounted () { },
  methods: {},
  components: {},
};
</script>

<style >
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  max-width: 750px;
  margin: auto;
  margin-bottom: -1px;
}
</style>
