<template>
  <div class="home">
    <section class="hero">
      <div class="avatar">
        <img src="/src/assets/avatar.jpg" alt="头像" />
      </div>
      <h1>你好，我是 <span class="highlight">周艳兴</span></h1>
      <p class="subtitle">广东药科大学 · 计算机科学与技术 · 大三</p>
      <p class="desc"></p>

      <!-- 技术标签 -->
      <div class="tech-tags">
        <span v-for="tech in techs" :key="tech.name" class="tag">
          {{ tech.name }}
        </span>
      </div>

      <!-- 🆕 醒目按钮 -->
      <div class="cta-wrapper">
        <router-link to="/projects" class="cta-btn">
          <span>📂 查看我的项目</span>
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </router-link>
      </div>

      <!-- 一句话标签 -->
      <div class="badge">
        🚀 目前正在寻找实习机会
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
/* CTA 按钮 */
.cta-wrapper {
  margin: 28px 0 16px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 40px;
  background: linear-gradient(135deg, #42b883, #2d8f5c);
  color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(66, 184, 131, 0.35);
}

.cta-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 32px rgba(66, 184, 131, 0.45);
}

.cta-btn:active {
  transform: scale(0.97);
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.cta-btn:hover .arrow-icon {
  transform: translateX(4px);
}
</style>