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
          },
          {
            path: '/question',
            name: 'question',
            component: () => import ('../views/question/question.vue')
          },
          {
            path: '/practice',
            name: 'practice',
            component: () => import ('../views/practice/practice.vue')
          },
          {
            path: '/statistics',
            name: 'statistics',
            component: () => import ('../views/statistics/statistics.vue')
          },
          {
            path: '/exportpdf',
            name: 'exportpdf',
            component: () => import ('../views/exportpdf/exportpdf')
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
