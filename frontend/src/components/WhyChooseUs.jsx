import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';

const REASONS = [
  {
    icon: 'clock',
    title: 'Fast Turnaround',
    body:
      'Most takeoffs come back in 3–7 days. Need it tomorrow? We have rush options for tight bid deadlines.'
  },
  {
    icon: 'shield',
    title: 'Accuracy First',
    body:
      'Detailed digital takeoffs land within ±5% of actuals. Every assumption is logged so nothing surprises you.'
  },
  {
    icon: 'dollar',
    title: 'Competitive Pricing',
    body:
      'Flat-fee or per-sheet pricing — no hidden charges. You always know what an estimate costs before we start.'
  },
  {
    icon: 'team',
    title: 'Senior Estimators',
    body:
      'Estimates produced by people with field experience — not interns. Each is reviewed by a senior before delivery.'
  },
  {
    icon: 'check',
    title: 'CSI Division-Wise',
    body:
      'Every estimate is organized by CSI MasterFormat so you can drop sections straight into your SOV or sub bids.'
  },
  {
    icon: 'phone',
    title: 'Always Available',
    body:
      'Direct line to the estimator on your job. No tickets, no queues — just a quick call when you need answers.'
  }
];

export default function WhyChooseUs() {
  useReveal();

  return (
    <section className="why section">
      <div className="container">
        <div className="why__top">
          <div className="reveal">
            <span className="eyebrow">Why West Estimating</span>
            <h2 className="why__title">
              Six reasons contractors keep<br />sending us their plans
            </h2>
          </div>
          <p className="why__lead reveal">
            We're not just typing numbers into software. Our estimators have run jobs, swung
            hammers, and read enough drawings to spot the things that turn into change orders later.
          </p>
        </div>

        <div className="why__grid">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="why__item reveal"
              style={{ '--reveal-delay': `${i * 60}ms` }}
            >
              <span className="why__num">0{i + 1}</span>
              <div className="why__item-icon">
                <Icon name={r.icon} size={22} />
              </div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why__top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: end;
          margin-bottom: 56px;
        }
        .why__title { margin: 0; }
        .why__lead {
          font-size: 1.0625rem;
          line-height: 1.7;
          padding-bottom: 4px;
        }
        .why__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .why__item {
          position: relative;
          padding: 32px 28px;
          background: var(--c-bg);
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          transition: transform var(--t), border-color var(--t), box-shadow var(--t);
        }
        .why__item:hover {
          transform: translateY(-3px);
          border-color: var(--c-border-strong);
          box-shadow: var(--shadow);
        }
        .why__num {
          position: absolute;
          top: 18px;
          right: 24px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--c-text-faint);
          letter-spacing: 0.06em;
        }
        .why__item-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-ink);
          color: var(--c-amber);
          border-radius: var(--radius);
          margin-bottom: 18px;
        }
        .why__item h3 {
          font-size: 1.0625rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .why__item p {
          font-size: 0.9375rem;
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .why__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 760px) {
          .why__top {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        @media (max-width: 520px) {
          .why__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
