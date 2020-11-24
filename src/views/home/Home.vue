<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <TabControl
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        v-show="isTabFixed"
        ref="tab1"
    />
    <scroll class="home-content"
            ref="scroll"
            :pull-up-load="true"
            :probe-type="3"
            :click="true"
            @scroll="contentScroll"
            @pullUpLoad="loadMore"
            >
      <HomeSwiper :banners="banners" @swiperLoad="swiperLoad"/>
      <HomeRecommend :recommends="recommends" />
      <HomeFeature />
      <TabControl
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tab2"
      />
      <GoodsList :goods="showGoodsList" />
    </scroll>
    <BackTop @click.native="backTop" v-show="showBackTop"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import HomeFeature from './childComps/HomeFeature'

  import GoodsList from 'components/content/goods/GoodsList'
  import TabControl from 'components/content/tabControl/TabControl'

  import { getHomeMultidata, getGoodsData } from 'network/home'

  import { debounce } from 'common/utils'

  import { backTopMixin, itemListenerMixin, tabControlMixin } from 'common/mixin'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      Scroll,
      GoodsList,
      TabControl,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []},
        },
        // currentType: 'pop',
        saveY: 0,
      }
    },
    computed: {
      showGoodsList() {
        return this.goods[this.currentType].list
      }
    },
    mixins: [backTopMixin, itemListenerMixin, tabControlMixin],
    created() {
      // 1. 轮播图和推荐
      this.getHomeMultidata()

      // 2. 获取商品列表数据
      this.getGoodsData('pop')
      this.getGoodsData('new')
      this.getGoodsData('sell')
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 保存离开页面时的位置
      this.saveY = this.$refs.scroll.getScrollY()

      // 取消全局事件监听
      this.$bus.$off('goodsImgLoad', this.itemImgListener)
    },
    methods: {
      // 事件处理
      loadMore() {
        this.getGoodsData(this.currentType)
      },
      swiperLoad() {
        this.tabOffsetTop = this.$refs.tab2.$el.offsetTop
      },
      contentScroll(position) {
        this.listenBackTop(position)

        this.isTabFixed = -(position.y) > this.tabOffsetTop
      },

      // 网络请求
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res.data)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getGoodsData(type) {
        const page = this.goods[type].page
        getGoodsData(type, page).then(res => {
          // console.log(res.data)
          const newList = res.data.list
          this.goods[type].list.push(...newList)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    .home-nav {
      background-color: var(--color-tint);
      color: #fff;
      font-size: 18px;
    }
    .home-content {
      height: calc(100vh - 44px - 49px);
      overflow: hidden;
      background-color: #fff;
    }
  }
</style>
