/**
 * 博客文章列表数据
 * 对应 public/posts/ 目录下的 markdown 文件
 */
export const posts = [
  {
    id: "大一感悟",
    title: "大一个人感受",
    date: "2026-09-25",
    tag: "碎碎念",
    excerpt: "大一一年探索之后的感受，关于学习、迷茫、探索与尝试的复盘和总结。",
    file: "大一感悟.md"
  },
  {
    id: "CS61C_project04",
    title: "对CS61C课程project 4的相关实现和经验",
    date: "2026-10-02",
    tag: "课程笔记",
    excerpt: "UC Berkeley CS61C 课程 Project 4 的相关实现思路与避坑经验总结。",
    file: "CS61C_project04.md"
  }
];

export function getPostById(id) {
  if (!id) return null;
  const decodedId = decodeURIComponent(id);
  return posts.find((p) => p.id === decodedId || p.file === `${decodedId}.md` || p.file === decodedId);
}
