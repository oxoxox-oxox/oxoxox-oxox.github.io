import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className="post-item">
      <div className="post-meta">
        <time className="post-date">{post.date}</time>
        {post.tag && <span className="post-tag">{post.tag}</span>}
      </div>
      <h2 className="post-heading">
        <Link to={`/post/${encodeURIComponent(post.id)}`} className="post-link">
          {post.title}
        </Link>
      </h2>
      <p className="post-excerpt">{post.excerpt}</p>
    </article>
  );
}
