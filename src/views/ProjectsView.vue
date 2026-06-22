<template>
  <div class="projects">
    <h2>我的项目</h2>
    <div class="project-list">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.desc }}</p>
        <div class="tags">
          <span v-for="tech in project.techs" :key="tech">{{ tech }}</span>
        </div>
        <a :href="project.link" target="_blank">查看代码 →</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: '文章管理系统',
          desc: '基于 Spring Boot + MyBatis + MySQL 的后端系统，实现文章增删改查',
          techs: ['Java', 'Spring Boot', 'MySQL'],
          link: 'https://github.com/你的用户名/your-repo'
        },
        {
          id: 2,
          name: '医院预约管理系统',
          desc: '课程设计项目，4人团队协作，负责数据库设计和后端逻辑',
          techs: ['Java', 'MySQL', '团队协作'],
          link: 'https://github.com/你的用户名/your-repo'
        }
      ]
    }
  }
}
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
</style>