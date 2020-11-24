<template>
  <div
    class="check-button"
    :class="{check: isChecked}">
    <img
      src="~assets/img/cart/tick.svg"
      v-show="isChecked"
      alt=""
    >
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .check-button {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    position: relative;
    img {
      width: 10px;
      height: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .check {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>