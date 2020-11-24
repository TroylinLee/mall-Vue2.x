<template>
  <div class="bottom-bar">
    <div class="select-all">
      <CheckButton
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计：{{totalPrice}}</span>
    </div>
    <div class="calculate">
      <span>去计算({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import { mapGetters } from 'vuex'

  export default {
    name: 'CartBottom',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList', 'totalPrice', 'checkLength', 'isSelectAll'])
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
        this.$store.dispatch('SELECT_ALL', this.isSelectAll)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #eee;
    .select-all {
      width: 60px;
      display: flex;
      justify-content: space-between;
      margin-left: 10px;
    }
    .calculate {
      width: 90px;
      background-color: #f00;
      color: #fff;
      text-align: center;
      line-height: 40px;
    }
  }
</style>