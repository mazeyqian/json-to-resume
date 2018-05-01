<template>
  <div class="col-lg-3 article-item">
    <h3>
      {{ title }} / {{ cat }} ({{ num }})
      <a href="#">更多 ></a>
    </h3>
    <ul class="article-list">
      <li v-for="(article, index) in articles">
        <div class="list-index">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="list-title">
          <a :href="article.id"
             target="_blank"
             data-toggle="tooltip"
             data-placement="bottom"
             :title="article.postTitle"
             :style="{width: $store.getters.getBaseLayout.ArticleListTitleAWidth + 'px'}">{{ article.postTitle }}</a>
          <span>{{ article.postDate }}</span>
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
    props: ['title', 'cat', 'text'],
    mounted () {
      this.getArticleDetail()
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    },
    methods: {
      getArticleDetail () {
        axios.get('http://mazey.cn/server', {
          params: {
            cat: this.cat
          }
        })
          .then(
            ({data}) => {
//              console.log(data)
              if (data.ret === 1) {
                let dataData = data.data
                this.num = dataData.postCount
                this.articles = dataData.posts
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
