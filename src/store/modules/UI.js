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
      address: '/static/img/banner/0.jpg'
    },
    {
      title: '夏目友人帐',
      paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了',
      address: '/static/img/banner/1.jpg'
    },
    {
      title: '夏目友人帐',
      paragraph: '世上存在着无论如何期望也无法得到的东西，既然如此，干脆忘掉好了',
      address: '/static/img/banner/2.jpg'
    }
  ],
  MoodImgElement: '/static/img/mood/img/0.jpg'
}

const getters = {
  getMenuActive: state => state.MenuActive,
  getBannerElement: state => state.BannerElement,
  getBaseLayout: state => state.BaseLayout,
  getMoodImgElement: state => state.MoodImgElement
}

const actions = {}

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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
