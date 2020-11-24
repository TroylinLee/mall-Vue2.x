<template>
  <swiper v-if="banners.length">
    <swiper-item
      v-for="(item, index) in banners"
      :key="index">
      <a :href="item.link">
        <img
          :src="item.image"
          alt=""
          @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: Array
    },
    data() {
      return {
        isLoaded: false
      }
    },
    methods: {
      imgLoad() {
        if (!this.isLoaded) {
          this.$emit('swiperLoad')
          this.isLoaded = true
        }
      }
    }
  }
</script>

<style scoped>
  
</style>