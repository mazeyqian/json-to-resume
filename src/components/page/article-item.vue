<template>
  <div class="col-lg-3 article-item">
    <h3>
      <span>
        <span>{{ title }} / {{ text || cat }}</span>
        <span> ({{ num }})</span>
      </span>
      <a :href="`${$store.getters.getDomains.blog}/category/${slug}`" target="_blank">更多 ></a>
    </h3>
    <ul class="article-list">
      <li v-for="(article, index) in articles"
      :key="article.id">
        <div class="list-index">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="list-title">
          <a :href="`${$store.getters.getDomains.blog}/${article.id}.html`"
             target="_blank"
             data-toggle="tooltip"
             data-placement="bottom"
             :title="article.postTitle"
             :style="{width: $store.getters.getBaseLayout.ArticleListTitleAWidth + 'px'}">{{ article.postTitle }}</a>
          <span>{{ formatDate(article.postDate) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'

  export default {
    name: 'm-page-article-item',
    data () {
      return {
        num: 0,
        articles: [],
        slug: 'javascript',
        queryCount: 10
      }
    },
    props: ['title', 'cat', 'text'],
    created () {
      let count = 10
      while (count--) {
        this.articles.push(
          {id: count, postTitle: `${this.text || this.cat} 加载中...`, postDate: new Date()}
        )
      }
    },
    mounted () {
      this.getArticleDetail()
    },
    methods: {
      getArticleDetail () {
        axios.get(`${this.$store.getters.getDomains.main}/server`, {
          params: {
            cat: this.cat
          }
        })
          .then(
            ({data}) => {
              let dataData = data.data
              if (data.ret === 1) {
                if (dataData.queryCat !== this.cat && this.queryCount) {
                  this.getArticleDetail()
                  return
                }
                this.num = dataData.postCount
                this.articles = dataData.posts
                this.slug = dataData.slug
                $(function () {
                  if ($('[data-toggle="tooltip"]').length === 39) {
                    $('[data-toggle="tooltip"]').tooltip()
                  }
                })
              }
              this.queryCount--
            }
          )
          .catch(
            (err) => {
              console.log(err)
            }
          )
      },
      formatDate (str) {
        let d = new Date(str)
        let [day, month] = [d.getDate().toString(), (d.getMonth() + 1).toString()]
        day = day.length === 1 ? `0${day}` : day
        month = month.length === 1 ? `0${month}` : month
        return `${month}/${day}`
      },
      genRndNum (n) {
        let rndNum = ''
        for (let i = 0; i < n; ++i) {
          rndNum += Math.floor(Math.random() * 10)
        }
        return rndNum
      }
    }
  }
</script>
