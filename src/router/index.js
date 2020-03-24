import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from '../views/Root.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    redirect: '/home',
    children: [
      {
        path: '/nologin',
        name: 'NoLogin',
        component: () => import('../views/Me/NoLogin.vue')
      },
      {
        path: '/me',
        name: "Me",
        component: () => import('../views/Me/Me.vue'),
        children: [
          {
          path: '/home',
          name: 'Home',
          component: () => import ('../views/Home/home.vue')
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
