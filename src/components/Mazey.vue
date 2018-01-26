<template>
  <div>
    {{ msg }}
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'v-mazey',
    data () {
      return {
        msg: 'vv-mazey'
      }
    }
  }
</script>
