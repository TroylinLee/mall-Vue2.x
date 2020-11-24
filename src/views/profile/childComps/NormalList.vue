<template>
  <div class="normal-list">
    <div
      class="item"
      v-for="(item, index) in listData"
      :key="index">
      <span class="icon">
        <img :src="iconURL(item)" alt="">
      </span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NormalList',
    props: {
      listData: Array
    },
    methods: {
      iconURL(item) {
        return require('assets/img/profile/' + item.icon)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .normal-list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
    margin-top: 15px;
    .item {
      height: 44px;
      line-height: 44px;
      position: relative;
      border-bottom: 1px solid rgba(100, 100, 100, .1);
      .icon {
        position: absolute;
        left: 16px;
        top: -7px;
        margin-top: 10px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .info {
        margin-left: 40px;
        height: 20px;
      }
      &:last-of-type {
        border-bottom: none;
      }
    }
  }
</style>