<template>
  <div>表单输入绑定
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
    <label for="jack">jack</label>
    <input type="checkbox" id="john" value="john" v-model="checkedNames">
    <label for="jack">john</label>
    <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
    <label for="jack">mike</label>
    <br>
    <span>checked names：{{checkedNames}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkedNames: []
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
