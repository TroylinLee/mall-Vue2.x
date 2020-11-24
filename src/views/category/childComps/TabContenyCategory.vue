<template>
  <div class="categories">
    <div class="category-item"
         v-for="(item, index) in categories"
         :key="index">
      <a :href="item.link">
        <img
          :src="item.image"
          @load="imgLoad"
          alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabContentCategory',
    props: {
      categories: Array
    },
    methods: {
      imgLoad() {
        this.$emit('categoriesLoad')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .categories {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    .category-item {
      width: 33%;
      font-size: 12px;
      text-align: center;
      padding: 5px 0;
      img {
        width: 54px;
        height: 54px;
      }
      p {
        margin-top: 8px;
      }
    }
  }
</style>