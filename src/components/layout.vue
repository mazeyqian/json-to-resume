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
    name: 'v-layout'
  }
</script>
