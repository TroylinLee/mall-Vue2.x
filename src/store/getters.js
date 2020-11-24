export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
    return state.cartList
  },
  allSelect(state) {
    localStorage.setItem('allSelect', state.allSelect)
    return state.allSelect
  },
  totalPrice(state) {
    return '￥' + state.cartList.filter(item => {
      return item.checked
    }).reduce((pre, item) => {
      return pre + item.totalPrice
    }, 0).toFixed(2)
  },
  checkLength(state) {
    return state.cartList.filter(item => item.checked).length
  }, 
  isSelectAll(state) {
    if (state.cartList.length === 0) return false
    return !(state.cartList.find(item => !item.checked))
  }
}