<template>
  <div class="cart-list-wrap">
    <scroll
      class="content"
      :pull-up-load="true"
    >
      <cart-list-item :cartList="carList"></cart-list-item>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from '../../../components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  created () { },
  mounted () { },
  methods: {},
  computed: {
    ...mapGetters(['carList'])
  },
  components: {
    CartListItem,
    Scroll
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 79vh;
  overflow: hidden;
}
</style>
