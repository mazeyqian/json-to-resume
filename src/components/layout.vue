<template>
  <section class="container-fluid mazey">
    <v-header></v-header>
    <router-view/>
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

  export default {
    components: {
      VHeader},
    name: 'v-layout'
  }
</script>
