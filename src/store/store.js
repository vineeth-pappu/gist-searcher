import Vue from 'vue'
import Vuex from 'vuex'
import { getAllGistByUsername } from "../services/GistService";


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userGists: [],
    gistFilters: {
        searchStr: ""
    }
  },
  
  getters: {
    userGists: state => state.userGists,
    userGistsLength: state => state.userGists.length
  },
  
  mutations: {
    setUserGists (state, gists) {
      state.userGists = gists
    },
    updateGistFilter (state, filterObj) {
      state.gistFilters = {  ...state.gistFilters , ...filterObj}
    },
  },
  
  actions: {
      async fetchAllGists({ commit }, username) {
          const result = await getAllGistByUsername(username);
          commit('setUserGists', result)
      }
  }
})


export default store;