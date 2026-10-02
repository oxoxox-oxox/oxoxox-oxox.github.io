import { socialLinks, friendLinks } from '../data/links';

export default function Links() {
  return (
    <>
      <header className="blog-header animate-in delay-2">
        <h1 className="blog-title">Links</h1>
        <p className="blog-subtitle">社交媒体、个人足迹与友情链接</p>
      </header>

      <section className="links-section animate-in delay-3">
        <h2 className="links-group-title">网络足迹 (Profiles)</h2>
        <div className="links-grid">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <div className="link-card-header">
                <span className="link-card-name">{item.name}</span>
                <span className="link-card-badge">{item.badge}</span>
              </div>
              <p className="link-card-desc">{item.desc}</p>
            </a>
          ))}
        </div>

        <h2 className="links-group-title" style={{ marginTop: '3rem' }}>
          推荐与友链 (Resources & Friends)
        </h2>
        <div className="links-grid">
          {friendLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <div className="link-card-header">
                <span className="link-card-name">{item.name}</span>
                <span className="link-card-badge">{item.badge}</span>
              </div>
              <p className="link-card-desc">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
