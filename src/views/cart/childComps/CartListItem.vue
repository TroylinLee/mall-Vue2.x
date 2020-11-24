<template>
  <div class="cart-item">
    <div class="item-select">
      <CheckButton
        :is-checked="cartItem.checked"
        @click.native="checkClick"
      />
    </div>
    <div class="item-img">
      <img :src="cartItem.image" alt="">
    </div>
    <div class="item-info">
      <div class="title">{{cartItem.title}}</div>
      <div class="desc">{{cartItem.desc}}</div>
      <div class="bottom">
        <div class="price left">￥{{cartItem.totalPrice.toFixed(2)}}</div>
        <div class="button right">
          <Calculate
            :iid="cartItem.iid"
            :price="cartItem.totalPrice"
            :count="cartItem.count"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import Calculate from 'components/content/calculate/Calculate'

  export default {
    name: 'CartListItem',
    components: {
      CheckButton,
      Calculate
    },
    props: {
      cartItem: Object
    },
    methods: {
      checkClick() {
        this.cartItem.checked = !this.cartItem.checked
        this.$store.dispatch('SELECTED', {
          iid: this.cartItem.iid,
          checked: this.cartItem.checked
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cart-item {
    width: 100%;
    display: flex;
    padding: 5px;
    border: 1px solid #ccc;
    .item-select {
      display: flex;
      align-items: center;
    }
    .item-img {
      padding: 5px;
      img {
        width: 80px;
        height: 80px;
        display: block;
        border-radius: 5px;
        
      }
    }
    .item-info {
      font-size: 17px;
      color: #333;
      padding: 5px 10px;
      position: relative;
      overflow: hidden;
      .title, .desc {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .desc {
        font-size: 14px;
        color: #666;
        margin-top: 15px;
      }
      .bottom {
        margin-top: 15px;
        position: absolute;
        bottom: 3px;
        left: 10px;
        right: 10px;
        .price {
          color: orangered;
        }
      }
    }
  }
</style>