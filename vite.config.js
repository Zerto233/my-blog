import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/my-blog/'   // ⚠️ 这里的名字必须和你的 Gitee 仓库名完全一致
})