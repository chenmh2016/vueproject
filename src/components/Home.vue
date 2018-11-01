<template>
  <div id="home">
    我是首页组件{{this.$store.state.count}}
    <button @click="incCount()">click</button>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  store,
  methods: {
    incCount () {
      this.$store.commit('incCount')
    }
  }
}
</script>
