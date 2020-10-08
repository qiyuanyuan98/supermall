<template>
  <div
    v-if="Object.keys(paramInfo).length !== 0"
    class="paraminfo"
  >
    <table
      v-for="(table,index) in paramInfo.rule.tables"
      class="info-size"
      :key="index"
    >
      <tr
        v-for="(tr,indey) in table"
        :key="indey"
        class=""
      >
        <td
          v-for="(td,indez) in tr"
          :key="indez"
        >
          {{td}}
        </td>
      </tr>
    </table>

    <table class="info-param">
      <tr
        class="infos"
        v-for="(info, index) in paramInfo.info.set"
      >
        <td class="info-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>

    <div
      class="info-img"
      v-if="paramInfo.info.images"
    >
      <img
        :src="paramInfo.info.images[0]"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info-size {
  width: 100%;
  text-align: center;
  border-top: 5px solid #eee;

  tr {
    height: 40px;
    border-bottom: 1px solid #eee;
  }
}
.info-param {
  width: 100%;
  text-align: center;
  border-top: 5px solid #eee;

  .infos {
    height: 40px;
    border-bottom: 1px solid #eee;
  }
  .info-value:nth-child(1) {
    width: 20%;
  }
  .info-value:nth-child(2) {
    width: 80%;
    color: rgb(211, 35, 73);
  }
}
.info-img img {
  width: 100%;
}
</style>
