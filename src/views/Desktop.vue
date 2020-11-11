<template>
  <div id="desktop" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div id="windows-box">
      <Explorer />
    </div>
    <div id="taskbar">
      <div
        class="windows-icon"
        @mouseover.self="titleShow = true"
        @mouseout.self="titleShow = false"
      >
        <div
          class="title"
          :style="{
            visibility: titleShow ? 'visible' : 'hidden',
            transition: titleShow ? 'all .25s .5s' : 'all .25s',
          }"
        >
          开始
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Explorer from '@/apps/explorer/Explorer.vue'

@Component({
  name: 'Desktop',
  components: {
    Explorer
  }
})
export default class Desktop extends Vue {
  private titleShow = false

  private get currentTheme (): string {
    return this.$store.state.themes.current
  }

  private get theme () {
    return this.$store.state.themes[this.currentTheme]
  }

  private get backgroundImage () {
    return require('@/assets/' + this.theme.background)
  }
}
</script>

<style lang='scss'>
@import "@/themes/dark.scss";
#desktop {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  #windows-box {
    width: 100%;
    height: calc(100% - 40px);
    position: relative;
  }
  #taskbar {
    height: 40px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: $theme-color;
    .windows-icon {
      height: 100%;
      width: 50px;
      background: url("../assets/icons/windows.svg");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 18px;
      position: relative;
      .title {
        position: absolute;
        background-color: #fff;
        font-size: 12px;
        padding: 3px;
        border: #cccccc;
        width: 30px;
        height: 22px;
        top: -22px;
        left: 10px;
        box-sizing: border-box;
        color: #666;
        cursor: default;
      }
      &:hover::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>
