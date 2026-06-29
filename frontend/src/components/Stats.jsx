import useCountUp from '../hooks/useCountUp.js';

function StatItem({ value, suffix, label, sub }) {
  const [ref, current] = useCountUp(value);

  return (
    <div className="stat" ref={ref}>
      <div className="stat__num">
        <span>{current.toLocaleString()}</span>
        <span className="stat__suffix">{suffix}</span>
      </div>
      <div className="stat__label">{label}</div>
      <div className="stat__sub">{sub}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats section--dark">
      <div className="container">
        <div className="stats__grid">
          <StatItem
            value={3400}
            suffix="+"
            label="Projects Estimated"
            sub="Residential, commercial, and public work"
          />
          <StatItem
            value={98}
            suffix="%"
            label="Estimate Accuracy"
            sub="Within ±5% of final job cost"
          />
          <StatItem
            value={50}
            suffix=""
            label="States Served"
            sub="Contractors nationwide"
          />
          <StatItem
            value={5}
            suffix=" days"
            label="Avg. Turnaround"
            sub="Plans to estimate on most jobs"
          />
        </div>
      </div>

      <style>{`
        .stats {
          background: var(--c-ink);
          color: white;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
          z-index: -1;
        }
        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .stat {
          position: relative;
          padding: 8px 0 8px 24px;
          border-left: 2px solid rgba(255, 255, 255, 0.1);
        }
        .stat::before {
          content: '';
          position: absolute;
          left: -2px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--c-amber);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.8s ease-out;
        }
        .stat:hover::before { transform: scaleY(1); }
        .stat__num {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 800;
          color: white;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 8px;
          font-variant-numeric: tabular-nums;
          display: inline-flex;
          align-items: baseline;
        }
        .stat__suffix {
          color: var(--c-amber);
          font-size: 0.6em;
        }
        .stat__label {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 6px;
        }
        .stat__sub {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .stats__grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
        }
        @media (max-width: 480px) {
          .stats { padding: 56px 0; }
          .stats__grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </section>
  );
}
