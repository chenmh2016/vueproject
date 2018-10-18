<template>
  <div class="box">
    <h1>My Todo App!</h1>
    <BaseInputText v-model.trim="newTodoText" placeholder="new todo" @keydown.enter="addTodo"/>
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id" @remove="removeTodo">{{todo.text}}</TodoListItem>
    </ul>
  </div>
</template>
<script>
import BaseInputText from './BaseInputText'
import TodoListItem from './TodoListItem'
let nextTodoId = 1
export default {
  components: {
    BaseInputText, TodoListItem
  },
  // 每一个组件的data选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝。如果vue没有这条规则，点击要给按钮就可以会像如下代码一样影响到其他实例。
  data () {
    return {
      newTodoText: '',
      todos: [
        { id: nextTodoId++,
          text: 'learn vue'
        },
        {
          id: nextTodoId++,
          text: 'learn ng'
        },
        {
          id: nextTodoId++,
          text: 'learn react'
        }
      ]
    }
  },
  methods: {
    addTodo () {
      const trimmedText = this.newTodoText.trim()
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText
        })
        this.newTodoText = ''
      }
    },
    removeTodo (idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove
      })
    }
  }
}
</script>
<style scoped>
  *, *::before, *::after {
    box-sizing: border-box;
  }
  .box {
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.4;
    color: #00c185;
  }
  h1 {
    text-align: center;
  }
  p {
    color: red
  }
</style>
