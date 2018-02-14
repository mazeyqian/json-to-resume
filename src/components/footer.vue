<template>
  <footer class="row mazey-footer">
    <div class="col-lg-2 footer-cat" v-for="(item, index) in new Array(5)" :class="{'offset-lg-1': index === 0}">
      <div class="footer-cat-title">
        关于我们 {{ index }}
      </div>
      <ul class="footer-cat-list">
        <li v-for="(item, index) in new Array(8)">
          <a href="#">关于我们</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'v-footer'
  }
</script>
