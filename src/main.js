import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'

// 定义路由规则
const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 创建应用并挂载路由
const app = createApp(App)
app.use(router)
app.mount('#app')
