import axios from 'axios'
import Vue from 'vue'

const state = {
  // 基本布局
  BaseLayout: {
    GridGutter: 20,
    BannerHeight: 0,
    MoodHotHeight: 0,
    MoodHotWidth: 0,
    MoodImgHeight: 0,
    ArticleListWidth: 0,
    ArticleListTitleAWidth: 150
  },
  // 菜单
  MenuActive: {
    home: true,
    link: false,
    subMenu: false
  },
  BannerElement: [
    {
      title: '夏目友人帐',
      paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了',
      address: '/static/img/banner/00.jpg'
    }
    // ,
    // {
    //   title: '夏目友人帐',
    //   paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了',
    //   address: '/static/img/banner/01.jpg'
    // },
    // {
    //   title: '夏目友人帐',
    //   paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了',
    //   address: '/static/img/banner/02.jpg'
    // }
  ],
  MoodImgElement: '/static/img/mood/img/0.jpg'
}

const getters = {
  getMenuActive: state => state.MenuActive,
  getBannerElement: state => state.BannerElement,
  getBaseLayout: state => state.BaseLayout,
  getMoodImgElement: state => state.MoodImgElement
}

const actions = {
  fetchAllBanner ({state, commit, dispatch}, num) {
    axios.get(`static/img/banner/${num}.json`)
      .then(
        res => {
          let data = res.data
          console.log(data, data.data.index)
          let ret = data.ret
          if (parseInt(ret, 10) === 1) {
            let [index, base64] = [parseInt(data.data.index, 10), data.data.base64]
            commit('updateBannerElement', {index, base64})
            dispatch('fetchAllBanner', ++num)
          }
        }
      )
      .catch(
        err => {
          console.log(err, 123)
          console.log(state.BannerElement)
        }
      )
  }
}

const mutations = {
  tabMenu (state, menuName) {
    for (let key in state.MenuActive) {
      if (state.MenuActive.hasOwnProperty(key)) {
        state.MenuActive[key] = menuName === key ? Boolean(1) : Boolean(0)
      }
    }
  },
  initLayout (state, {BannerHeight, MoodHotHeight, MoodHotWidth}) {
    state.BaseLayout.BannerHeight = BannerHeight
    state.BaseLayout.MoodHotHeight = MoodHotHeight
    state.BaseLayout.MoodHotWidth = MoodHotWidth
    state.BaseLayout.MoodImgHeight = state.BaseLayout.BannerHeight - state.BaseLayout.MoodHotHeight - state.BaseLayout.GridGutter
    // console.log(state.BaseLayout)
    state.BaseLayout.ArticleListWidth = document.querySelector('.article-list').offsetWidth
    state.BaseLayout.ArticleListTitleAWidth = state.BaseLayout.ArticleListWidth - 28 - 50 - 2 // 为了兼容计算误差减2
    // 兼容吃西瓜的猫
    // let reset = function () {
    //   state.BaseLayout.MoodHotHeight = state.BaseLayout.BannerHeight
    //   document.querySelector('.mood>.hot').style.maxHeight = state.BaseLayout.MoodHotHeight + 'px'
    // }
    if (state.BaseLayout.MoodHotHeight >= state.BaseLayout.BannerHeight) {
      state.BaseLayout.MoodHotHeight = state.BaseLayout.BannerHeight
      document.querySelector('.mood>.hot').style.maxHeight = state.BaseLayout.MoodHotHeight + 'px'
    } else if (state.BaseLayout.MoodImgHeight < 100) {
      state.BaseLayout.MoodHotHeight = state.BaseLayout.BannerHeight
      document.querySelector('.mood>.hot').style.height = state.BaseLayout.MoodHotHeight + 'px'
      state.BaseLayout.MoodImgHeight = 0
    }
  },
  updateBannerElement (state, {index, base64}) {
    Vue.set(
      state.BannerElement,
      index,
      {
        title: '夏目友人帐 + ' + index,
        paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了 + ' + index,
        address: base64
      }
    )
    // state.BannerElement[index] = {
    //   title: '夏目友人帐 + ' + index,
    //   paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了 + ' + index,
    //   address: base64
    // }
    console.log(state.BannerElement)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
