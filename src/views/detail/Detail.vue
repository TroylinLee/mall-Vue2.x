<template>
  <div class="detail">
    <DetailNavBar
      class="detail-nav"
      @titleClick="titleClick"
      :current-index="currentIndex" />
    <scroll class="detail-content"
            ref="scroll"
            :probe-type="3"
            :click="true"
            @scroll="contentScroll">
      <DetailSwiper :banners="banners" />
      <DetailBaseInfo :base-info="baseInfo" />
      <DetailShopInfo :shop-info="shopInfo" />
      <DetailInfo :detail-info="detailInfo" @detailImage="detailImage" />
      <DetailParams :goods-params="goodsParams" ref="param" />
      <DetailComment :comments-info="comments" ref="comment" />
      <GoodsList :goods="recommends" ref="recommend" />
    </scroll>
    <DetailBottom @addToCart="addToCart('PLUS')"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailInfo from './childComps/DetailInfo'
  import DetailParams from './childComps/DetailParams'
  import DetailComment from './childComps/DetailComment'
  import DetailBottom from './childComps/DetailBottom'

  import GoodsList from 'components/content/goods/GoodsList'

  import Scroll from 'components/common/scroll/Scroll'

  import { getDetail, BaseInfo, ShopInfo, GoodsParams, getRecommend } from 'network/detail'

  import { debounce } from 'common/utils'

  import { itemListenerMixin } from 'common/mixin'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailInfo,
      DetailParams,
      DetailComment,
      GoodsList,
      Scroll,
      DetailBottom
    },
    data() {
      return {
        iid: null,
        banners: [],
        baseInfo: {},
        shopInfo: {},
        goodsParams: {},
        detailInfo: {},
        comments: [],
        recommends: [],
        themeTops: [],
        getThemeTop: null,
        currentIndex: 0
      }
    },
    mixins: [itemListenerMixin],
    created() {
      this.getDetail()

      this.getRecommend()

      this._getThemeTop()
    },
    destroyed() {
      this.$bus.$off('goodsImgLoad', this.itemImgListener)
    },
    methods: {
      // 事件处理
      detailImage() {
        this.newRefresh()
        
        this.getThemeTop()
      },
      contentScroll(position) {
        this.listenScrollTheme(position)
      },
      _getThemeTop() { // 获取标题栏相应的位置
        this.getThemeTop = debounce(() => {
          if (this.$refs.param && this.$refs.comment && this.$refs.recommend) {
            this.themeTops.push(0)
            this.themeTops.push(this.$refs.param.$el.offsetTop)
            this.themeTops.push(this.$refs.comment.$el.offsetTop)
            this.themeTops.push(this.$refs.recommend.$el.offsetTop)
            this.themeTops.push(Number.MAX_VALUE)
          }
        })
      },
      listenScrollTheme(position) { // 封装顶部栏跳转功能
        const positionY = -position.y
        let length = this.themeTops.length

        for (let i = 0; i < length; i++) {
          if (this.currentIndex !== i && (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1])) {
            this.currentIndex = i
          }
        }
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTops[index], 500)
      },
      addToCart(type) { // 加入购物车，vuex状态管理
        this.$store.dispatch('ADD_CART', {
          type,
          count: 1,
          checked: true,
          image: this.banners[0],
          title: this.baseInfo.title,
          desc: this.baseInfo.desc,
          price: parseInt(this.baseInfo.realPrice),
          totalPrice: parseInt(this.baseInfo.realPrice),
          iid: this.iid,
        })
        this.$toast.show('宝贝添加成功，在购物车等候哦~')
      },

      // 网络数据处理
      getDetail() {
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(res => {
          // console.log(res.result)
          const data = res.result
          this.banners = data.itemInfo.topImages

          // 商品基本信息：标题、价格、包邮服务
          this.baseInfo = new BaseInfo(data.itemInfo, data.columns, data.shopInfo.services)

          // 店铺信息
          this.shopInfo = new ShopInfo(data.shopInfo)

          // 商品图片展示信息
          this.detailInfo = data.detailInfo

          // 尺寸参数信息
          this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)

          // 评论小心
          if (data.rate.cRate !== 0) {
            this.comments = data.rate.list
          }
        })
      },
      getRecommend() {
        getRecommend().then(res => {
          // console.log(res)
          this.recommends = res.data.list
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .detail {
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 1;
    .detail-content {
      // height: calc(100vh - 44px - 58px);
      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0;
      top: 44px;
      bottom: 58px;
      background-color: #fff;
    }
  }
</style>