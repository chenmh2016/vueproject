<template>
  <div>事件 处理
    <button v-on:click="counter+=1">Add 1</button>
    <p>the button above has been clicked {{counter}} times.</p>
    <h>----------------------</h>
    <No2 />
    <br>
    <No3 />
  </div>
</template>

<script>
import No2 from './No2'
import No3 from './No3'
export default {
  components: {
    No2, No3
  },
  data () {
    return {
      counter: 0
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
