<script>
import Vue from 'vue'
import FullscreenContainer from '@/fullscreen-container.vue'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    FullscreenContainer
  }
});
</script>

<template>
  <div id="app">
    <fullscreen-container>
      <div style="font-size:40px;color:red;">测试文案</div>
    </fullscreen-container>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>
