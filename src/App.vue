<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-brand">
        <span class="logo">✦</span> 周艳兴
      </div>
      <div class="nav-links">
        <router-link to="/">首页</router-link>
        <router-link to="/projects">项目</router-link>
      </div>
    </nav>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <p>© 2026 周艳兴 · 用 ❤️ 和 ☕ 构建</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #fafafa;
  color: #1a1a2e;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.nav-brand {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a2e;
}

.logo {
  color: #42b883;
  margin-right: 6px;
}

.nav-links a {
  margin-left: 28px;
  text-decoration: none;
  color: #555;
  font-size: 15px;
  transition: color 0.2s;
  font-weight: 500;
}

.nav-links a:hover {
  color: #42b883;
}

.nav-links a.router-link-active {
  color: #42b883;
  font-weight: 600;
}

main {
  min-height: 70vh;
}

.footer {
  text-align: center;
  padding: 32px 20px;
  color: #aaa;
  font-size: 14px;
  border-top: 1px solid #f0f0f0;
  margin-top: 40px;
}
</style>