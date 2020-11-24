import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'

Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$bus = new Vue()

Vue.use(toast)
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/placeholder.png')
})

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
