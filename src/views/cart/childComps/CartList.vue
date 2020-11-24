<template>
  <div class="cart-list">
    <scroll class="cart-content"
            ref="scroll"
            :click="true">
      <CartListItem
        v-for="(item, index) in cartList"
        :key="index"
        :cart-item="item"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import CartListItem from './CartListItem'

  import { mapState } from 'vuex'

  export default {
    name: 'CartList',
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapState(['cartList'])
    },
    mounted() {
      this.$store.dispatch('SET_DATA')
    }
  }
</script>

<style lang="scss" scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
    .cart-content {
      height: 100%;
      overflow: hidden;
    }
  }
</style>