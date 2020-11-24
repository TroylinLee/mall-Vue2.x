<template>
  <swiper v-if="banners.length">
    <swiper-item
      v-for="(item, index) in banners"
      :key="index"
      class="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: Array
    }
  }
</script>

<style scoped>
  .item {
    height: 300px;
    text-align: center;
  }
</style>