import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="svc-card reveal"
      style={{ '--reveal-delay': `${index * 60}ms` }}
    >
      <div className="svc-card__icon-wrap">
        <Icon name={service.icon} size={26} strokeWidth={1.5} />
      </div>
      <div className="svc-card__body">
        <h3 className="svc-card__title">{service.title}</h3>
        <p className="svc-card__desc">{service.shortDescription}</p>
      </div>
      <div className="svc-card__foot">
        <span>Learn more</span>
        <Icon name="arrow" size={14} className="svc-card__arrow" />
      </div>

      <style>{`
        .svc-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 28px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          color: var(--c-text);
          transition: transform var(--t), box-shadow var(--t), border-color var(--t);
          overflow: hidden;
        }
        .svc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0) 0%, rgba(245, 158, 11, 0.05) 100%);
          opacity: 0;
          transition: opacity var(--t);
        }
        .svc-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--c-amber);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--t);
        }
        .svc-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(245, 158, 11, 0.3);
          color: var(--c-text);
        }
        .svc-card:hover::before { opacity: 1; }
        .svc-card:hover::after { transform: scaleX(1); }

        .svc-card__icon-wrap {
          position: relative;
          z-index: 1;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-bg-tint);
          color: var(--c-ink);
          border-radius: var(--radius);
          margin-bottom: 20px;
          transition: background var(--t), color var(--t);
        }
        .svc-card:hover .svc-card__icon-wrap {
          background: var(--c-ink);
          color: var(--c-amber);
        }

        .svc-card__body {
          position: relative;
          z-index: 1;
          flex: 1;
          margin-bottom: 20px;
        }
        .svc-card__title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--c-ink);
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .svc-card__desc {
          font-size: 0.9375rem;
          color: var(--c-text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .svc-card__foot {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--c-amber-deep);
          transition: gap var(--t);
        }
        .svc-card:hover .svc-card__foot { gap: 10px; }
        .svc-card__arrow {
          transition: transform var(--t);
        }
        .svc-card:hover .svc-card__arrow { transform: translateX(2px); }
      `}</style>
    </Link>
  );
}
