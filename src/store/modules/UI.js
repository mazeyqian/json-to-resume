import axios from 'axios'
import Vue from 'vue'

const state = {
  // 版本
  MazeyVersion: 2018.06051433,
  Domains: {
    main: 'https://mazey.cn',
    blog: 'https://blog.mazey.net'
  },
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
  MaxBannerCount: 3,
  BannerElement: [
    {
      title: '',
      // 如果结果不如你所愿，就在尘埃落定前奋力一搏
      paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了',
      address: localStorage.getItem('banner0') || '/static/img/banner/banner0.jpg'
    }
  ],
  MoodImgElement: '/static/img/mood/img/0.jpg'
}

const getters = {
  getMazeyVersion: state => state.MazeyVersion,
  getMenuActive: state => state.MenuActive,
  getBannerElement: state => state.BannerElement,
  getBaseLayout: state => state.BaseLayout,
  getMoodImgElement: state => state.MoodImgElement,
  getDomains: state => state.Domains
}

const actions = {
  fetchAllBanner ({state, commit, dispatch}, num) {
    // 检测banner数量
    if (num >= state.MaxBannerCount) {
      return
    }
    // 缓存第一个banner
    if (num === 1 && !(localStorage.getItem('banner0'))) {
      axios.get('static/img/banner/banner0.txt')
        .then(
          res => {
            // console.log(res, res.data)
            localStorage.setItem('banner0', res.data)
          }
        )
    }
    // g
    const DEAL_DATA = function (data) {
      let ret = data.ret
      if (parseInt(ret, 10) === 1) {
        let [index, base64, title, paragraph] = [num, data.data.address, data.data.title, data.data.paragraph]
        commit('updateBannerElement', {index, base64, title, paragraph})
        dispatch('fetchAllBanner', ++num)
      }
    }
    // 判断ls里有无缓存
    const LS_IMG = localStorage.getItem(`banner${num}`)
    if (LS_IMG) {
      let data = JSON.parse(LS_IMG)
      DEAL_DATA(data)
      return
    }
    axios.get(`static/img/banner/banner${num}.json`)
      .then(
        res => {
          let data = res.data
          localStorage.setItem(`banner${num}`, JSON.stringify(data))
          DEAL_DATA(data)
        }
      )
      .catch(
        () => {}
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
  updateBannerElement (state, {index, base64, title, paragraph}) {
    Vue.set(
      state.BannerElement,
      index,
      {
        title: title,
        paragraph: paragraph,
        address: base64
      }
    )
    // state.BannerElement[index] = {
    //   title: '夏目友人帐 + ' + index,
    //   paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了 + ' + index,
    //   address: base64
    // }
    // console.log(state.BannerElement)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
