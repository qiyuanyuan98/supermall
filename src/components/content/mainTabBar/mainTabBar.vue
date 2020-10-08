<template>
  <tab-bar>
    <tab-bar-item
      path="/Home"
      activeColor=""
    >
      <template v-slot:item-icon>
        <img
          src="@/assets/img/tabbar/首页.png"
          alt=""
        />
      </template>
      <template v-slot:item-icon-active>
        <img
          src="@/assets/img/tabbar/首页-active.png"
          alt=""
        />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item
      path="/Category"
      activeColor=""
    >
      <template v-slot:item-icon>
        <img
          src="@/assets/img/tabbar/分类.png"
          alt=""
        />
      </template>
      <template v-slot:item-icon-active>
        <img
          src="@/assets/img/tabbar/分类-active.png"
          alt=""
        />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item
      path="/Cart"
      activeColor=""
    >
      <template v-slot:item-icon>
        <img
          src="@/assets/img/tabbar/购物车.png"
          alt=""
        />
      </template>
      <template v-slot:item-icon-active>
        <img
          src="@/assets/img/tabbar/购物车-active.png"
          alt=""
        />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item
      path="/Profile"
      activeColor=""
    >
      <template v-slot:item-icon>
        <img
          src="@/assets/img/tabbar/我的.png"
          alt=""
        />
      </template>
      <template v-slot:item-icon-active>
        <img
          src="@/assets/img/tabbar/我的-active.png"
          alt=""
        />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script type="text/ecmascript-6">
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "mainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
