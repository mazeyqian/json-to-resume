<template>
  <section class="container-fluid mazey">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </section>
</template>

<script>
  import VHeader from './header.vue'
  import VFooter from './footer.vue'

  export default {
    components: {
      VFooter,
      VHeader},
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
