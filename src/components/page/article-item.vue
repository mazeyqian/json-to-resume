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
      <li v-for="(article, index) in articles">
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
    name: 'v-page-article-item',
    data () {
      return {
        num: 0,
        articles: [],
        slug: 'javascript'
      }
    },
    props: ['title', 'cat', 'text'],
    created () {
//      this.rndNum = this.genRndNum(10)
//      console.log(this.rndNum)
    },
    mounted () {
      this.getArticleDetail()
    },
    methods: {
      getArticleDetail () {
//        axios({
//          method: 'post',
//          url: 'http://mazey.cn/server',
//          data: {
//            cat: this.cat
//          },
//          transformRequest: [function (data) {
//            let ret = ''
//            for (let it in data) {
//              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//            }
//            return ret
//          }]
//        })
        axios.get(`${this.$store.getters.getDomains.main}/server`, {
          params: {
            cat: this.cat
          }
        })
          .then(
            ({data}) => {
//              console.log(data)
              let dataData = data.data
              if (data.ret === 1) {
                if (dataData.queryCat !== this.cat) {
                  this.getArticleDetail()
                  return
                }
                this.num = dataData.postCount
                this.articles = dataData.posts
                this.slug = dataData.slug
                $(function () {
//                  console.log($(`[data-toggle="tooltip"]`).length)
                  if ($('[data-toggle="tooltip"]').length > 30) {
//                    console.log('go')
                    $('[data-toggle="tooltip"]').tooltip()
                  }
                })
              }
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
        let day = d.getDate().toString().length === 1 ? `0${d.getDate().toString()}` : d.getDate().toString()
        let month = (d.getMonth() + 1).toString().length === 1 ? `0${(d.getMonth() + 1).toString()}` : (d.getMonth() + 1).toString()
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
