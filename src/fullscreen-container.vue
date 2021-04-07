<script>
import { debounce } from './util'
export default /*#__PURE__*/ {
  name: 'FullscreenContainer',
  props: {
    delay: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 1920
    },
    height: {
      type: Number,
      default: 1080
    }
  },
  data() {
    return {
      scale: 1
    }
  },
  methods: {
    init () {
      this.rate = this.width / this.height
      this.initWindow(false).then(() => {
        this.bindResizeEvent()
        this.dom.style.cssText = `width:${this.width}px;height:${this.height}px`
        this.onResize()
        setTimeout(() => {
          this.dom.style.transition = 'all 0.3s linear 0s'
        }, 0)
      })
    },
    initWindow(resize = true) {
      return new Promise(resolve => {
        this.$nextTick(() => {
          this.dom = this.$refs.container
          if (resize) this.onResize()
          resolve()
        })
      })
    },
    bindResizeEvent() {
      this.debounceInitWindow = debounce(this.initWindow, this.delay)
      window.addEventListener('resize', this.debounceInitWindow)
    },
    unbindResizeEvent () {
      window.removeEventListener('resize', this.debounceInitWindow)
    },
    onResize () {
      const currentHeight = document.body.clientHeight
      const currentWidth = document.body.clientWidth
      const xScale = currentWidth / this.width
      const yScale = currentHeight / this.height

      let rate = currentWidth / currentHeight

      if (rate > this.rate) {
        this.dom.style.transform = `scale(${yScale})`
        this.dom.style.transformOrigin = 'center top 0px'
        this.dom.style.marginLeft = `-${(Math.abs(this.width - currentWidth)) / 2}px`
        this.dom.style.marginTop = '0px'
        this.scale = yScale
      } else {
        this.dom.style.transform = `scale(${xScale})`
        this.dom.style.transformOrigin = 'left top'
        this.dom.style.marginLeft = `0px`
        const offsetTop = (currentHeight / 2) - ((this.height * xScale) / 2)
        this.dom.style.marginTop = `${offsetTop}px`
        this.scale = xScale
      }

    },
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.unbindResizeEvent()
  }
}
</script>

<template>
  <div ref="container" class="v-fullscreen-container">
    <slot/>
  </div>
</template>

<style>
.v-fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 999;
}
</style>
