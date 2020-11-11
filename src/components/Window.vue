<template>
  <div id="window" :style="windowStyle">
    <div class="titlebar" v-if="!hideTitlebar">{{ windowTitle }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'Window'
})
export default class Window extends Vue {
  @Prop({ default: false }) readonly hideTitlebar!: boolean
  @Prop({ type: [String, Number] }) readonly windowWidth: string|number|undefined
  @Prop({ type: [String, Number] }) readonly windowHeight: string|number|undefined
  @Prop(String) readonly windowTitle!: string

  get windowStyle () {
    // 默认样式
    const style = {
      width: '700px',
      height: '400px',
      position: 'absolute',
      left: '0px',
      top: '0px'
    }
    // 浏览器大小
    const { innerWidth, innerHeight } = window
    // 设置宽度
    switch (typeof this.windowWidth) {
      case 'string':
        style.width = parseFloat(this.windowWidth) > innerWidth ? innerWidth + 'px' : this.windowWidth
        break
      case 'number':
        style.width = this.windowWidth > innerWidth ? innerWidth + 'px' : this.windowWidth + 'px'
        break
    }
    // 设置高度
    switch (typeof this.windowHeight) {
      case 'string':
        style.height = parseFloat(this.windowHeight) > innerHeight ? innerHeight + 'px' : this.windowHeight
        break
      case 'number':
        style.height = this.windowHeight > innerHeight ? innerHeight + 'px' : this.windowHeight + 'px'
        break
    }
    // 默认居中
    style.left = (innerWidth - parseFloat(style.width)) / 2 + 'px'
    style.top = (innerHeight - parseFloat(style.height)) / 2 + 'px'
    return style
  }

  mounted () {
    console.log(this.$parent.$options.name)
  }
}
</script>

<style lang='scss'>
@import "@/themes/dark.scss";
#window {
  background-color: #fff;
  .titlebar {
    user-select: none;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: $theme-color;
    color: #fff;
    line-height: 30px;
    font-size: 14px;
  }
}
</style>
