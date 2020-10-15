import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/views/city/index')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/detail/index')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
