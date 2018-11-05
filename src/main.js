// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import('./assets/css/reset.css')
Vue.use(Element)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
// 挂载，包括挂载路由
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
