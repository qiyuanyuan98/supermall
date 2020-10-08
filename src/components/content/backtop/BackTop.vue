<template>
  <div
    class="back-top"
    @click="backtopclick"
  >
    <img
      src="../../../assets/img/back-top.png"
      alt=""
    />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {};
  },
  created () { },
  mounted () { },
  methods: {
    backtopclick () {
      this.$emit('backtopclick')
    }
  },
  components: {},
};
</script>

<style>
</style>
