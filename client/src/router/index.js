import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/',
    name: 'login',
    component: () => import (/* webpackChunkName: "login" */'../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import (/* webpackChunkName: "register" */'../views/Register.vue')
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: () => import (/* webpackChunkName: "mainpage" */'../views/MainPage.vue'),
    children: [
      {
        path: '/questionform',
        name: 'questionform',
        component: () => import ('../components/QuestionForm.vue')
      },
      // {
      //   path: '/detail/:questionId',
      //   name: 'questiondetail',
      // }
      {
        path: '/myquestions',
        name: 'myQuestions',
        component: () => import ('../components/MyQuestions.vue')
      },
      {
        path: '/publish',
        name: 'publish',
        component: () => import ('../components/PublishQuestions.vue')
      },
      {
        path: '/detail/:questionId',
        name: 'detail',
        component: () => import ('../components/Detail.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
