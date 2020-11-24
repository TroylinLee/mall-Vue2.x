<template>
  <div class="goods-list">
    <GoodsListItem
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index"
    />
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goods: Array
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>