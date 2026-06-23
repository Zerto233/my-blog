<template>
  <div class="login-container">
    <div class="login-card">
      <h2>管理后台登录</h2>
      <p class="hint">输入账号密码管理项目内容</p>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>用户名</label>
          <input type="text" v-model="username" placeholder="admin" required />
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" v-model="password" placeholder="请输入密码" required />
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? '登录中...' : '登录' }}
        </button>
        <p v-if="error" class="error-msg">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/login`, {
      username: username.value,
      password: password.value
    })

    if (response.data.code === 200) {
      localStorage.setItem('adminToken', response.data.data.token)
      localStorage.setItem('adminUsername', response.data.data.username)
      router.push('/admin')
    } else {
      error.value = response.data.msg || '登录失败'
    }
  } catch (err) {
    error.value = '连接失败，请确保后端服务已启动'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}
.login-card {
  background: white;
  padding: 40px 48px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  width: 100%;
  max-width: 380px;
}
.login-card h2 {
  text-align: center;
  margin-bottom: 4px;
}
.hint {
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-bottom: 24px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
}
.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
}
.form-group input:focus {
  border-color: #42b883;
  outline: none;
}
button {
  width: 100%;
  padding: 12px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
button:hover:not(:disabled) {
  background: #36a06f;
}
button:disabled {
  opacity: 0.6;
}
.error-msg {
  color: #e74c3c;
  margin-top: 12px;
  text-align: center;
  font-size: 14px;
}
</style>