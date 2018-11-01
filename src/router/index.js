import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import TodoList from '@/components/TodoList/TodoList'
import ExecComp from '@/components/EventHandle/ExecComp'
import Home from '@/components/home'
import News from '@/components/news'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/exec',
      name: 'exec',
      component: ExecComp
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
