<template>
  <div class="cart-bot-bar flex">
    <div><input
        type="checkbox"
        class="check"
        id="check"
        :checked="ischecked"
        @click="checkclick"
      >&ensp;<label for="check"> 全部</label> </div>
    <div>合计：{{totalPrice}}</div>
    <div
      class="pay-money"
      @click="payclick"
    >去结算{{checkLength}}</div>
  </div>
</template>

<script>
export default {
  name: 'CartBotBar',
  computed: {
    totalPrice () {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.Price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      return '(' + this.$store.state.cartList.filter(item => item.checked).length + ')';
    },
    ischecked () {
      if (this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.find(item => !item.checked))
    }
  },
  methods: {
    checkclick () {
      if (this.ischecked)
      {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        });
      } else
      {
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        });
      }
    },
    payclick () {
      this.$toast.show('请选择商品', 1500)
    }
  },


}
</script>

<style lang="scss" scoped="scoped">
* {
  margin: 0;
  padding: 0;
}
.cart-bot-bar {
  width: 100%;
  max-width: 750px;
  margin: auto;
  display: flex;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 40px;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
  .check {
    width: 18px;
    height: 18px;
    overflow: hidden;
    border-radius: 100%;
    vertical-align: bottom;
    border: 1px solid #ececec;
  }
  .check:checked {
    border: 1px solid var(----color-high-text);
    background: url(../../../assets/img/detail/check_active.png) no-repeat
      center;
    background-size: cover;
  }
  .pay-money {
    color: #fff;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: var(--color-text);
  }
}
</style>
