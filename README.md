# 个人技术博客网站（全栈）

> 一个独立开发的全栈个人作品集网站，用于展示技术项目和个人信息。

**在线访问**：[https://my-blog-bbr.pages.dev](https://my-blog-bbr.pages.dev)

---

## 📖 项目简介

这是一个从零开始独立开发的全栈个人网站，包含前台展示和后台管理两大模块。前台用于展示个人信息和技术项目，后台提供动态内容管理功能，支持项目信息的增删改查。

项目采用前后端分离架构，前端部署在 Cloudflare Pages，后端部署在 Railway，数据库使用 PostgreSQL。

---

## 🛠️ 技术栈

### 前端
| 技术             | 说明                               |
| ---------------- | ---------------------------------- |
| Vue 3            | 渐进式 JavaScript 框架，组合式 API |
| Vue Router       | 官方路由管理器，实现 SPA 页面切换  |
| Vite             | 下一代前端构建工具，极速热更新     |
| Axios            | 基于 Promise 的 HTTP 客户端        |
| Cloudflare Pages | 前端静态托管，自动构建部署         |

### 后端
| 技术          | 说明                            |
| ------------- | ------------------------------- |
| Spring Boot 3 | Java 后端框架，提供 RESTful API |
| MyBatis       | 持久层框架，灵活 SQL 映射       |
| PostgreSQL    | 关系型数据库，部署在 Railway    |
| JWT           | JSON Web Token，身份认证        |
| Railway       | 后端云托管平台                  |

---

## 📁 项目结构

```
my-blog/
├── src/
│ ├── views/
│ │ ├── HomeView.vue # 首页（个人介绍）
│ │ ├── ProjectsView.vue # 项目展示页
│ │ ├── LoginView.vue # 后台登录页
│ │ └── AdminView.vue # 后台管理页
│ ├── components/ # 可复用组件
│ ├── assets/ # 静态资源（图片、样式）
│ ├── App.vue # 根组件
│ └── main.js # 入口文件 + 路由配置
├── public/ # 公共静态资源
├── .env.development # 开发环境变量
├── .env.production # 生产环境变量
├── vite.config.js # Vite 配置
└── package.json # 项目依赖
```

---

##  功能列表

### 前台（公开访问）
- ✅ 个人简介展示（头像、技术标签）
- ✅ 项目列表展示（从后端 API 动态获取）
- ✅ 响应式布局（PC / 移动端适配）
- ✅ 平滑路由切换

### 后台（需登录）
- ✅ 管理员登录（JWT 认证）
- ✅ 项目列表管理
- ✅ 新增项目
- ✅ 编辑项目
- ✅ 删除项目
- ✅ Token 自动续期（24 小时有效期）

---

## 🧪 本地运行

### 1. 克隆项目
```bash
git clone https://github.com/Zerto233/my-blog.git
cd my-blog
```

### 2. 安装依赖

```
npm install
```

### 3. 配置环境变量

项目根目录下创建 `.env.development` 文件：

```
VITE_API_BASE_URL=http://localhost:8080
```

### 4. 启动开发服务器

```
npm run dev
```

访问 `http://localhost:5173` 即可预览。

### 5. 打包构建

```
npm run build
```

构建产位于 `dist/` 目录。

## 🌐 在线访问

| 环境         | 地址                                                         |
| :----------- | :----------------------------------------------------------- |
| **生产环境** | [https://my-blog-bbr.pages.dev](https://my-blog-bbr.pages.dev/) |
| 后台管理     | https://my-blog-bbr.pages.dev/login                          |

------

## 📦 部署说明

### 前端（Cloudflare Pages）

1. 推送代码到 GitHub 仓库
2. 在 Cloudflare Pages 中连接该仓库
3. 设置构建命令：`npm run build`
4. 设置输出目录：`dist`
5. 添加环境变量：`VITE_API_BASE_URL` = `https://my-blog-backend-production-dbbd.up.railway.app`
6. 自动部署

### 后端（Railway）

- 后端项目地址：https://github.com/Zerto233/my-blog-backend
- 部署方式：连接 GitHub 仓库，Railway 自动构建并运行

------

## 📌 项目亮点

- ✅ **前后端完全分离**：独立开发、独立部署，通过 RESTful API 通信
- ✅ **JWT 身份认证**：后台管理接口受 Token 保护
- ✅ **环境变量管理**：开发/生产环境自动切换 API 地址
- ✅ **全栈可观测**：前端日志 + 后端日志 + 数据库日志
- ✅ **持续部署**：Git push 即触发自动构建和部署