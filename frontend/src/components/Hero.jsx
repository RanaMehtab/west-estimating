import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function Hero() {
  return (
    <section className="hero">
      {/* Blueprint grid backdrop */}
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="container hero__inner">
        {/* Left: copy */}
        <div className="hero__content">
          <span className="hero__eyebrow">
            <span className="hero__dot" aria-hidden="true"></span>
            Construction Estimating · Nationwide
          </span>
          <h1 className="hero__title">
            Accurate estimates.<br />
            <span className="hero__title-accent">Winning bids.</span>
          </h1>
          <p className="hero__lead">
            Quantity takeoffs and cost estimates for general contractors, subcontractors, and
            developers. Detailed division-by-division, delivered in days — not weeks.
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get a Free Quote
              <Icon name="arrow" size={16} className="arrow" />
            </Link>
            <Link to="/services" className="btn btn--ghost btn--lg">
              See All Services
            </Link>
          </div>

          {/* Trust strip */}
          <div className="hero__trust">
            <div className="hero__trust-item">
              <Icon name="shield" size={18} />
              <span>NDA on every project</span>
            </div>
            <div className="hero__trust-item">
              <Icon name="clock" size={18} />
              <span>3–7 day turnaround</span>
            </div>
            <div className="hero__trust-item">
              <Icon name="check" size={18} />
              <span>±5% accuracy</span>
            </div>
          </div>
        </div>

        {/* Right: floating estimate-style card */}
        <div className="hero__card-stack">
          <div className="hero__card hero__card--main">
            <div className="hero__card-head">
              <div>
                <span className="hero__card-label">Estimate Summary</span>
                <strong className="hero__card-project">Maplewood Commercial Plaza</strong>
              </div>
              <span className="hero__card-tag">Ready</span>
            </div>
            <div className="hero__card-body">
              <div className="hero__card-row">
                <span>Division 03 — Concrete</span>
                <span className="hero__num">$284,500</span>
              </div>
              <div className="hero__card-row">
                <span>Division 05 — Metals</span>
                <span className="hero__num">$417,200</span>
              </div>
              <div className="hero__card-row">
                <span>Division 09 — Finishes</span>
                <span className="hero__num">$198,750</span>
              </div>
              <div className="hero__card-row">
                <span>Division 23 — HVAC</span>
                <span className="hero__num">$326,100</span>
              </div>
              <div className="hero__card-row">
                <span>Division 26 — Electrical</span>
                <span className="hero__num">$252,800</span>
              </div>
              <div className="hero__card-bar" aria-hidden="true">
                <div className="hero__card-bar-fill"></div>
              </div>
              <div className="hero__card-row hero__card-row--total">
                <span>Total Project Estimate</span>
                <span className="hero__num hero__num--lg">$1,479,350</span>
              </div>
            </div>
          </div>

          {/* Floating badge: turnaround */}
          <div className="hero__badge hero__badge--time">
            <div className="hero__badge-num">5</div>
            <div className="hero__badge-text">
              <strong>Day Turnaround</strong>
              <span>From plans to estimate</span>
            </div>
          </div>

          {/* Floating badge: accuracy */}
          <div className="hero__badge hero__badge--accuracy">
            <span className="hero__badge-pulse" aria-hidden="true"></span>
            <span>Within <strong>±5%</strong> of actuals</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          background: linear-gradient(135deg, var(--c-ink-deep) 0%, var(--c-ink) 55%, #143c68 100%);
          color: white;
          padding: 96px 0 120px;
          overflow: hidden;
          isolation: isolate;
        }
        /* Blueprint grid pattern */
        .hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 1100px 600px at 60% 50%, black 30%, transparent 80%);
          pointer-events: none;
        }
        /* Amber radial glow */
        .hero__glow {
          position: absolute;
          top: 20%;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 65%);
          pointer-events: none;
          z-index: -1;
        }

        .hero__inner {
          position: relative;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Left content */
        .hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.04em;
          margin-bottom: 24px;
        }
        .hero__dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--c-amber);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(245, 158, 11, 0.8);
        }
        .hero__title {
          color: white;
          font-size: clamp(2.25rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin-bottom: 24px;
        }
        .hero__title-accent {
          background: linear-gradient(135deg, var(--c-amber) 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero__lead {
          color: rgba(255, 255, 255, 0.78);
          font-size: 1.125rem;
          line-height: 1.7;
          max-width: 52ch;
          margin-bottom: 36px;
        }
        .hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .hero__trust {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .hero__trust-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.75);
        }
        .hero__trust-item svg { color: var(--c-amber); }

        /* Right: card stack */
        .hero__card-stack {
          position: relative;
          height: 480px;
        }
        .hero__card {
          position: absolute;
          background: white;
          color: var(--c-text);
          border-radius: var(--radius-lg);
          box-shadow:
            0 32px 64px -16px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }
        .hero__card--main {
          inset: 30px 0 60px 30px;
          padding: 24px;
          animation: hero-float 6s ease-in-out infinite;
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .hero__card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--c-border);
          margin-bottom: 16px;
        }
        .hero__card-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--c-text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .hero__card-project {
          font-family: var(--font-display);
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--c-ink);
        }
        .hero__card-tag {
          background: #DCFCE7;
          color: #166534;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.6875rem;
          font-weight: 600;
          font-family: var(--font-mono);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .hero__card-body { display: flex; flex-direction: column; gap: 10px; }
        .hero__card-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          color: var(--c-text);
        }
        .hero__num {
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--c-ink);
          font-variant-numeric: tabular-nums;
        }
        .hero__num--lg { font-size: 1.125rem; }
        .hero__card-bar {
          height: 6px;
          background: var(--c-bg-alt);
          border-radius: 3px;
          overflow: hidden;
          margin: 8px 0 4px;
        }
        .hero__card-bar-fill {
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, var(--c-amber), #fbbf24);
          border-radius: 3px;
          animation: hero-bar 2.4s ease-out 0.4s forwards;
        }
        @keyframes hero-bar {
          to { width: 78%; }
        }
        .hero__card-row--total {
          padding-top: 14px;
          border-top: 1px solid var(--c-border);
          font-weight: 700;
          color: var(--c-ink);
          font-family: var(--font-display);
          font-size: 0.9375rem;
        }

        /* Floating badges */
        .hero__badge {
          position: absolute;
          background: white;
          color: var(--c-text);
          padding: 14px 16px;
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
        }
        .hero__badge--time {
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: hero-float 6s ease-in-out 0.6s infinite;
        }
        .hero__badge-num {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-ink);
          color: var(--c-amber);
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
        }
        .hero__badge-text strong {
          display: block;
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--c-ink);
          line-height: 1.2;
        }
        .hero__badge-text span {
          font-size: 0.75rem;
          color: var(--c-text-muted);
        }

        .hero__badge--accuracy {
          bottom: 12px;
          right: -8px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          color: var(--c-text);
          padding: 12px 18px;
          animation: hero-float 6s ease-in-out 1.2s infinite;
        }
        .hero__badge--accuracy strong { color: var(--c-ink); font-weight: 700; }
        .hero__badge-pulse {
          display: inline-block;
          width: 9px;
          height: 9px;
          background: #16A34A;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
          animation: hero-pulse 2s ease-out infinite;
        }
        @keyframes hero-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          100% { box-shadow: 0 0 0 10px rgba(22, 163, 74, 0); }
        }

        @media (max-width: 1024px) {
          .hero { padding: 80px 0 96px; }
          .hero__inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .hero__card-stack {
            max-width: 480px;
            margin: 0 auto;
          }
        }
        @media (max-width: 600px) {
          .hero { padding: 56px 0 72px; }
          .hero__card-stack { height: 420px; }
          .hero__card--main { inset: 24px 0 60px 16px; padding: 20px; }
          .hero__badge--time {
            top: 0; right: 0;
            padding: 10px 12px;
            gap: 8px;
          }
          .hero__badge-num { width: 36px; height: 36px; font-size: 1.25rem; }
          .hero__badge--accuracy {
            bottom: 0;
            right: 0;
            padding: 10px 14px;
            font-size: 0.8125rem;
          }
          .hero__trust { gap: 16px; }
        }
      `}</style>
    </section>
  );
}
