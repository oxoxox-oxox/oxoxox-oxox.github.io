import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { projects } from '../data/projects';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const normalizedQuery = query.trim().toLowerCase();

  const filteredPosts = normalizedQuery
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(normalizedQuery) ||
          p.tag.toLowerCase().includes(normalizedQuery) ||
          p.excerpt.toLowerCase().includes(normalizedQuery)
      )
    : posts;

  const filteredProjects = normalizedQuery
    ? projects.filter(
        (pr) =>
          pr.title.toLowerCase().includes(normalizedQuery) ||
          pr.description.toLowerCase().includes(normalizedQuery) ||
          pr.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const handleSelectPost = (postId) => {
    handleClose();
    navigate(`/post/${encodeURIComponent(postId)}`);
  };

  const handleSelectProject = (project) => {
    handleClose();
    if (project.isExternal && project.link) {
      window.open(project.link, '_blank');
    } else {
      navigate('/projects');
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="modal-search-input"
            placeholder="搜索文章、项目、技术栈... (按 ESC 退出)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="modal-close-btn" onClick={handleClose} aria-label="关闭">
            ✕
          </button>
        </div>

        <div className="modal-results">
          {/* 文章结果 */}
          {filteredPosts.length > 0 && (
            <div className="modal-section">
              <div className="modal-section-title">文章 (Blog)</div>
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="modal-result-item"
                  onClick={() => handleSelectPost(post.id)}
                >
                  <div className="modal-result-main">
                    <span className="modal-result-title">{post.title}</span>
                    <span className="modal-result-sub">{post.excerpt}</span>
                  </div>
                  <span className="modal-result-tag">{post.tag}</span>
                </div>
              ))}
            </div>
          )}

          {/* 项目结果 */}
          {filteredProjects.length > 0 && (
            <div className="modal-section">
              <div className="modal-section-title">项目 (Projects)</div>
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="modal-result-item"
                  onClick={() => handleSelectProject(proj)}
                >
                  <div className="modal-result-main">
                    <span className="modal-result-title">{proj.title}</span>
                    <span className="modal-result-sub">{proj.description}</span>
                  </div>
                  <div className="modal-result-tags">
                    {proj.tags.slice(0, 2).map((t) => (
                      <span key={t} className="modal-result-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && filteredProjects.length === 0 && (
            <div className="modal-empty">没有找到相关内容</div>
          )}
        </div>
      </div>
    </div>
  );
}
