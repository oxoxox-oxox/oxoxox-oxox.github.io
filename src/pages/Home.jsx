import { Link } from 'react-router-dom';
import catAvatar from '../assets/cat.jpg';
import { posts } from '../data/posts';

export default function Home() {
  const latestPost = posts[0];

  return (
    <>
      {/* 2. 居中个人画像区域 (Hero) */}
      <header className="hero-center animate-in delay-2">
        <img className="hero-avatar" src={catAvatar} alt="oxoxox-oxox 头像" />
        <h1 className="hero-name" id="greeting">oxoxox-oxox</h1>
        <div className="hero-meta">
          <span className="meta-item">
            {/* 定位图标 */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>China / Ningbo</span>
          </span>
          <a
            href="https://github.com/oxoxox-oxox"
            target="_blank"
            rel="noreferrer"
            className="meta-item meta-link"
          >
            {/* GitHub 图标 */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* 3. 主体分栏内容区：左栏大标题，右栏正文流 */}
      <section className="content-section animate-in delay-3">
        <div className="section-grid">
          {/* 左栏：章节标题 */}
          <aside className="section-title">
            <h2>About</h2>
          </aside>

          {/* 右栏：个人经历叙述 */}
          <div className="section-body">
            <p className="role-tagline">
              Developer / CS Student / <s>Beginner</s>
            </p>
            <p>你好，我叫 oxoxox-oxox。</p>
            <p>
              本科就读于宁波诺丁汉大学计算机科学专业。正在探索计算机各个领域，热衷于构建高效且富有趣味的项目。
            </p>
            <p>目前在各个方向迷茫的徘徊，依旧在探索并学习。</p>

            {/* 最新文章提示 */}
            {latestPost && (
              <div style={{ marginTop: '1rem', padding: '0.8rem 1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-accent)', fontWeight: 500 }}>最新文章：</span>
                <Link to={`/post/${encodeURIComponent(latestPost.id)}`} style={{ color: 'var(--color-text-strong)', textDecoration: 'none', marginLeft: '0.5rem', fontSize: '0.92rem' }}>
                  {latestPost.title} →
                </Link>
              </div>
            )}

            {/* 右下角胶囊按钮 */}
            <div className="section-actions">
              <a
                href="https://github.com/oxoxox-oxox"
                target="_blank"
                rel="noreferrer"
                className="btn-pill"
              >
                More about me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
