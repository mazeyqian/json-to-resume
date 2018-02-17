<template>
  <footer class="row mazey-footer">
    <div class="col-lg-2 footer-cat" v-for="(item, index) in new Array(5)" :class="{'offset-lg-1': index === 0, 'footer-cat-last': index === 4}">
      <div class="footer-cat-title">
        关于我们 {{ index }}
      </div>
      <ul class="footer-cat-list">
        <li v-for="(item, index) in new Array(8)">
          <a href="#">关于我们</a>
        </li>
      </ul>
    </div>
    <div class="col-lg-12 footer-copyright">
      <span class="footer-copyright-text">
        Copyright&nbsp;©&nbsp;2017-{{ new Date().getFullYear() }}&nbsp;后除&nbsp;-&nbsp;
      </span>
      <a href="http://www.miitbeian.gov.cn" target="_blank" class="footer-copyright-gov">苏ICP备16050427号</a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'v-footer'
  }
</script>
