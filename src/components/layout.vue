<template>
  <section class="container-fluid mazey">
    <m-header></m-header>
    <router-view/>
    <m-footer></m-footer>
  </section>
</template>

<script>
  import MHeader from './header.vue'
  import MFooter from './footer.vue'

  export default {
    components: {
      MFooter,
      MHeader},
    name: 'v-layout',
    created () {
      // 检测ls版本
      let MazeyVersion = localStorage.getItem('MazeyVersion')
      if (!(Boolean(MazeyVersion) && parseFloat(MazeyVersion) === this.$store.getters.getMazeyVersion)) {
        localStorage.clear()
        localStorage.setItem('MazeyVersion', this.$store.getters.getMazeyVersion.toString())
      }
    }
  }
</script>
