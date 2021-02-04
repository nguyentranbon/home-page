import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    authElem: 'login',
    authSeller : 'login-seller',
    current : 'login-seller',
    overlay: false,
  },
  mutations: {
    setAuthElem (state, action) {
      state.authElem = action
    },
    setAuthSeller (state, action) {
        state.authSeller = action
    },
    setOverlay (state, action) {
      state.overlay = action === true
    },
  },
  actions: {
  },
  modules: {
  },

})
