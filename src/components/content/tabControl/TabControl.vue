<template>
  <div class="tab-control">
    <div
      class="tab-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{active: index === currentIndex}"
      @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: Array
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
    font-size: 15px;
    .tab-item {
      flex: 1;
      &.active span {
        color: var(--color-high-text);
        padding: 3px;
        border-bottom: 3px solid var(--color-high-text);
      }
    }
  }
</style>