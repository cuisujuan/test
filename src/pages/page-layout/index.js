// css for current page
import Vue from 'vue'
import VueRouter from 'vue-router'
import './index.less'
// 通用工具库演示，维护者：@龙佳
// import { cookie, date, network, url, ua, util } from "@vdian/sheer"
// 子页面
import Main from './index.vue'

// 初始化
Vue.use(VueRouter)

const router = new VueRouter({
  // 添加路由
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
  // 添加路由结束
})

new Vue({
  router
}).$mount('#app')
