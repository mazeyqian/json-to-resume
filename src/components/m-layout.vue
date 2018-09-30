<template>
  <section class="m-layout">
    <router-view/>
  </section>
</template>

<script>
  export default {
    name: 'm-layout',
    data () {
      return {
        MazeyVersion: 2018.101
      }
    },
    created () {
      // 检测ls版本
      let MazeyVersion = localStorage.getItem('MazeyVersion')
      if (!(Boolean(MazeyVersion) || parseFloat(MazeyVersion) === this.MazeyVersion)) {
        localStorage.clear()
        localStorage.setItem('MazeyVersion', this.MazeyVersion.toString())
      }
    }
  }
</script>
