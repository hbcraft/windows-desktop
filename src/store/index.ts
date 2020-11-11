import Vue from 'vue'
import Vuex from 'vuex'
import themes from './modules/themes'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {
    isLogin: false
  },
  mutations: {
    login (state) {
      state.isLogin = true
    }
  },
  actions: {
  },
  modules: {
    themes
  }
})
