// import axios from 'axios'
// import GlobalVariate from '@/global/global-variate.js'

const state = {
  defaultTextColor: '#7E7E7E',
  defaultLineColor: '#DFDFDF',
  defaultSplitColor: '#F7F7F7',
  defaultLineFontSize: '10px',
  idapDefaultFontColor: '#494949',
  // body 整体背景色
  idapBodyBgc: '#EEEEEE',
  // 图表背景色
  idapChartBgc: '#FFFFFF',
  // 浏览器宽度
  clientWidth: 0,
  realDataTabShow: true,
  isUserManager: false,
  // 权限
  permission: {
    Production: false, // 生产环境 写错了，应该是测试环境 = debugger
    UserManager: false, // 101
    UserManagerEditActivity: false, // 102
    UserManagerRoleManager: false, // 201
    UserManagerEditRole: false, // 202
    UserManagerUserManager: false, // 301
    UserManagerEditUser: false, // 302
    UserManagerUserStatistic: false, // 401
    RealData: false, // 501
    DataAnalyze: false // 502
  }
}

const getters = {}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
