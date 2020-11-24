<template>
  <div
    class="shop-info"
    v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-left middle-item">
        <div class="sells">
          <div class="sells-count">{{shopInfo.sells | sellsFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods">
          <div class="goods-count">{{shopInfo.goods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-right middle-item">
        <table>
          <tr
            v-for="(item, index) in shopInfo.score"
            :key="index">
            <td>{{item.name}}</td>
            <td
              class="score"
              :class="{'better-score': item.isBetter}">
              {{item.score}}
            </td>
            <td
              class="better"
              :class="{'better-text': item.isBetter}">
              {{item.isBetter ? '高' : '低'}}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shopInfo: Object
    },
    filters: {
      sellsFilter(value) {
        if (value < 10000) return value
        return (value / 10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
    .shop-top {
      display: flex;
      line-height: 45px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, .1);
      }
      span {
        margin-left: 10px;
      }
    }
    .shop-middle {
      margin-top: 15px;
      display: flex;
      align-items: center;
      color: #333;
      .middle-item {
        flex: 1;
      }
      .middle-left {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        border-right: 1px solid rgba(0, 0, 0, .1);
      }
      .sells-count, .goods-count {
        font-size: 18px;
      }
      .sells-text, .goods-text {
        margin-top: 10px;
        font-size: 14px;
      }
      .middle-right {
        font-size: 13px;
        table {
          width: 120px;
          margin-left: 30px;
          td {
            padding: 5px 0;
            &.score {
              color: #5ea732;
            }
            &.better-score {
              color: #f13e3a;
            }
            &.better {
              color: #fff;
              background: #5ea732;
              text-align: center;
            }
            &.better-text {
              background: #f13e3a;
            }
          }
        }
      }
    }
    .shop-bottom {
      margin-top: 10px;
      text-align: center;
      .enter-shop {
        display: inline-block;
        font-size: 14px;
        background-color: #f2f5f8;
        width: 150px;
        height: 30px;
        line-height: 30px;
        border-radius: 10px;
      }
    }
  }
</style>