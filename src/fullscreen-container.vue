<script>
import { debounce, observerDom } from './util'
export default /*#__PURE__*/ {
  name: 'FullscreenContainer',
  props: {
    delay: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      ref: 'container',
      ready: false
    }
  },
  methods: {
    async init () {
      await this.initWindow(false)
      this.bindResizeEvent()
      this.dom.style.cssText = `width:${screen.width}px;height:${screen.height}px`
      this.onResize()
      this.ready = true
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
      this.resizeObserver = observerDom(this.dom, this.debounceInitWindow)
      window.addEventListener('resize', this.debounceInitWindow)
    },
    unbindResizeEvent () {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect()
        this.resizeObserver.takeRecords()
        this.resizeObserver = null
      }
      window.removeEventListener('resize', this.debounceInitWindow)
    },
    onResize () {
      const currentWidth = document.body.clientWidth
      this.dom.style.transform = `scale(${currentWidth / screen.width})`
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
    <template v-if="ready"><slot/></template>
  </div>
</template>

<style>
.v-fullscreen-container {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>
