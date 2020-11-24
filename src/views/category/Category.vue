<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="content">
      <TabMenu
        :categories="categories"
        @selectItem="selectItem"
      />
      <TabControl
        class="tab-ctrl"
        :titles="['综合', '新品', '销量']"
        @tabClick="tabClick"
        v-show="isTabFixed"
        ref="tab1"
      />
      <scroll class="goods-content"
              ref="scroll"
              :probe-type="3"
              :click="true"
              :data="[categoryData]"
              @scroll="contentScroll">
        <TabContentCategory
          :categories="showSubcategory"
          @categoriesLoad="categoriesLoad"
        />
        <TabControl
          :titles="['综合', '新品', '销量']"
          @tabClick="tabClick"
          ref="tab2"
        />
        <GoodsList :goods="showGoodsList"/>
      </scroll>
    </div>
    <BackTop @click.native="backTop" v-show="showBackTop"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabMenu from './childComps/TabMenu'
  import TabContentCategory from './childComps/TabContenyCategory'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import { getCategory, getSubcategory, getCategoryDetail } from 'network/category'

  import { backTopMixin, itemListenerMixin, tabControlMixin } from 'common/mixin'

  export default {
    name: 'Category',
    components: {
      NavBar,
      Scroll,
      TabMenu,
      TabContentCategory,
      TabControl,
      GoodsList
    },
    data() {
      return {
        categories: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    mixins: [backTopMixin, itemListenerMixin, tabControlMixin],
    created() {
      this.getCategory()
    },
    destroyed() {
      this.$bus.$off('goodsImgLoad', this.itemImgListener)
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].subcategories.list
      },
      showGoodsList() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
      // 事件处理
      selectItem(index) {
        this.getSubcategories(index)
      },
      contentScroll(position) {
        this.listenBackTop(position)

        this.isTabFixed = -(position.y) > this.tabOffsetTop
      },
      categoriesLoad() {
        this.tabOffsetTop = this.$refs.tab2.$el.offsetTop
        // console.log(this.tabOffsetTop)
      },

      // 网络请求
      getCategory() { // 分类边栏
        getCategory().then(res => {
          // console.log(res.data)
          // 1. 获取分类数据
          this.categories = res.data.category.list
          // 2. 初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': [],
              }
            }
          }
          // 请求第一个分类数据
          this.getSubcategories(0)
        })
      },
      getSubcategories(index) {
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          
          this.getCategoryDetail('pop')
          this.getCategoryDetail('new')
          this.getCategoryDetail('sell')
        })
      },
      getCategoryDetail(type) {
        // 1. 获取miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey, type).then(res => {
          // console.log(res)
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    height: 100vh;
    .category-nav {
      background-color: var(--color-tint);
      font-size: 18px;
      color: #fff;
    }
    .content {
      height: calc(100vh - 44px - 49px);
      overflow: hidden;
      display: flex;
      .tab-ctrl {
        position: fixed;
        top: 44px;
        left: 100px;
        width: 220px;
        z-index: 1;
      }
      .goods-content {
      flex: 1;
      }
    }
  }
</style>