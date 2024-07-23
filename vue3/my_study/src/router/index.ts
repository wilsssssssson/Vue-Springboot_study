import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import AboutView from '@/views/AboutView.vue'
import WatchView from '@/views/WatchView.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      path:'/watch',
      component:WatchView
    },
    {
      path:'/about',
      component:AboutView
    },
  ]
})

// 暴露出去router
export default router