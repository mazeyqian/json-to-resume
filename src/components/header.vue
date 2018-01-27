<template>
  <header>
    <nav class="nav justify-content-end">
        <a class="nav-link active" href="#">首页</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'v-header',
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
