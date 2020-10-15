import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: window.localStorage.city || '北京'
  },
  mutations: {
    setCity(state,payload) {
      state.city = payload;
      window.localStorage.city = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
