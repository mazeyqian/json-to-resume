<template>
  <main class="main">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="row">
          <div class="col-lg-8 banner">
            <!--轮播-->


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div v-for="(item, index) in $store.getters.getBannerElement" class="carousel-item" :class="{'active': index === 0}">
                  <img class="d-block w-100" :src="item.address"
                       :alt="item.title"
                       :id="'bannerImg-' + index">
                </div>
              </div>
            </div>

          </div>
          <div class="col-lg-4 mood">
            <!--心情-->
            <!--<div class="hr"></div>-->
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
            <div class="img" :style="{height: $store.getters.getBaseLayout.MoodImgHeight + 'px'}">
              <img :style="{maxWidth: $store.getters.getBaseLayout.MoodHotWidth + 'px'}"
                   :src="$store.getters.getMoodImgElement"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">文章</div>
          <div class="col-lg-4">文章</div>
          <div class="col-lg-4">文章</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'v-page-home',
    mounted () {
      console.log(document.querySelector('#bannerImg-0'))
      let self = this
      document.querySelector('#bannerImg-0').onload = function () {
        self.$store.commit('initLayout', {
          BannerHeight: document.querySelector('.banner').offsetHeight,
          MoodHotHeight: document.querySelector('.mood>.hot').offsetHeight,
          MoodHotWidth: document.querySelector('.mood>.hot').offsetWidth
        })
      }
    }
  }
</script>
