import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }} className="animate-in delay-2">
      <h1 style={{ fontSize: '3rem', margin: '0 0 1rem', color: 'var(--color-text-strong)' }}>
        404
      </h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        页面未找到，可能已被移动或删除。
      </p>
      <Link to="/" className="btn-pill">
        返回首页
      </Link>
    </div>
  );
}
