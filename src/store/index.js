import Vue from 'vue'
import Vuex from 'vuex'
import UI from './modules/UI'
import Footer from './modules/footer'
import Home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UI,
    Footer,
    Home
  }
})
