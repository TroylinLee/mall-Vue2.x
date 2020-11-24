<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      probeType: {
        type: Number,
        default: 0
      },
      click: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      setTimeout(() => { // 等dom渲染后加载scroll
        this._initScroll()
      }, 20);
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) return

        this.scroll = new BScroll(this.$refs.wrapper, {
          pullUpLoad: this.pullUpLoad,
          probeType: this.probeType,
          click: this.click,
          scrollY: true
        })

        if (this.probeType === 2 || this.probeType === 3) {
          this.scroll.on('scroll', position => {
            this.$emit('scroll', position)
          })
        }

        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullUpLoad')
          })
        }
      },

      refresh() { // 页面刷新
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() { // 上拉加载更多
        this.scroll && this.scroll.finishPullUp()
      },
      scrollTo() { // 跳转位置
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      getScrollY() { // 获取Y坐标
        return this.scroll ? this.scroll.y : 0
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay);
      }
    }
  }
</script>

<style scoped>
  
</style>