import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 定义数据
const state = {
  count: 1
}
// 定义方法，通过方法改变state中的值
const mutations = {
  incCount () {
    ++state.count
  }
}
const store = new Vuex.Store({
  state,
  mutations: mutations
})
export default store
