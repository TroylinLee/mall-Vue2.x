import { debounce } from './utils'

import BackTop from 'components/common/backtop/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenBackTop(position) {
      this.showBackTop = -position.y > 1000
    }
  }
}

export const itemListenerMixin = {
  data() {
    return {
      newRefresh: null,
      itemImgListener: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('goodsImgLoad', this.itemImgListener)
  },
}

export const tabControlMixin = {
  data() {
    return {
      isTabFixed: false,
      tabOffsetTop: 0,
      currentType: 'pop'
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }

      this.$refs.tab1.currentIndex = index
      this.$refs.tab2.currentIndex = index
    },
  }
}