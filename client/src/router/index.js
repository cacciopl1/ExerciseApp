import Vue from 'vue'
import VueRouter from 'vue-router'
import session from '../models/session'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/tracked',
    name: 'Tracked',
    component: () => import('../views/Tracked.vue'),
    beforeEnter: checkSessionUser
  },
  {
    path: '/signup',
    name: 'Login',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/settings',
    name: 'Setting',
    component: () => import('../views/Settings.vue'),
    beforeEnter: checkSessionUser
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/PostAWorkout.vue'),
    beforeEnter: checkSessionUser
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    beforeEnter: checkSessionUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function checkSessionUser (to, from, next) {
  if(session.user)
  {
    next();
  }
  else
  {
    next('Login')
  }
}