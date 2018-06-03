import Vue from 'vue'
import Vuex from 'vuex'
import UI from './modules/UI'
import Footer from './modules/footer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UI,
    Footer
  }
})
