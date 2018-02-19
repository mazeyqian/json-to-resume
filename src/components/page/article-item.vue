<template>
  <div class="col-lg-3 article-item">
    <h3>
      {{ cat }} / {{ tag }} ({{ num }})
      <a href="#">更多 ></a>
    </h3>
    <ul class="article-list">
      <li v-for="(article, index) in articles">
        <div class="list-index">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="list-title">
          <a :href="article.link"
             target="_blank"
             data-toggle="tooltip"
             data-placement="bottom"
             :title="article.title"
             :style="{width: $store.getters.getBaseLayout.ArticleListTitleAWidth + 'px'}">{{ article.title }}</a>
          <span>{{ article.date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'

  export default {
    name: 'v-page-article-item',
    data () {
      return {
        num: 0,
        articles: []
      }
    },
    props: ['cat', 'tag'],
    mounted () {
      this.getArticleDetail()
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    },
    methods: {
      getArticleDetail () {
        axios.get('/static/data/article/item.json', {
          params: {
            cat: this.cat,
            tag: this.tag
          }
        })
          .then(
            ({data}) => {
              console.log(data)
              if (data.ret === 1) {
                let dataData = data.data
                this.num = dataData.num
                this.articles = dataData.list
              }
            }
          )
          .catch(
            (err) => {
              console.log(err)
            }
          )
      }
    }
  }
</script>
