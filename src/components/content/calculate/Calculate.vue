<template>
  <div class="calculate">
    <button @click="setCartItem(iid, price, 'PLUS')">
      <span>+</span>
    </button>
    <input
      type="text"
      :value="count"
      ref="num"
      @change="numChange"
    >
    <button @click="setCartItem(iid, price, 'MINUS')">
      <span>-</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Calculate',
    props: {
      iid: String,
      price: Number,
      count: Number,
    },
    methods: {
      setCartItem(iid, price, type) {
        this.$store.dispatch('ADD_CART', {
          iid,
          price,
          type
        })
      },
      numChange() {
        this.$store.dispatch('INPUT_COUNT', {
          iid: this.iid,
          num: parseInt(this.$refs.num.value)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .calculate {
    width: 60px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    color: #333;
    button {
      width: 20px;
      height: 20px;
      line-height: 5px;
      padding: 6px;
      background-color: #eee;
      border-style: none;
      border-radius: 5px;
    }
    input {
      font-size: 15px;
      width: 30px;
      height: 20px;
      text-align: center;
      border-style: none;
    }
  }
</style>