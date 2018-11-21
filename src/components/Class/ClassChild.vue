<template>
  <div>hello {{choosedName}}
    <br>
    hello {{obj.title}}---{{obj.id}}</div>
</template>
<script>
export default {
  props: ['choosedName', 'obj'],
  methods: {
    objFun: function () {
      alert(this.obj)
    }
  },
  watch: {
    // 这种做法第一次进来不执行
    // choosedName: function (val) {
    //   alert(val)
    // }
    // 这种做法第一次进来就执行
    choosedName: {
      handler (newVal, oldVal) {
        // alert(newVal)
      },
      immediate: false
    },
    // deep 当需要监听一个对象的时候，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能监听到变化，此时就需要deep属性对对象进行深度监听
    // obj: function (o, n) {
    //   alert('改变了obj')
    // }
    // 上面普通的watch真的不能检测到obj的变化，我改变了obj的title属性没有alert
    obj: {
      handler (n, o) {
        this.objFun()
      },
      deep: true
    }
    // 使用这种方式可以检测到obj属性的变化 ，但是这种方法会给obj的每一个属性增加handler，当对象属性值很多的时候，而我们只需要检测一个属性，可以做到下面的优化：
    // 使用字符串的形式监听对象的属性
    // 'obj.title': {
    //   handler (n, o) {
    //     this.objFun()
    //   },
    //   deep: true
    // }

  }
}
</script>
