<template>
  <el-container>
    <el-aside>不知不问</el-aside>
    <el-container>
      <v-header></v-header>
      <el-main>Main</el-main>
      <el-footer>
        Footer
        <div>
          <img src="../assets/img/natsume-and-cat-0.gif">
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import VHeader from './header.vue'

  export default {
    components: {VHeader},
    name: 'v-layout'
  }
</script>
