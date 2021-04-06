import Vue from 'vue';
import Dev from './serve.vue'
// import FullscreenContainer from '../dist/fullscreen-container.umd'

Vue.config.productionTip = false

// Vue.component(FullscreenContainer.name, FullscreenContainer)

new Vue({
  render: (h) => h(Dev),
}).$mount('#app')
