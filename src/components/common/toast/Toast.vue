<template>
  <div
    class="toast"
    v-show="isShow"
  >
    <div>{{message}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message, duration) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  },
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: var(--color-text);
  border-radius: 10px;
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
</style>
