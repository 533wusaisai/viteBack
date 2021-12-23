import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import route from './router'
const routes: Array<RouteRecordRaw> = route

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  // 登录拦截
  if (to.path !== '/login' && !localStorage.token) {
    return next('/login')
  }
  next()
  //在跳转路由之前，先清除所有的请求
  // clearPending()
})
export default router
