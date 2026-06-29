import { tradeChips } from '../data/services.js';
import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';

export default function Trades() {
  useReveal();

  return (
    <section className="trades section">
      <div className="container">
        <div className="trades__layout">
          <div className="trades__intro reveal">
            <span className="eyebrow">CSI Divisions</span>
            <h2>Every trade. Every division. Every estimate.</h2>
            <p>
              From sitework through specialties — our estimators cover the full CSI MasterFormat.
              If it goes on a set of drawings, we can take it off.
            </p>
            <div className="trades__stats">
              <div className="trades__stat">
                <strong>27+</strong>
                <span>Trades covered</span>
              </div>
              <div className="trades__stat">
                <strong>50 States</strong>
                <span>Localized pricing</span>
              </div>
            </div>
          </div>

          <div className="trades__chips reveal">
            {tradeChips.map((trade, i) => (
              <span
                key={trade}
                className="trades__chip"
                style={{ '--chip-delay': `${i * 24}ms` }}
              >
                <Icon name="check" size={13} />
                {trade}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .trades__layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: center;
        }
        .trades__intro h2 { margin-bottom: 16px; }
        .trades__intro p {
          font-size: 1.0625rem;
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .trades__stats {
          display: flex;
          gap: 32px;
          padding-top: 28px;
          border-top: 1px solid var(--c-border);
        }
        .trades__stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--c-ink);
          letter-spacing: -0.025em;
        }
        .trades__stat span {
          font-size: 0.875rem;
          color: var(--c-text-muted);
        }

        .trades__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .trades__chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--c-text);
          cursor: default;
          transition: all var(--t);
          animation: chip-in 0.6s ease-out both;
          animation-delay: var(--chip-delay);
        }
        @keyframes chip-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .trades__chip svg {
          color: var(--c-amber);
        }
        .trades__chip:hover {
          background: var(--c-ink);
          color: white;
          border-color: var(--c-ink);
          transform: translateY(-2px);
        }
        .trades__chip:hover svg { color: var(--c-amber); }

        @media (max-width: 900px) {
          .trades__layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
