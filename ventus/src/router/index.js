import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClimaView from '../views/ClimaView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/clima', component: ClimaView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router