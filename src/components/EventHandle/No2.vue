<template>
  <div>事件 处理 no2
    <button v-on:click='greet'>greet</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'vue.js'
    }
  },
  methods: {
    greet: function (event) {
      // this在方法中指向当前vue实例
      alert('hello' + this.name + '!')
      // event是原生dom事件
      if (event) {
        alert(event.target.tagName)
      }
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
