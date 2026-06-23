<template>
  <div class="admin">
    <!-- 顶部栏 -->
    <div class="admin-header">
      <h2>📁 项目管理</h2>
      <div>
        <span class="username">👤 {{ username }}</span>
        <button @click="logout" class="logout-btn">退出</button>
      </div>
    </div>

    <!-- 新增/编辑表单 -->
    <div class="form-panel">
      <h3>{{ editing ? '✏️ 编辑项目' : '➕ 新增项目' }}</h3>
      <form @submit.prevent="saveProject">
        <div class="form-row">
          <input v-model="form.name" placeholder="项目名称 *" required />
          <input v-model="form.description" placeholder="项目描述" />
        </div>
        <div class="form-row">
          <input v-model="form.techStack" placeholder="技术栈（逗号分隔，如 Java, Spring Boot）" />
          <input v-model="form.githubUrl" placeholder="GitHub 链接" />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-primary">
            {{ editing ? '更新' : '添加' }}
          </button>
          <button type="button" @click="resetForm" v-if="editing" class="btn-cancel">
            取消编辑
          </button>
        </div>
      </form>
    </div>

    <!-- 项目列表 -->
    <div class="project-list">
      <div class="project-item" v-for="project in projects" :key="project.id">
        <div class="project-info">
          <h4>{{ project.name }}</h4>
          <p>{{ project.description || '暂无描述' }}</p>
          <span class="tech">{{ project.techStack || '未标注技术栈' }}</span>
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="github-link">
            GitHub →
          </a>
        </div>
        <div class="project-actions">
          <button @click="editProject(project)" class="btn-edit">编辑</button>
          <button @click="deleteProject(project.id)" class="btn-delete">删除</button>
        </div>
      </div>
      <p v-if="projects.length === 0" class="empty">暂无项目，添加一个吧 🚀</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const username = ref(localStorage.getItem('adminUsername') || '')

const projects = ref([])
const form = ref({ id: null, name: '', description: '', techStack: '', githubUrl: '' })
const editing = ref(false)

const getToken = () => localStorage.getItem('adminToken')

// 获取项目列表
const fetchProjects = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects`)
    projects.value = response.data.data || []
  } catch (err) {
    console.error('获取项目失败:', err)
  }
}

// 保存项目（新增或更新）
const saveProject = async () => {
  const token = getToken()
  if (!token) {
    router.push('/login')
    return
  }

  try {
    const headers = { Authorization: `Bearer ${token}` }

    if (editing.value) {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/projects/${id}`,
        form.value,
        { headers }
      )
    } else {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/projects`, form.value, { headers })
    }

    resetForm()
    await fetchProjects()
  } catch (err) {
    if (err.response?.status === 401) {
      alert('登录已过期，请重新登录')
      router.push('/login')
    } else {
      alert('保存失败，请重试')
    }
  }
}

// 删除项目
const deleteProject = async (id) => {
  if (!confirm('确定要删除这个项目吗？')) return

  const token = getToken()
  if (!token) {
    router.push('/login')
    return
  }

  try {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/projects/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    await fetchProjects()
  } catch (err) {
    if (err.response?.status === 401) {
      alert('登录已过期，请重新登录')
      router.push('/login')
    } else {
      alert('删除失败，请重试')
    }
  }
}

// 编辑项目（填充表单）
const editProject = (project) => {
  form.value = { ...project }
  editing.value = true
}

// 重置表单
const resetForm = () => {
  form.value = { id: null, name: '', description: '', techStack: '', githubUrl: '' }
  editing.value = false
}

// 退出登录
const logout = () => {
  localStorage.removeItem('adminToken')
  localStorage.removeItem('adminUsername')
  router.push('/login')
}

// 检查登录状态
const checkAuth = () => {
  if (!getToken()) {
    router.push('/login')
  }
}

onMounted(() => {
  checkAuth()
  fetchProjects()
})
</script>

<style scoped>
.admin {
  padding: 24px 20px;
  max-width: 900px;
  margin: 0 auto;
}
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #42b883;
  padding-bottom: 16px;
  margin-bottom: 24px;
}
.admin-header h2 {
  margin: 0;
}
.username {
  color: #555;
  margin-right: 12px;
}
.logout-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 6px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
.logout-btn:hover {
  background: #c0392b;
}
.form-panel {
  background: #f8f9fa;
  padding: 20px 24px;
  border-radius: 12px;
  margin-bottom: 28px;
  border: 1px solid #eee;
}
.form-panel h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
}
.form-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.form-row input {
  flex: 1;
  min-width: 180px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}
.form-row input:focus {
  border-color: #42b883;
  outline: none;
}
.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}
.btn-primary {
  background: #42b883;
  color: white;
  border: none;
  padding: 10px 28px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
.btn-primary:hover {
  background: #36a06f;
}
.btn-cancel {
  background: #95a5a6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
.btn-cancel:hover {
  background: #7f8c8d;
}
.project-list {
  border-top: 1px solid #eee;
  padding-top: 16px;
}
.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #f0f0f0;
}
.project-item:hover {
  background: #fafafa;
}
.project-info {
  flex: 1;
}
.project-info h4 {
  margin: 0 0 4px 0;
  font-size: 16px;
}
.project-info p {
  margin: 2px 0;
  color: #666;
  font-size: 14px;
}
.tech {
  background: #e8f5e9;
  color: #2e7d32;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  display: inline-block;
  margin-top: 4px;
}
.github-link {
  display: inline-block;
  margin-left: 12px;
  color: #42b883;
  font-size: 13px;
  text-decoration: none;
}
.github-link:hover {
  text-decoration: underline;
}
.project-actions {
  display: flex;
  gap: 8px;
}
.btn-edit {
  background: #3498db;
  color: white;
  border: none;
  padding: 4px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}
.btn-edit:hover {
  background: #2980b9;
}
.btn-delete {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 4px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}
.btn-delete:hover {
  background: #c0392b;
}
.empty {
  text-align: center;
  color: #999;
  padding: 30px 0;
}
</style>