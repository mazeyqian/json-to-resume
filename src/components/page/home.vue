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
                  <li><a href="#">ECMAScript6</a></li>
                  <li><a href="#">HTML5</a></li>
                  <li><a href="#">CSS3</a></li>
                  <li><a href="#">ECMAScript6</a></li>
                  <li><a href="#">HTML5</a></li>
                  <li><a href="#">ECMAScript6</a></li>
                  <li><a href="#">HTML5</a></li>
                  <li><a href="#">ECMAScript6</a></li>
                  <li><a href="#">HTML5</a></li>
                </ul>
                <div class="hot-article">
                  <a href="#">JavaScript中label与break配合使用</a>
                </div>
                <div class="hot-article">
                  <a href="#">JavaScript中label与break配合使用</a>
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
        <!--文章-->
        <div class="row article">
          <v-page-article-item title="前端" cat="JavaScript"></v-page-article-item>
          <v-page-article-item title="前端" cat="UI"></v-page-article-item>
          <v-page-article-item title="后端" cat="后端" text="PHP, Node..."></v-page-article-item>
          <v-page-article-item title="读书" cat="读书" text="互联网, 小说..."></v-page-article-item>
        </div>
        <!--浏览更多-->
        <div class="row browse-more">
          <div class="col-lg-12">
            <div class="browse-more-text">浏览更多 ></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import VPageArticleItem from './article-item.vue'

  export default {
    components: {VPageArticleItem},
    name: 'v-page-home',
    data () {
      return {
        LineCount: 4
      }
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
