# 全屏容器组件

全屏容器会初始化容器默认高宽以及缩放比，当容器尺寸或者浏览器窗口大小发生改变的时候会自动计算缩放比，从而保证容器中的内容不会变形

公司业务中有大量的可视化大屏的需求，一般都是要求内容全屏展示，所以将这个组件从业务中抽离出来

> 1、使用这个组件请保证body的默认margin已经设置为0，否则将会引起缩放比例的计算错误\
2、如果没有专门适配移动端，但是又想要保证排版不会变乱，可以将viewport的width设置为一个固定值，可以是设计稿的宽度

## 安装

```bash
npm install vue-fullscreen-container -S
```

## 使用
```js

import Vue from 'vue'

import FullScreenContainer from 'vue-fullscreen-container'

Vue.use(FullScreenContainer)

/// 或者 Vue.component(FullScreenContainer.name, FullScreenContainer)

```

```vue
<script>
export default {
}
</script>

<template>
  <div id="app">
    <fullscreen-container>
      <div style="font-size:40px;color:red;">Hello World</div>
    </fullscreen-container>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>
```

## 配置

* delay: 触发resize回调延迟执行的毫秒数，默认100
