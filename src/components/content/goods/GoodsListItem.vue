<template>
  <div class="goods-item" @click="itemClick">
    <img
      v-lazy="showImg"
      alt=""
      @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: Object
    },
    computed: {
      showImg() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('goodsImgLoad')
      },
      itemClick() {
        // console.log(this.goodsItem.iid)
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-item {
    width: 48%;
    position: relative;
    padding-bottom: 40px;
    img {
      border-radius: 5px;
    }
    .goods-info {
      position: absolute;
      font-size: 12px;
      bottom: 5px;
      left: 0;
      right: 0;
      text-align: center;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
      }
      .price {
        color: var(--color-high-text);
        margin-right: 20px;
      }
      .collect {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: -15px;
          top: -1px;
          width: 14px;
          height: 14px;
          background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
        }
      }
    }
  }
</style>