<template>
  <div class="goods">
    <goods-list-item
      class="goods-item"
      v-for="item in goods"
      :goodsItem="item"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default () {
        return [];
      },
    },
  },
};
</script>

<style >
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
