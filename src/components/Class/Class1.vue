<template>
  <div>
  <p v-for="(item,key) in list" :key="key" :class="{active:choosedIndex==key}" @click="clickFun(key,item)">{{item.name}}</p>
    <class-child :choosed-name="choosedName" :obj="obj"></class-child>
  </div>
</template>
<script>
import ClassChild from './ClassChild'
export default {
  components: {
    ClassChild
  },
  data () {
    return {
      obj: {
        'title': '测试watch',
        'id': 4,
        'content': '真的不会检测到吗'
      },
      list: [{'name': '111', 'key': 0}, {'name': '222', 'key': 1}, {'name': '333', 'key': 2}],
      choosedIndex: -1,
      choosedName: ''
    }
  },
  methods: {
    clickFun: function (key, item) {
      this.choosedName = item.name
      this.choosedIndex = key
      this.obj.title = '我的名字改变过了'
      // this.obj.id = 456
    }
  }
}
</script>
<style>
  .active{
    color:red
  }
</style>
