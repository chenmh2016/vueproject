<template>
  <div id="content">
    我是通过get传值得到的页面
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是通过get传值得到的页面'
    }
  },
  mounted () {
  // 获取get传值
    let getValue = this.$route.query
    console.log('get传值', getValue)
  }
}
</script>
