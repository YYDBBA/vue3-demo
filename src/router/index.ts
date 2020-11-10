import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import Login from './../views/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: ()=>import('./../views/Home.vue')
  },
  {
    path: '/video',
    component: ()=>import('./../views/Video.vue')
  }
]
})
export default router