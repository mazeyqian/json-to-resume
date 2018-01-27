<template>
  <section class="container-fluid">
    <v-header></v-header>
    <main>Main</main>
    <footer>
      Footer
      <img src="../assets/img/natsume-and-cat-0.gif">
    </footer>
  </section>
</template>

<script>
  import VHeader from './header.vue'

  export default {
    components: {VHeader},
    name: 'v-layout'
  }
</script>
