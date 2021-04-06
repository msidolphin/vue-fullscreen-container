import component from '@/fullscreen-container.vue'
export default /*#__PURE__*/(() => {
  const installable = component

  installable.install = (Vue) => {
    Vue.component('FullscreenContainer', installable)
  }
  
  return installable
})()

