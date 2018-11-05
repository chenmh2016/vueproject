<template>
  <div id="home">
    我是新闻组件{{this.$store.state.count}} ---{{this.$store.getters.computedCount}}
    <button @click="incCount1()">click</button>
    <br>
    <ul>
      <button @click="goHome()">通过js跳转到home页面</button>
      <p>动态路由传值</p>
      <li v-for="(item,index) in list" v-bind:key="index" >
        <router-link :to="'/Content/'+index" >{{index}}---{{item}}</router-link>
      </li>
      <p>get传值</p>
      <li v-for="(item,index) in list" v-bind:key="index" >
        <router-link :to="'/GetContent?aid='+index+'99'" >{{index}}---{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../vuex/store'
export default {
  store,
  data () {
    return {
      list: [],
      msg: ' 我是一个新闻组件 ',
      value: null
    }
  },
  methods: {
    goHome () {
      this.$route.push('home')
    },
    requestData () {
      console.log('请求数据了')
      // var api = '/mock/test.json'
      // this.$http.get(api).then(res) => {
      //   console.log(res);
      //   this.list = res.body.result;
      // }
      this.list = ['aa', 'bbb', 'ccc']
      // 把list数据放入store里面
      this.$store.commit('addList', this.list) // 往mutations中传值
    },
    incCount1 () {
      this.$store.commit('incCount')
    }
  },
  mounted () {
    // 初次进入的时候先去store中拿数据，然后判断数据的长度，如果有数据就用这个数据，如果没有数据就去加载数据
    var listData = this.$store.state.list
    if (listData.length > 0) {
      console.log('listData有数据，没有去请求api', listData)
      this.list = listData[0]
      console.log('后来', this.list)
    } else {
      this.requestData()
      console.log('开始', this.list)
    }
  }
}

</script>
