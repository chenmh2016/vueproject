<template>
  <div>我是第一个页面
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      input: '',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    color: red;
  }
  div{
    max-width: 400px;
    margin: 0 auto;
  }
</style>
