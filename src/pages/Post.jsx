import { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { getPostById } from '../data/posts';

export default function Post() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const queryPost = searchParams.get('post');

  const postId = id || queryPost;
  const postMeta = getPostById(postId);

  const [contentHtml, setContentHtml] = useState('');
  const [loading, setLoading] = useState(Boolean(postId));
  const [error, setError] = useState(!postId ? '请指定要阅读的文章' : null);

  useEffect(() => {
    if (!postId) return;

    let ignore = false;
    const fileName = postMeta ? postMeta.file : `${postId}.md`;
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
    const targetUrl = `${baseUrl}/posts/${fileName}`;

    fetch(targetUrl)
      .then((res) => {
        if (!res.ok) {
          return fetch(`./posts/${fileName}`).then((r2) => {
            if (!r2.ok) throw new Error('文章不存在或已被移动');
            return r2.text();
          });
        }
        return res.text();
      })
      .then((markdownText) => {
        if (ignore) return;
        const html = marked.parse(markdownText, {
          gfm: true,
          breaks: true,
        });
        setContentHtml(html);
        setLoading(false);
      })
      .catch((err) => {
        if (ignore) return;
        setError(err.message || '加载文章失败');
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [postId, postMeta]);

  return (
    <div className="post-container animate-in delay-2">
      <Link to="/blog" className="back-link">
        ← 返回博客列表
      </Link>

      {postMeta && (
        <header style={{ marginBottom: '2rem' }}>
          <div className="post-meta" style={{ marginBottom: '0.8rem' }}>
            <time className="post-date">{postMeta.date}</time>
            {postMeta.tag && <span className="post-tag">{postMeta.tag}</span>}
          </div>
        </header>
      )}

      {loading && (
        <div style={{ padding: '2rem 0', textAlign: 'center' }}>
          <p className="loading-text">正在加载文章...</p>
        </div>
      )}

      {error && (
        <div
          style={{
            padding: '2rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <h2 style={{ color: 'var(--color-text-strong)', marginTop: 0 }}>404 - 无法找到该文章</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            未能加载文章 <code>{postId}</code>。请确认文件是否存在于 <code>public/posts/</code> 目录下。
          </p>
          <Link to="/blog" className="btn-pill" style={{ marginTop: '1rem' }}>
            返回文章列表
          </Link>
        </div>
      )}

      {!loading && !error && (
        <article
          id="article-content"
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      )}
    </div>
  );
}
