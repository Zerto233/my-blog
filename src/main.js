import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import LoginView from './views/LoginView.vue'
import AdminView from './views/AdminView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/login', component: LoginView },
  { path: '/admin', component: AdminView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')