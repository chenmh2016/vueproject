import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import TodoList from '@/components/TodoList/TodoList'
import ExecComp from '@/components/EventHandle/ExecComp'
import Home from '@/components/home'
import News from '@/components/Router/news'
import Content from '@/components/Router/Content'
import GetContent from '@/components/Router/GetContent'
import Dashboard from '@/components/Dashboard'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/first',
//       name: 'First',
//       component: First
//     },
//     {
//       path: '/todoList',
//       name: 'TodoList',
//       component: TodoList
//     },
//     {
//       path: '/exec',
//       name: 'exec',
//       component: ExecComp
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/news',
//       name: 'news',
//       component: News
//     }
//   ]
// })

// 定义路由
const routes = [
  {
    path: '*',
    redirect: '/todoList'

  },
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
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
  },
  {
    path: '/Content/:aid', // 动态路由跳转，带参数
    name: 'Content',
    component: Content
  },
  {
    path: '/GetContent', // get传值
    name: 'GetContent',
    component: GetContent
  }
]
// 实例化Router
const route = new Router({
  routes
})
// 导出
export default route
