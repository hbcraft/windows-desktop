<template>
  <Window
    windowTitle="Windows 资源管理器"
    windowWidth="800px"
    windowHeight="600px"
    >aaa</Window
  >
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Window from '@/components/Window.vue'
@Component({
  name: 'Explorer',
  components: {
    Window
  }
})
export default class Explorer extends Vue {
}
</script>

<style>
</style>
