<template>
  <div id="content">
    我是详情
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是详情'
    }
  },
  mounted () {
    let routeParm = this.$route.params
    console.log('动态路由传值', routeParm)
  }
}
</script>
