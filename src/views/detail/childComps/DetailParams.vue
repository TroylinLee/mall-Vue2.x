<template>
  <div class="goods-params" v-if="Object.keys(goodsParams).length !== 0">
    <table class="sizes-info"
           v-for="(table, index) in goodsParams.sizes"
           :key="index">
      <tr v-for="(tr, indey) in table"
          :key="indey">
        <td v-for="(td, indez) in tr"
            :key="indez">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="params-info">
      <tr v-for="(item, index) in goodsParams.set"
          :key="index">
        <td class="set-key">{{item.key}}</td>
        <td class="set-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="img-info" v-show="goodsParams.image.length !== 0">
      <img :src="goodsParams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParams',
    props: {
      goodsParams: Object
    }
  }
</script>

<style lang="scss" scoped>
  .goods-params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    table {
      width: 100%;
      border-collapse: collapse;
      tr {
        height: 42px;
        td {
          border-bottom: 1px solid rgba(100, 100, 100, .1);
        }
      }
    }
    .params-info {
      border-top: 1px solid rgba(0, 0, 0, .1);
      .set-key {
        width: 95px;
      }
      .set-value {
        color: #eb4868;
      }
    }
  }
</style>