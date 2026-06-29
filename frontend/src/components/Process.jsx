import useReveal from '../hooks/useReveal.js';

const STEPS = [
  {
    title: 'Send your plans',
    body:
      'Upload PDFs, DWGs, or whatever you have. We accept partial sets and rough markups — anything you can share gets us started.',
    detail: 'Day 1'
  },
  {
    title: 'Get a fixed quote',
    body:
      'Within hours, we send a fee, a delivery date, and a clear scope. No surprises later — what we quote is what you pay.',
    detail: 'Day 1'
  },
  {
    title: 'We do the takeoff',
    body:
      'Senior estimators measure and price every line item, broken out by CSI division. Assumptions are logged as we go.',
    detail: 'Days 2–6'
  },
  {
    title: 'QC review',
    body:
      'A second estimator independently checks the numbers, math, and assumptions before anything leaves the office.',
    detail: 'Day 6'
  },
  {
    title: 'You receive the estimate',
    body:
      'Excel workbook, PDF summary, and marked-up plans. We walk you through it on a 30-minute call if you want.',
    detail: 'Day 7'
  }
];

export default function Process() {
  useReveal();

  return (
    <section className="process section section--alt" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">How It Works</span>
          <h2>Five steps from plans to bid-ready estimate</h2>
          <p>
            A clear, predictable process so you always know where your project sits — and when it's
            coming back.
          </p>
        </div>

        <ol className="process__list">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="process__step reveal"
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <div className="process__marker">
                <span className="process__marker-num">0{i + 1}</span>
              </div>
              <div className="process__card">
                <div className="process__card-head">
                  <h3>{step.title}</h3>
                  <span className="process__detail">{step.detail}</span>
                </div>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .process__list {
          list-style: none;
          position: relative;
          max-width: 880px;
          margin: 0 auto;
          padding-left: 24px;
        }
        /* Vertical timeline line */
        .process__list::before {
          content: '';
          position: absolute;
          left: 23px;
          top: 24px;
          bottom: 24px;
          width: 2px;
          background: var(--c-border);
        }
        .process__step {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 24px;
          margin-bottom: 24px;
          align-items: start;
        }
        .process__step:last-child { margin-bottom: 0; }
        .process__marker {
          position: relative;
          width: 48px;
          height: 48px;
          margin-left: -24px;
          z-index: 1;
        }
        .process__marker-num {
          position: relative;
          z-index: 1;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-ink);
          color: var(--c-amber);
          border-radius: 50%;
          font-family: var(--font-mono);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          box-shadow: 0 0 0 6px var(--c-bg-alt);
        }
        .process__card {
          background: white;
          padding: 24px 28px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--c-border);
          transition: transform var(--t), box-shadow var(--t), border-color var(--t);
        }
        .process__step:hover .process__card {
          transform: translateX(4px);
          border-color: var(--c-border-strong);
          box-shadow: var(--shadow);
        }
        .process__card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 8px;
        }
        .process__card h3 {
          font-size: 1.125rem;
          margin: 0;
        }
        .process__detail {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--c-amber-deep);
          background: rgba(245, 158, 11, 0.1);
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .process__card p {
          font-size: 0.9375rem;
          line-height: 1.65;
          margin: 0;
        }
        @media (max-width: 520px) {
          .process__list { padding-left: 16px; }
          .process__list::before { left: 19px; }
          .process__step { gap: 16px; }
          .process__marker { width: 40px; height: 40px; margin-left: -20px; }
          .process__marker-num { width: 40px; height: 40px; font-size: 0.8125rem; }
          .process__card { padding: 18px 20px; }
          .process__card-head { flex-direction: column; align-items: flex-start; gap: 6px; }
        }
      `}</style>
    </section>
  );
}
