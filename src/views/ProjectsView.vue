<template>
  <div class="projects">
    <h2>📁 我的项目</h2>

    <div v-if="loading" class="loading">加载中...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="!loading && !error" class="project-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="card-image">
          <span class="emoji">📦</span>
        </div>
        <div class="card-body">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description || '暂无描述' }}</p>
          <div class="tags">
            <span v-for="tech in project.techStack?.split(',') || []" :key="tech">
              {{ tech.trim() }}
            </span>
          </div>
          <div class="card-footer">
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank">查看代码 →</a>
            <span v-else class="no-link">代码暂未公开</span>
          </div>
        </div>
      </div>
    </div>

    <p v-if="!loading && !error && projects.length === 0" class="empty">
      暂无项目，请稍后再来 🚀
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const projects = ref([])
const loading = ref(true)
const error = ref(null)

const fetchProjects = async () => {
  try {
    loading.value = true
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'
    const response = await axios.get(`${baseUrl}/api/projects`)
    projects.value = response.data.data || []
  } catch (err) {
    error.value = '加载项目失败，请稍后重试'
    console.error('fetchProjects error:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProjects()
})
</script>

<style scoped>
.projects {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  font-size: 28px;
  margin-bottom: 24px;
  color: #1a1a2e;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.10);
  border-color: #42b883;
}

.card-image {
  height: 120px;
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}

.card-body {
  padding: 20px 20px 16px;
}

.card-body h3 {
  margin: 0 0 6px 0;
  font-size: 18px;
  color: #1a1a2e;
}

.card-body p {
  margin: 0 0 12px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  min-height: 40px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.tags span {
  background: #f0fdf4;
  color: #166534;
  padding: 2px 12px;
  border-radius: 12px;
  font-size: 12px;
}

.card-footer a {
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
}

.card-footer a:hover {
  text-decoration: underline;
}

.no-link {
  color: #aaa;
  font-size: 14px;
}

.loading,
.error,
.empty {
  text-align: center;
  padding: 40px;
  color: #888;
}
</style>