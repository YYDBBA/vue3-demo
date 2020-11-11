import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Login from './../views/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    component: Login
  },
  {
    path: '/tabbar',
    redirect: '/tabbar/home',
    component: () => import('./../views/Tabbar.vue'),
    children: [
      {
        path: '/tabbar/home',
        component: () => import('./../views/tab-page/Home.vue')
      }, {
        path: '/tabbar/info',
        component: () => import('./../views/tab-page/Info.vue')
      }, {
        path: '/tabbar/class',
        component: () => import('./../views/tab-page/Class.vue')
      }, {
        path: '/tabbar/mine',
        component: () => import('./../views/tab-page/Mine.vue')
      },
    ]
  },
  {
    path: '/video',
    component: () => import('./../views/Video.vue')
  }
  ]
})
export default router