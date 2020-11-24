<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length !== 0">
    <div class="base-title">{{baseInfo.title}}</div>
    <div class="base-price">
      <span class="price">{{baseInfo.price}}</span>
      <span class="old-price">{{baseInfo.oldPrice}}</span>
      <span
        class="discount"
        :style="{background: baseInfo.discountBgc}"
        >
        {{baseInfo.discount}}
      </span>
    </div>
    <div class="base-other">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
    </div>
    <div class="base-services">
      <div v-for="index in baseInfo.services.length-1"
           :key="index">
        <span>
          <img
          :src="baseInfo.services[index-1].icon"
          alt=""
          v-show="showIcon(baseInfo.services[index-1].icon)"
          >
          {{baseInfo.services[index-1].name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      baseInfo: Object
    },
    methods: {
      showIcon(icon) {
        return icon ? icon : ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
    .base-title {
      color: #222;
    }
    .base-price {
      padding: 15px 0;
      .price {
        font-size: 24px;
        color: var(--color-high-text);
      }
      .old-price {
        font-size: 12px;
        margin-left: 5px;
        text-decoration: line-through;
      }
      .discount {
        font-size: 12px;
        color: #fff;
        padding: 2px 5px;
        border-radius: 8px;
        margin-left: 5px;
        position: relative;
        top: -5px;
      }
    }
    .base-other {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      line-height: 30px;
      border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    .base-services {
      display: flex;
      justify-content: space-between;
      line-height: 60px;
      width: 100%;
      font-size: 12px;
      color: #333;
      text-align: center;
      img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
      }
    }
  }
</style>