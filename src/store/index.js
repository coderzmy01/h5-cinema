import vuex from 'vuex'
import vue from 'vue'
import cinema from './modules/cinme'
import city from './modules/city'
import createPersistedState from 'vuex-persistedstate'
vue.use(vuex)
export default new vuex.Store({
  plugins:[createPersistedState()],
  modules: {
    cinema,
    city
  }
})