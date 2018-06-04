<template>
  <div class="col-lg-2 footer-cat"
       :class="linkClass">
    <div class="footer-cat-title">
      {{ linkTitle }}
    </div>
    <ul class="footer-cat-list">
      <li v-for="(item, index) in $store.getters[`getFooter${linkAttr}`]">
        <a
          :href="item.link"
          target="_blank"
          :title="item.title"
          :class="{'mazey-hidden': !item.title}">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'm-footer-link',
    props: {
      linkTitle: {
        type: String,
        default: '关于我们'
      },
      linkAttr: {
        type: String,
        required: true
      },
      linkClass: {
        type: Array,
        default () {
          return []
        }
      }
    },
    created () {
      this.$store.dispatch('fetchFooterLink', this.linkAttr)
    }
  }
</script>
