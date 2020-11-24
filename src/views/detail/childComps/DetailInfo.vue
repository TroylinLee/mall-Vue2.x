<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-desc">
      <div class="start left"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end right"></div>
    </div>
    <div
      v-for="(item, index) in detailInfo.detailImage"
      :key="index">
      <p class="key">{{item.key}}</p>
      <img
        v-for="(image, indey) in item.list"
        :key="indey"
        @load="imgLoad"
        :src="image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props: {
      detailInfo: Object
    },
    methods: {
      imgLoad() {
        this.$emit('detailImage')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
    .detail-desc {
      padding: 0 15px;
      .desc {
        padding: 15px 0;
        font-size: 14px;
      }
      .start, .end {
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position: relative;
      }
      .start::before, .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
      }
      .end::after {
        right: 0;
      }
    }
    .key {
      padding: 10px 0 10px 15px;
      color: #333;
      font-size: 15px;
    }
  }
</style>