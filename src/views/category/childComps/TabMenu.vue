<template>
  <scroll
    class="menu-content"
    :data="categories"
    :click="true">
    <div class="menu-list">
      <div
        class="list-item"
        v-for="(item, index) in categories"
        :key="index"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: 'TabMenu',
    components: {
      Scroll
    },
    props: {
      categories: Array
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('selectItem', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-content {
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    overflow: hidden;
    .list-item {
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: 16px;
      &.active {
        font-weight: normal;
        color: var(--color-high-text);
        background-color: #fff;
        border-left: 3px solid var(--color-high-text);
      }
    }
  }
</style>