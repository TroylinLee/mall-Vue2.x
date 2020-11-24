<template>
  <div class="bottom-bar">
    <div class="bar-item left">
      <div>
        <i class="icon service"></i>
        <p class="text">客服</p>
      </div>
      <div>
        <i class="icon shop"></i>
        <p class="text">店铺</p>
      </div>
      <div>
        <i class="icon collect"></i>
        <p class="text">收藏</p>
      </div>
    </div>
    <div class="bar-item right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottom',
    methods: {
      addCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-bar {
    display: flex;
    background-color: #fff;
    height: 58px;
    text-align: center;

    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    .bar-item {
      flex: 1;
      display: flex;
      &>div{
        flex: 1;
      }
      &.left {
        .icon {
          display: block;
          width: 22px;
          height: 22px;
          margin: 10px auto 3px;
          background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
          &.service {
            background-position: 0 -54px;
          }
          &.shop {
            background-position: 0 -98px;
          }
        }
        .text {
          font-size: 13px;
        }
      }
      &.right {
        font-size: 15px;
        color: #fff;
        line-height: 58px;
        .cart {
          background-color: #ffe817;
          color: #333;
        }
        .buy {
          background-color: #f69;
        }
      }
    }
  }
</style>