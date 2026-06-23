<template>
  <div class="projects">
    <h2>我的项目</h2>

    <!-- 加载状态 -->
    <div v-if="loading" class="loading">加载中...</div>

    <!-- 错误状态 -->
    <div v-if="error" class="error">{{ error }}</div>

    <!-- 项目列表 -->
    <div v-if="!loading && !error" class="project-list">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="tags">
          <span v-for="tech in project.techStack.split(',')" :key="tech">
            {{ tech.trim() }}
          </span>
        </div>
        <a :href="project.githubUrl" target="_blank">查看代码 →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 数据
const projects = ref([])
const loading = ref(true)
const error = ref(null)

// 获取项目列表
const fetchProjects = async () => {
  try {
    loading.value = true
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects`)
    // 后端返回格式: { code: 200, msg: "success", data: [...] }
    projects.value = response.data.data
  } catch (err) {
    error.value = '加载项目失败，请检查后端服务是否启动'
    console.error('fetchProjects error:', err)
  } finally {
    loading.value = false
  }
}

// 组件挂载时自动调用
onMounted(() => {
  fetchProjects()
})
</script>

<style scoped>
.projects {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}
.project-list {
  display: grid;
  gap: 20px;
}
.project-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  background: #f9f9f9;
}
.project-card h3 {
  margin-top: 0;
}
.tags span {
  display: inline-block;
  background: #eee;
  padding: 2px 12px;
  border-radius: 12px;
  margin: 4px 4px 0 0;
  font-size: 13px;
}
.project-card a {
  display: inline-block;
  margin-top: 12px;
  color: #42b883;
  text-decoration: none;
}
.loading {
  text-align: center;
  color: #666;
  padding: 40px;
}
.error {
  text-align: center;
  color: #e74c3c;
  padding: 40px;
}
</style>