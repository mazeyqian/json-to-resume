<template>
  <header class="row fixed-top _justify-content-lg-center mazey-header">
    <!--<nav class="nav justify-content-end">-->
        <!--<a class="nav-link active" href="#">首页</a>-->
        <!--<a class="nav-link" href="#">Link</a>-->
        <!--<a class="nav-link" href="#">Link</a>-->
        <!--<a class="nav-link" href="#">Link</a>-->
    <!--</nav>-->
    <nav class="navbar fixed-top navbar-expand-md navbar-dark _bg-light col-lg-10 offset-lg-1">
      <a class="navbar-brand" href="/#/">後除</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mazeyMenu" aria-controls="mazeyMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mazeyMenu">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{'active': menuActive.home}" @click="tabMenu('home')">
            <a class="nav-link">首页</a>
          </li>
          <li class="nav-item" :class="{'active': menuActive.link}" @click="tabMenu('link')">
            <a class="nav-link">链接</a>
          </li>
          <li class="nav-item dropdown" :class="{'active': menuActive.subMenu}">
            <a class="nav-link dropdown-toggle" id="mazeySubMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              二级菜单
            </a>
            <div class="dropdown-menu" aria-labelledby="mazeySubMenu">
              <a class="dropdown-item">链接二</a>
              <a class="dropdown-item">链接二</a>
              <!--<div class="dropdown-divider"></div>-->
              <a class="dropdown-item">链接二</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">失效</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-show="searchStatus">
          <button class="btn btn-outline-light my-2 my-sm-0" type="button" @click="toggleSearchStatus">
            <i class="mazeyiconfont mazeyicon-search" v-show="!searchStatus"></i>
            <i class="mazeyiconfont mazeyicon-close" v-show="searchStatus"></i>
          </button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'v-header',
    data () {
      return {
        searchStatus: false,
        menuActive: {
          home: true,
          link: false,
          subMenu: false
        }
      }
    },
    methods: {
      toggleSearchStatus () {
        this.searchStatus = !this.searchStatus
      },
      tabMenu (menuName) {
        for (let key in this.menuActive) {
          if (this.menuActive.hasOwnProperty(key)) {
            this.menuActive[key] = menuName === key ? Boolean(1) : Boolean(0)
          }
//          console.log(this.menuActive)
        }
      }
    }
  }
</script>
