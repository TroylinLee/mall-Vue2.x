<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <CartList />
    <CartBottom />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import CartList from './childComps/CartList'
  import CartBottom from './childComps/CartBottom'

  import { mapGetters } from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottom
    },
    computed: {
      ...mapGetters(['cartLength'])
    },
  }
</script>

<style lang="scss" scoped>
  .cart {
    height: 100vh;
    .cart-nav {
      background-color: var(--color-tint);
      color: #fff;
      font-size: 18px;
    }
  }
</style>