export default {
  SET_DATA(state, payload) {
    const { cartList, allSelect } = payload
    state.cartList = cartList
    state.allSelect = allSelect
  },
  ADD_CART(state, payload) {
    const {
      type,
      count,
      checked,
      image,
      title,
      desc,
      price,
      totalPrice,
      iid
    } = payload

    let index = state.cartList.findIndex(item => item.iid === iid)

    if (index === -1) {
      state.cartList.push({
        count,
        checked,
        image,
        title,
        desc,
        price,
        totalPrice,
        iid
      })
    } else {
      switch (type) {
        case 'PLUS':
          state.cartList[index].count += 1
          state.cartList[index].totalPrice = state.cartList[index].price * state.cartList[index].count
          break;
        case 'MINUS':
          state.cartList[index].count -= 1
          state.cartList[index].totalPrice = state.cartList[index].price * state.cartList[index].count

          if (!state.cartList[index].count && !state.cartList[index].totalPrice) {
            state.cartList = state.cartList.filter(item => item.iid !== iid)
          }
          break;
        default:
          break;
      }
    }
  },
  SELECTED(state, payload) {
    const { iid, checked } = payload
    let index = state.cartList.findIndex(item => item.iid === iid)
    state.cartList[index].checked = checked
    state.allSelect = !(state.cartList.find(item => !item.checked))
  },
  SELECT_ALL(state, payload) {
    state.allSelect = payload
  },
  INPUT_COUNT(state, payload) {
    const { iid, num } = payload
    let index = state.cartList.findIndex(item => item.iid === iid)
    state.cartList[index].count = num
    state.cartList[index].totalPrice = state.cartList[index].price * num
    if (!state.cartList[index].count && !state.cartList[index].totalPrice) {
      state.cartList = state.cartList.filter(item => item.iid !== iid)
    }
  }
}