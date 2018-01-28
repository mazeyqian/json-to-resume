<template>
  <section class="container-fluid mazey">
    <v-header></v-header>
    <v-main></v-main>
    <footer>
      Footer
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
      <img src="../assets/img/natsume-and-cat-0.gif">
    </footer>
  </section>
</template>

<script>
  import VHeader from './header.vue'
  import VMain from './main.vue'

  export default {
    components: {
      VMain,
      VHeader},
    name: 'v-layout'
  }
</script>
