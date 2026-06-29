import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';

export default function CTA() {
  useReveal();

  return (
    <section className="cta section--gradient">
      <div className="cta__grid" aria-hidden="true"></div>
      <div className="container cta__inner">
        <div className="cta__content reveal">
          <span className="eyebrow">Let's Get Started</span>
          <h2 className="cta__title">
            Have plans on your desk?<br />
            <span className="cta__title-accent">Send them today, bid this week.</span>
          </h2>
          <p className="cta__lead">
            Free quote within hours. No commitment. Just send the drawings and tell us when you
            need the numbers — we'll handle the rest.
          </p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get a Free Quote
              <Icon name="arrow" size={16} className="arrow" />
            </Link>
            <a href="tel:+18005551200" className="btn btn--ghost btn--lg">
              <Icon name="phone" size={16} />
              (800) 555-1200
            </a>
          </div>
        </div>

        <div className="cta__side reveal">
          <div className="cta__metric">
            <span className="cta__metric-num">24h</span>
            <span className="cta__metric-label">Quote turnaround</span>
          </div>
          <div className="cta__metric">
            <span className="cta__metric-num">3–7</span>
            <span className="cta__metric-label">Days to delivery</span>
          </div>
          <div className="cta__metric">
            <span className="cta__metric-num">100%</span>
            <span className="cta__metric-label">Money-back if late</span>
          </div>
        </div>
      </div>

      <style>{`
        .cta {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
          isolation: isolate;
        }
        .cta__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
          z-index: -1;
        }
        .cta__inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .cta__title {
          color: white;
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 18px;
        }
        .cta__title-accent {
          background: linear-gradient(135deg, var(--c-amber) 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .cta__lead {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.0625rem;
          line-height: 1.7;
          max-width: 52ch;
          margin-bottom: 32px;
        }
        .cta__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cta__side {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(8px);
        }
        .cta__metric {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .cta__metric:last-child { border-bottom: none; }
        .cta__metric-num {
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--c-amber);
          letter-spacing: -0.03em;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .cta__metric-label {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.78);
          text-align: right;
        }
        @media (max-width: 900px) {
          .cta__inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cta__side { max-width: 480px; }
        }
        @media (max-width: 600px) {
          .cta { padding: 64px 0; }
          .cta__side { padding: 24px; }
          .cta__metric-num { font-size: 1.75rem; }
        }
      `}</style>
    </section>
  );
}
