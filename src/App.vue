<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-brand">周艳兴</div>
      <div class="nav-links">
        <router-link to="/">首页</router-link>
        <router-link to="/projects">项目</router-link>
      </div>
    </nav>

    <!-- 页面内容渲染在这里 -->
    <router-view />
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
  background: #fff;
  color: #333;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  border-bottom: 1px solid #eee;
  background: white;
}
.nav-brand {
  font-size: 20px;
  font-weight: bold;
  color: #42b883;
}
.nav-links a {
  margin-left: 24px;
  text-decoration: none;
  color: #555;
  font-size: 16px;
}
.nav-links a:hover {
  color: #42b883;
}
/* 路由链接高亮 */
.nav-links a.router-link-active {
  color: #42b883;
  font-weight: 600;
}
</style>