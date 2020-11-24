<template>
  <div class="nav-bar">
    <div class="lt">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="gt">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    .lt, .gt {
      width: 60px;
    }
    .center {
      flex: 1;
    }
  }
</style>