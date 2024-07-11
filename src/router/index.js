import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Tasks from '../views/TaskView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router