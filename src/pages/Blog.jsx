import { useState } from 'react';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

export default function Blog() {
  const [activeTag, setActiveTag] = useState('全部');

  const allTags = ['全部', ...Array.from(new Set(posts.map((p) => p.tag).filter(Boolean)))];

  const filteredPosts =
    activeTag === '全部' ? posts : posts.filter((p) => p.tag === activeTag);

  return (
    <>
      <header className="blog-header animate-in delay-2">
        <h1 className="blog-title">Blog</h1>
        <p className="blog-subtitle">记录计算机学习、技术探索与生活思考</p>

        {allTags.length > 2 && (
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  background: activeTag === tag ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${activeTag === tag ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  color: activeTag === tag ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </header>

      <section className="post-list animate-in delay-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="loading-text">暂无文章</p>
        )}
      </section>
    </>
  );
}
