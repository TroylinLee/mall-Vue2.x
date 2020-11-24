<template>
  <div class="account-info">
    <div class="account-item">
      <p class="blance">0.00</p>元
      <p class="text">我的余额</p>
    </div>
    <div class="account-item">
      <p class="blance">0</p>张
      <p class="text">我的优惠</p>
    </div>
    <div class="account-item">
      <p class="blance">0</p>份
      <p class="text">我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AccountInfo',
  }
</script>

<style lang="scss" scoped>
  .account-info {
    display: flex;
    .account-item {
      width: 100%;
      background-color: #fff;
      margin-right: 1px;
      text-align: center;
      color: #666;
      font-size: 13px;
      padding: 18px;
      .blance {
        display: inline;
        font-size: 24px;
        font-weight: normal;
        color: #ff5f3e;
      }
      .text {
        margin-top: 6px;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
</style>