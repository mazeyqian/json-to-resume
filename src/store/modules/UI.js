const state = {
  // 基本布局
  BaseLayout: {
    GridGutter: 20,
    BannerHeight: 0,
    MoodHotHeight: 0,
    MoodHotWidth: 0,
    MoodImgHeight: 0
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
      address: '/static/img/banner/0.jpg'
    },
    {
      title: '夏目友人帐',
      address: '/static/img/banner/1.jpg'
    },
    {
      title: '夏目友人帐',
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
