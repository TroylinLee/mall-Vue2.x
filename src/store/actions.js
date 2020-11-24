export default {
  SET_DATA({ commit }) {
    const cartList = JSON.parse(localStorage.getItem('cartList') || '[]'),
          allSelect = localStorage.getItem('allSelect') || true
    commit('SET_DATA', {
      cartList,
      allSelect
    })
  },
  ADD_CART({ commit }, payload) {
    commit('ADD_CART', payload)
  },
  SELECT_ALL({ commit }, payload) {
    commit('SELECT_ALL', payload)
  },
  SELECTED({ commit }, payload) {
    commit('SELECTED', payload)
  },
  INPUT_COUNT({ commit }, payload) {
    commit('INPUT_COUNT', payload)
  }
}