<template>
  <div class="home">
    <section class="hero">
      <div class="avatar">
        <img src="/src/assets/avatar.jpg" alt="头像" />
      </div>
      <h1>你好，我是 <span class="highlight">周艳兴</span></h1>
      <p class="subtitle">广东药科大学 · 计算机科学与技术 · 大三</p>
      <p class="desc">热爱后端开发，正在探索全栈技术</p>

      <!-- 技术标签 -->
      <div class="tech-tags">
        <span v-for="tech in techs" :key="tech.name" class="tag">
          {{ tech.name }}
        </span>
      </div>

      <!-- 一句话标签 -->
      <div class="badge">
        🚀 目前正在寻找后端开发实习机会
      </div>
    </section>
  </div>
</template>

<script setup>
const techs = [
  { name: 'Java' },
  { name: 'Spring Boot' },
  { name: 'Vue 3' },
  { name: 'MySQL' },
  { name: 'PostgreSQL' },
  { name: 'Git' },
  { name: 'Linux' },
]
</script>

<style scoped>
.home {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  text-align: center;
  padding: 40px 20px;
  max-width: 700px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #42b883, #2d8f5c);
  padding: 4px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: white;
  display: block;
}

h1 {
  font-size: 36px;
  margin: 0 0 8px 0;
  color: #1a1a2e;
}

.highlight {
  color: #42b883;
}

.subtitle {
  font-size: 18px;
  color: #555;
  margin: 0 0 4px 0;
}

.desc {
  font-size: 16px;
  color: #888;
  margin: 0 0 24px 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 16px 0 24px;
}

.tag {
  background: #f0fdf4;
  color: #166534;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #bbf7d0;
  transition: all 0.2s;
  cursor: default;
}

.tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.2);
}

.badge {
  display: inline-block;
  background: #1a1a2e;
  color: white;
  padding: 8px 24px;
  border-radius: 30px;
  font-size: 14px;
  margin-top: 8px;
}
</style>