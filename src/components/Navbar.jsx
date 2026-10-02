import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ onOpenSearch, onOpenDevice }) {
  return (
    <nav className="navbar animate-in delay-1">
      <Link to="/" className="nav-brand">
        oxoxox-oxox's ink
      </Link>
      <div className="nav-menu">
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Blog
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Projects
        </NavLink>
        <NavLink
          to="/links"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Links
        </NavLink>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          About
        </NavLink>

        {/* 搜索图标 */}
        <button
          className="nav-icon-btn"
          title="搜索 (Ctrl+K)"
          aria-label="Search"
          onClick={onOpenSearch}
        >
          <svg
            width="17"
            height="17"
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
        </button>

        {/* 设备/系统信息切换图标 */}
        <button
          className="nav-icon-btn"
          title="系统信息与设备"
          aria-label="Device"
          onClick={onOpenDevice}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
