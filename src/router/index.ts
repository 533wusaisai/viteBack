import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import router from './router'
const routes: Array<RouteRecordRaw> = router

const route = createRouter({
  history: createWebHistory(),
  routes,
})
route.beforeEach((to, from, next) => {
  // 跳转404页面
  if (to.matched.length === 0) {
    // from.name ? next({ name: from.name }) : next('/404')
    next('/404')
  }
  // 登录拦截
  if (to.path !== '/login' && !localStorage.token) {
    return next('/login')
  }
  //封装请求中  //在跳转路由之前，先清除所有的请求
  // clearPending()
  next()
})
export default route
