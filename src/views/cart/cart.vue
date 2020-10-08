<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="navcart">
      <div slot="center">购物车({{length}}) </div>
    </nav-bar>
    <!-- 商品展示 -->
    <cart-list></cart-list>
    <!-- 商品汇总 -->
    <cart-bot-bar></cart-bot-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childCopms/CartList'
import CartBotBar from './childCopms/CartBotBar'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    };
  },
  created () { },
  mounted () { },
  methods: {},
  computed: {
    ...mapGetters({
      length: 'cartLenght'
    })

  },
  components: {
    NavBar,
    CartList,
    CartBotBar
  },
};
</script>

<style>
.navcart {
  max-width: 750px;
  background-color: var(--color-text);
  color: #fff;
}
</style>
