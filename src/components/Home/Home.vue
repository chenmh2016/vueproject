<template>
  <div id="home">
    我是首页组件{{this.$store.state.count}}-----{{this.$store.getters.computedCount}}
    <button @click="incCount()">click</button>
  </div>
</template>

<script>
import store from '../../vuex/store'
export default {
  store,
  methods: {
    incCount () {
      // this.$store.commit('incCount') // 出发mutations里面的方法改变state里面的数据
      this.$store.dispatch('incMutationCount') // 出发action中的方法
    }
  }
}
</script>
