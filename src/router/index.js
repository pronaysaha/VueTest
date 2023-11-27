// src/router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Dashboard from '@/components/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
]

const router = new VueRouter({
  routes,
})

export default router
