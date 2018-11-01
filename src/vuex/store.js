import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 定义数据
const state = {
  count: 1,
  list: []
}
// 定义方法，通过方法改变state中的值
const mutations = {
  addList (state, data) { // 需要传值的情况
    state.list.push(data)
  },
  incCount () { // 不需要传值的情况
    ++state.count
  }
}
// 类似于计算属性，改变state里面的count数据的时候会触发getters里面的方法，获取新的值，但是基本用不到
const getters = {
  computedCount: (state) => {
    return state.count * 2
  }
}
// action提交的是mutation，而不是直接改变数据，但是可以使用异步的方法
const actions = {
  incMutationCount (context) { // 因此可以通过调用context.commit提交要给mutation
    context.commit('incCount') // 执行mutations里面的incCount方法改变state里面的数据
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
