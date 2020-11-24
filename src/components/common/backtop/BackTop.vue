<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
  }
</script>

<style lang="scss" scoped>
  .back-top {
    position: fixed;
    bottom: 55px;
    right: 8px;
    z-index: 9;
    img {
      width: 43px;
      height: 43px;
    }
  }
</style>