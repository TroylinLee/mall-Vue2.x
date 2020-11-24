<template>
  <div id="my-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="dots" v-show="isShowDot && slideLength > 1">
      <div
        class="dot-item"
        v-for="index in slideLength"
        :key="index"
        :class="{active: index === currentIndex}">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      duration: {
        type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      isShowDot: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        totalWidth: 0,
        slideLength: 0,
        swiperStyle: {},
        currentIndex: 1,
        scrolling: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.handleDom()
        this.autoPlay()
      }, 500);
    },
    methods: {
      handleDom() {
        let swiperEl = document.querySelector('.swiper')
        let slideEls = swiperEl.getElementsByClassName('slide')
        this.slideLength = slideEls.length

        if (this.slideLength > 1) {
          let firstNode = slideEls[0].cloneNode(true)
          let LastNode = slideEls[this.slideLength - 1].cloneNode(true)
          swiperEl.insertBefore(LastNode, slideEls[0])
          swiperEl.appendChild(firstNode)

          this.totalWidth = swiperEl.offsetWidth
          this.swiperStyle = swiperEl.style
        }

        this.setTransfrom(-this.totalWidth)
      },
      setTransfrom(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
        this.swiperStyle['-webkit-tansform'] = `translate3d(${position}px, 0, 0)`
        this.swiperStyle['-ms-tansform'] = `translate3d(${position}px, 0, 0)`
      },
      autoPlay() {
        this.timer = setInterval(() => {
          this.currentIndex ++
          this.scrollContent(-this.currentIndex * this.totalWidth)
        }, this.interval);
      },
      scrollContent(currentPosition) {
        this.scrolling = true
        this.swiperStyle.transition = `all ${this.duration}ms`
        this.setTransfrom(currentPosition)
        this.checkPosition()
        this.scrolling= false
      },
      checkPosition() {
        setTimeout(() => {
          this.swiperStyle.transition = '0ms'
          if (this.currentIndex > this.slideLength) {
            this.currentIndex = 1
            this.setTransfrom(-this.currentIndex * this.totalWidth)
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideLength
            this.setTransfrom(-this.currentIndex * this.totalWidth)
          }
        }, this.duration);
      },
      pause() {
        clearInterval(this.timer)
      },
      // 滑动图片切图
      touchStart(e) {
        if (this.scrolling) return

        this.pause()

        this.statX = e.touches[0].pageX // 起始坐标
      },
      touchMove(e) {
        this.currentX = e.touches[0].pageX // 拖动时的坐标
        this.distance = this.currentX - this.statX // 拖动距离
        
        let currentPosition = -this.currentIndex * this.totalWidth // 获取当前图片位置
        let moveDistance = this.distance + currentPosition // 拖到到下一张需要的距离

        this.setTransfrom(moveDistance)
      },
      touchEnd(e) {
        let currentMove = Math.abs(this.distance) // 获取拖动距离，必须为正数
        
        if (this.distance === 0) {
          return
        } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
          this.currentIndex --
        } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
          this.currentIndex ++
        }

        this.scrollContent(-this.totalWidth * this.currentIndex)
        this.autoPlay()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #my-swiper {
    overflow: hidden;
    position: relative;
    .swiper {
      display: flex;
    }
    .dots {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      bottom: 8px;
      .dot-item {
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        line-height: 8px;
        margin: 0 5px;
        &.active {
          background-color: rgba(212, 62, 46, 1);
        }
      }
    }
  }
</style>