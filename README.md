# oxoxox-oxox.github.io

oxoxox-oxox 的个人主页与技术随笔博客，基于 **Astro** 构建并部署为静态站点。

- ⚡️ **技术栈**: Astro + Content Collections + Markdown
- 🎨 **设计语言**: 极简暗黑美学、自定义设计变量系统 (CSS Tokens)、流光微动效
- 🚀 **部署**: 原生支持 GitHub Pages 静态托管（已配置 GitHub Actions 自动构建与发布）

---

## 目录结构

```text
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions 自动构建部署到 GitHub Pages
├── legacy/                 # 旧版原生 HTML/CSS/JS 静态文件完整备份归档
├── public/                 # 静态资源 (编译后直接输出到根目录)
│   ├── img/                # 头像与展示图
│   └── posts/              # Markdown 博客原稿 (大一感悟.md 等)
├── src/
│   ├── assets/             # 图片与媒体资源
│   ├── content/posts/      # Markdown 文章及 frontmatter
│   ├── layouts/            # Astro 页面布局
│   ├── data/site.js        # 项目及链接数据
│   ├── pages/              # Astro 文件路由
│   ├── styles/             # 模块化 CSS 设计系统 (tokens, components, pages, markdown 等)
├── astro.config.mjs
└── package.json
```

---

## 本地开发

确保已安装 [Node.js](https://nodejs.org/) 22 或更高版本：

```bash
# 启动本地开发服务器
npm run dev

# 构建生产版本 (输出到 dist/)
npm run build

# 本地预览生产构建产物
npm run preview

# 代码规范检查
npm run lint
```

---

## 如何添加新的博客文章

将 Markdown 文件（例如 `my-article.md`）放入 `src/content/posts/`，并在文件顶部添加 frontmatter：

```javascript
---
title: 文章标题
date: 2026-10-02
tag: 技术探索
excerpt: 文章简短摘要...
---

正文从这里开始。
```

文章列表、详情页和搜索数据会在构建时自动生成。

---

## GitHub Pages 部署说明

本项目已添加 [`.github/workflows/deploy.yml`](file:///.github/workflows/deploy.yml) 工作流：
1. 打开 GitHub 仓库设置：**Settings** -> **Pages**；
2. 在 **Build and deployment** 下将 **Source** 切换为 **GitHub Actions**；
3. 今后只要将代码 `git push` 到 `main` 分支，GitHub 就会自动运行构建并秒级部署上线！
