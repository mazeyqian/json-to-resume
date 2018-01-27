<template>
  <header>
    <ul class="menu">
      <li>首页</li>
      <li>读书</li>
      <li>编程</li>
      <li>Bootstrap实战</li>
      <li>GitHub</li>
    </ul>
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
