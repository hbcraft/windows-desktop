import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* chunkName: login */'@/views/Login.vue')
  },
  {
    path: '/',
    name: 'desktop',
    component: () => import(/* chunkName: desktop */'@/views/Desktop.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = store.state.isLogin
  if (to.name !== 'login' && !isLogin) next({ name: 'login' })
  if (to.name === 'login' && isLogin) next({ name: 'desktop' })
  next()
})

export default router
