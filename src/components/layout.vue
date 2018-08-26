<template>
  <section class="container-fluid mazey">
    <m-header v-if="!isDemo"></m-header>
    <router-view/>
    <m-footer v-if="!isDemo"></m-footer>
  </section>
</template>

<script>
  import MHeader from './header.vue'
  import MFooter from './footer.vue'

  export default {
    components: {
      MFooter,
      MHeader},
    name: 'm-layout',
    data () {
      return {
        isDemo: false
      }
    },
    created () {
      // 检测ls版本
      let MazeyVersion = localStorage.getItem('MazeyVersion')
      if (!(Boolean(MazeyVersion) && parseFloat(MazeyVersion) === this.$store.getters.getMazeyVersion)) {
        localStorage.clear()
        localStorage.setItem('MazeyVersion', this.$store.getters.getMazeyVersion.toString())
      }
      // 判断是否 demo
      if (location.href.indexOf('/demo/') > -1) {
        this.isDemo = true
      }
    }
  }
</script>
