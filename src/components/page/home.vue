<template>
  <main class="main">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="row">
          <div class="col-lg-8 banner">
            <!--轮播-->
            <div id="MazeyBannerCarouselTarget" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#MazeyBannerCarouselTarget"
                    v-for="(item, index) in $store.getters.getBannerElement"
                    :data-slide-to="index"
                    :class="{'active': index === 0}"></li>
              </ol>
              <div class="carousel-inner">
                <div v-for="(item, index) in $store.getters.getBannerElement" class="carousel-item" :class="{'active': index === 0}">
                  <img class="d-block w-100" :src="item.address"
                       :alt="item.title"
                       :id="'bannerImg-' + index">
                  <div class="carousel-caption d-none d-md-block">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.paragraph }}</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#MazeyBannerCarouselTarget" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#MazeyBannerCarouselTarget" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 mood">
            <!--心情-->
            <div class="hot">
              <div class="tag-cloud">
                <h3>标签云</h3>
                <ul class="tag-hot">
                  <li
                    v-for="tag in $store.getters.getHomeTags">
                    <a
                      :href="`${$store.getters.getDomains.blog}/tag/${tag.tagSlug}`" target="_blank">{{ tag.tagName }}</a>
                  </li>
                </ul>
                <div
                  v-for="article in $store.getters.getHomeHotArticles"
                  class="hot-article">
                  <a :href="article.link" target="_blank">{{ article.title }}</a>
                </div>
              </div>
            </div>
            <div class="img" :style="{height: $store.getters.getBaseLayout.MoodImgHeight + 'px'}" v-show="$store.getters.getBaseLayout.MoodImgHeight > 0">
              <img :style="{maxWidth: $store.getters.getBaseLayout.MoodHotWidth + 'px'}"
                   :src="$store.getters.getMoodImgElement"/>
            </div>
          </div>
        </div>
        <div class="row hr">
          <div class="col-lg-12">
            <div class="hr-padding"></div>
          </div>
        </div>
        <m-test
          testAttr="in parent"
          v-model="parentMsg"></m-test>
        {{ parentMsg }}
        <!--文章-->
        <div class="row article">
          <m-page-article-item title="前端" cat="JavaScript"></m-page-article-item>
          <m-page-article-item title="前端" cat="HTML/CSS" text="H5, CSS, PS, Cache"></m-page-article-item>
          <m-page-article-item title="后端" cat="后端" text="PHP, Node, MySQL, SQLServer"></m-page-article-item>
          <m-page-article-item title="文章" cat="文章" text="自由的灵魂"></m-page-article-item>
        </div>
        <div class="row article" v-show="!BrowseMore">
          <m-page-article-item title="读书" cat="读书" text="互联网, 计算机, 人性, 生活, 小说"></m-page-article-item>
          <m-page-article-item title="烹饪" cat="烹饪" text="煲汤, 炒菜, 煮, 煎"></m-page-article-item>
          <!--<m-page-article-item title="生活" cat="生活" text="不小心摔倒了"></m-page-article-item>-->
          <m-page-article-item title="心情" cat="心情" text="讨厌有闹钟的生活"></m-page-article-item>
        </div>
        <!--浏览更多-->
        <div class="row browse-more">
          <div class="col-lg-12">
            <div class="browse-more-text" @click="BrowseMore = !BrowseMore">{{ BrowseMore ? '浏览更多 ↓' : '收起 ↑' }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import MPageArticleItem from './article-item.vue'
  import MTest from './test.vue'

  export default {
    components: {
      MTest,
      MPageArticleItem},
    name: 'm-page-home',
    data () {
      return {
        LineCount: 4,
        BrowseMore: true,
        parentMsg: 0
      }
    },
    created () {
//      this.$root.eventHub.$on('eventName', msg => {
//        console.log(msg)
//      })
    },
    mounted () {
//      console.log(document.querySelector('#bannerImg-0'))
      let self = this
      document.querySelector('#bannerImg-0').onload = function () {
        self.$store.commit('initLayout', {
//          BannerHeight: document.querySelector('.banner').offsetHeight,
          BannerHeight: document.querySelector('#bannerImg-0').offsetHeight,
          MoodHotHeight: document.querySelector('.mood>.hot').offsetHeight,
          MoodHotWidth: document.querySelector('.mood>.hot').offsetWidth
        })
      }
      // 动态加载轮播
      self.$store.dispatch('fetchAllBanner', 1)
    }
  }
</script>
