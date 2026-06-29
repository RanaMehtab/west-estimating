import Icon from './Icon.jsx';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <span className="topbar__pulse" aria-hidden="true"></span>
          <span>Now accepting projects nationwide — turnaround as fast as 24 hours on takeoffs</span>
        </div>
        <div className="topbar__right">
          <a href="tel:+18005551200" className="topbar__link">
            <Icon name="phone" size={14} />
            <span>(800) 555-1200</span>
          </a>
          <span className="topbar__sep" aria-hidden="true"></span>
          <a href="mailto:hello@westestimating.com" className="topbar__link">
            <Icon name="mail" size={14} />
            <span>hello@westestimating.com</span>
          </a>
        </div>
      </div>

      <style>{`
        .topbar {
          background: var(--c-ink-deep);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.8125rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .topbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          height: 38px;
        }
        .topbar__left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.7);
        }
        .topbar__pulse {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: var(--c-amber);
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7);
          animation: topbar-pulse 2.4s ease-out infinite;
        }
        @keyframes topbar-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }
          100% { box-shadow: 0 0 0 8px rgba(245, 158, 11, 0); }
        }
        .topbar__right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .topbar__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          transition: color var(--t-fast);
        }
        .topbar__link:hover {
          color: var(--c-amber);
        }
        .topbar__sep {
          width: 1px;
          height: 14px;
          background: rgba(255, 255, 255, 0.18);
        }
        @media (max-width: 800px) {
          .topbar__left { display: none; }
          .topbar__inner { justify-content: center; }
        }
        @media (max-width: 480px) {
          .topbar__right { gap: 10px; font-size: 0.75rem; }
          .topbar__link span { display: none; }
          .topbar__link { padding: 6px; }
        }
      `}</style>
    </div>
  );
}
