<template>
  <div>事件 处理 no2
    <button v-on:click='greet'>greet</button>
  <span>{{msg}}</span>
    <button @click="updateMessage">msg改变</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'vue.js',
      msg: 'not updated'
    }
  },
  methods: {
    updateMessage: function () {
      this.msg = 'updated'
      console.log(this.$el.textContent)
      this.$nextTick(function () {
        console.log(this.$el.textContent)
      })
    },
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
