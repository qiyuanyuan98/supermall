<template>
  <div
    class="goods-item"
    @click="itemClick"
  >
    <img
      :src="showImage"
      alt=""
      @load="isLoad"
    />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {};
      },
    },
  },
  computed: {
    showImage () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    isLoad () {
      this.$bus.$emit("imgisload");
    },
    itemClick () {
      //发送某个商品的iid
      this.$router.push('/Detail/' + this.goodsItem.iid)
    }
  },

};
</script>

<style >
.goods-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 8px;
}
.goods-info .price {
  color: red;
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/home/collect_icon.png") 0 0/14px 14px;
}
</style>
