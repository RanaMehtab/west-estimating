import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';

const TESTIMONIALS = [
  {
    quote:
      "We've used three estimating firms over the years and West is the only one we kept. The estimates come back clean, on time, and with assumptions documented so we know exactly what's in and out.",
    name: 'Marcus Rivera',
    role: 'Owner, Rivera Builders',
    company: 'General Contractor — Phoenix, AZ',
    rating: 5
  },
  {
    quote:
      'Tight schedule on a school renovation. Sent plans Friday afternoon, had a full division-7 takeoff in my inbox Monday. Won the bid by 4%.',
    name: 'Jenna Pirelli',
    role: 'Estimating Manager',
    company: 'Coastal Roofing — San Diego, CA',
    rating: 5
  },
  {
    quote:
      "Their MEP estimates are the best I've seen. They catch the low-voltage and fire-alarm scope that other estimators miss every time.",
    name: 'David Chen',
    role: 'VP Pre-Construction',
    company: 'Apex Mechanical — Austin, TX',
    rating: 5
  }
];

function Stars({ rating }) {
  return (
    <div className="testi__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={16}
          strokeWidth={1.5}
          style={{ fill: i < rating ? 'var(--c-amber)' : 'transparent', color: 'var(--c-amber)' }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  useReveal();

  return (
    <section className="testi section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What Clients Say</span>
          <h2>Estimates that win work — and earn return clients</h2>
        </div>

        <div className="testi__grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className="testi__card reveal"
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <Icon name="quote" size={32} className="testi__qmark" />
              <Stars rating={t.rating} />
              <blockquote className="testi__quote">"{t.quote}"</blockquote>
              <footer className="testi__by">
                <div className="testi__avatar" aria-hidden="true">
                  {t.name.split(' ').map((p) => p[0]).join('')}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <span className="testi__company">{t.company}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .testi__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testi__card {
          position: relative;
          padding: 32px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          transition: transform var(--t), box-shadow var(--t);
        }
        .testi__card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }
        .testi__qmark {
          color: var(--c-amber);
          opacity: 0.2;
          margin-bottom: 12px;
        }
        .testi__stars {
          display: flex;
          gap: 2px;
          margin-bottom: 18px;
        }
        .testi__quote {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 500;
          color: var(--c-text);
          line-height: 1.55;
          letter-spacing: -0.005em;
          margin-bottom: 28px;
          flex: 1;
        }
        .testi__by {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid var(--c-border);
        }
        .testi__avatar {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-ink);
          color: var(--c-amber);
          border-radius: 50%;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }
        .testi__by strong {
          display: block;
          font-family: var(--font-display);
          color: var(--c-ink);
          font-size: 0.9375rem;
          line-height: 1.3;
        }
        .testi__by span {
          display: block;
          font-size: 0.8125rem;
          color: var(--c-text-muted);
          line-height: 1.4;
        }
        .testi__company {
          font-family: var(--font-mono);
          font-size: 0.6875rem !important;
          letter-spacing: 0.02em;
          color: var(--c-text-faint) !important;
          text-transform: uppercase;
          margin-top: 2px;
        }
        @media (max-width: 1024px) {
          .testi__grid { grid-template-columns: 1fr; max-width: 560px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
