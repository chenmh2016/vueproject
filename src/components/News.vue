<template>
  <div id="home">
    我是新闻组件{{this.$store.state.count}}
    <button @click="incCount1()">click</button>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  store,
  data () {
    return {
      msg: ' 我是一个新闻组件 ',
      value: null
    }
  },
  methods: {
    incCount1 () {
      this.$store.commit('incCount')
    }
  }
}
</script>
