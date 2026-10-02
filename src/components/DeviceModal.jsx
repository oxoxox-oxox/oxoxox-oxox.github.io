import { useEffect } from 'react';

export default function DeviceModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog terminal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red" onClick={onClose}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="terminal-title">device@oxoxox-oxox: ~</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="关闭">
            ✕
          </button>
        </div>

        <div className="terminal-body">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span> neofetch --short
          </div>
          <div className="terminal-info">
            <p><span className="info-key">User:</span> oxoxox-oxox</p>
            <p><span className="info-key">Major:</span> Computer Science @ UNNC</p>
            <p><span className="info-key">Location:</span> China / Ningbo</p>
            <p><span className="info-key">Framework:</span> React 19.2 + Vite 6</p>
            <p><span className="info-key">Routing:</span> HashRouter (GitHub Pages Ready)</p>
            <p><span className="info-key">Markdown:</span> marked + custom typography</p>
            <p><span className="info-key">Status:</span> 迷茫中探索，热衷于构建高效项目</p>
          </div>

          <div className="terminal-line" style={{ marginTop: '1.2rem' }}>
            <span className="terminal-prompt">$</span> echo "Welcome to oxoxox-oxox's digital space!"
          </div>
          <div className="terminal-output">Welcome to oxoxox-oxox's digital space!</div>
        </div>
      </div>
    </div>
  );
}
