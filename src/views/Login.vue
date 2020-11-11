<template>
  <div>
    <button @click="login">登录</button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Login'
})
export default class Login extends Vue {
  private login () {
    this.$store.commit('login')
    this.$router.push({ name: 'desktop' })
  }
}
</script>

<style>
</style>
