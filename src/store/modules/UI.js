const state = {
  // 菜单
  MenuActive: {
    home: true,
    link: false,
    subMenu: false
  }
}

const getters = {
  getMenuActive: state => state.MenuActive
}

const actions = {}

const mutations = {
  tabMenu (state, menuName) {
    for (let key in state.MenuActive) {
      if (state.MenuActive.hasOwnProperty(key)) {
        state.MenuActive[key] = menuName === key ? Boolean(1) : Boolean(0)
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
