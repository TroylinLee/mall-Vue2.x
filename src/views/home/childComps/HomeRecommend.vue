<template>
  <div class="recommends">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommends: Array
    }
  }
</script>

<style lang="scss" scoped>
  .recommends {
    display: flex;
    justify-content: space-around;
    padding: 10px 0 30px;
    font-size: 14px;
    border-bottom: 10px solid #eee;
    .recommend-item {
      text-align: center;
      img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }
    }
  }
</style>