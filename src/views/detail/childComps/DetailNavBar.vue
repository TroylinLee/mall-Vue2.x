<template>
  <nav-bar class="detail-nav">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="titles">
      <div
        v-for="(item, index) in titles"
        :key="index"
        @click="titleClick(index)"
        :class="{active: index === currentIndex}">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    props: {
      titles: {
        type: Array,
        default() {
          return ['商品', '参数', '评论', '推荐']
        }
      },
      currentIndex: {
        type: Number,
        default: null
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      titleClick(index) {
        this.$emit('titleClick', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-nav {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .back img {
      width: 22px;
      height: 22px;
      margin-top: 12px;
    }
    .titles {
      display: flex;
      &>div {
        flex: 1;
      }
      .active {
        color: var(--color-high-text);
      }
    }
  }
</style>