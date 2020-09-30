import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    name:'',
    ok:false,
    goodsList:[]
  },
  mutations,
  actions,
  modules: {}
})
