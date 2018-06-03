import axios from 'axios'
import {camelCaseToKebabCase} from '@/scss/mazey-ui/src/js/index.js'

const state = {
  FooterSocialMedia: [],
  FooterSpecialSubject: [],
  FooterFriendlyLink: []
}

const getters = {
  getFooterSocialMedia: state => state.FooterSocialMedia,
  getFooterSpecialSubject: state => state.FooterSpecialSubject,
  getFooterFriendlyLink: state => state.FooterFriendlyLink
}

const actions = {
  fetchFooterLink ({state, commit, dispatch}, linkName) {
    axios.get(`/static/data/footer/${camelCaseToKebabCase(linkName)}.json`)
      .then(
        res => {
          let links = res.data.data.links
          commit('updateFooterLink', {linkName, links})
        }
      )
  }
}

const mutations = {
  updateFooterLink (state, {linkName, links}) {
    state[`Footer${linkName}`] = links
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
