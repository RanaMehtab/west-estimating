import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Stats from '../components/Stats.jsx';
import Trades from '../components/Trades.jsx';
import CTA from '../components/CTA.jsx';
import useReveal from '../hooks/useReveal.js';

const VALUES = [
  {
    icon: 'shield',
    title: 'Accuracy',
    body:
      "Every estimate is reviewed by a second senior estimator before it leaves the office. We document our assumptions so nothing's a black box."
  },
  {
    icon: 'clock',
    title: 'Speed',
    body:
      "Most takeoffs come back in 3–7 business days. When bid deadlines are tight, we offer 24-48 hour rush options without sacrificing quality."
  },
  {
    icon: 'team',
    title: 'Partnership',
    body:
      "We're not a black-box vendor. Direct line to the estimator on your job — quick call, fast answer, no support tickets."
  },
  {
    icon: 'dollar',
    title: 'Transparency',
    body:
      "Flat-fee pricing quoted in advance. What we quote is what you pay. No change orders on the estimate itself."
  }
];

export default function About() {
  useReveal();

  return (
    <>
      {/* Page header */}
      <section className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>About</span>
            </div>
            <span className="eyebrow">About West Estimating</span>
            <h1>Estimators who actually know construction.</h1>
            <p>
              We are a team of senior estimators serving general contractors, subcontractors, and
              developers across the United States. Real construction experience, real numbers, real
              fast.
            </p>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="about section">
        <div className="container">
          <div className="about__story">
            <div className="about__story-text reveal">
              <span className="eyebrow">Our Story</span>
              <h2>Built by estimators, for estimators.</h2>
              <p>
                West Estimating was founded by construction professionals who spent years on the
                other side of the desk — running pre-construction departments at mid-sized GCs.
                We knew what good estimates looked like, and we knew most outsourced takeoffs
                weren't it.
              </p>
              <p>
                So we built the firm we always wished we could hire: senior people only, clear
                pricing, fast turnaround, and assumptions documented on every line. No interns
                doing your takeoff. No mystery markups. No surprises in your inbox.
              </p>
              <p>
                Today, we handle pre-construction estimating for contractors in every state —
                everything from a single drywall takeoff to a full $40M GC estimate with all 32 CSI
                divisions.
              </p>
              <div className="about__story-actions">
                <Link to="/contact" className="btn btn--primary">
                  Work with us
                  <Icon name="arrow" size={14} className="arrow" />
                </Link>
                <Link to="/services" className="btn btn--outline">
                  See our services
                </Link>
              </div>
            </div>

            <div className="about__story-visual reveal">
              <div className="about__plan">
                <div className="about__plan-grid" aria-hidden="true"></div>
                <div className="about__plan-content">
                  <span className="about__plan-tag">Plan Sheet · A-101</span>
                  <h3>15+ years</h3>
                  <p>Field experience on our estimating team — average</p>
                  <div className="about__plan-stats">
                    <div>
                      <strong>$2.4B</strong>
                      <span>Total estimated value</span>
                    </div>
                    <div>
                      <strong>3,400+</strong>
                      <span>Projects delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values section section--warm">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What We Stand For</span>
            <h2>Four things we don't compromise on.</h2>
          </div>
          <div className="values__grid">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="values__card reveal"
                style={{ '--reveal-delay': `${i * 60}ms` }}
              >
                <div className="values__icon">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Trades />
      <CTA />

      <style>{`
        .about__story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about__story-text h2 { margin-bottom: 20px; }
        .about__story-text p {
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .about__story-actions {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .about__plan {
          position: relative;
          aspect-ratio: 4 / 5;
          background: var(--c-ink);
          color: white;
          border-radius: var(--radius-lg);
          padding: 36px;
          overflow: hidden;
          isolation: isolate;
        }
        .about__plan-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(245, 158, 11, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.12) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: -1;
        }
        .about__plan-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .about__plan-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--c-amber);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 6px 12px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 100px;
          display: inline-flex;
          align-self: flex-start;
          margin-bottom: 24px;
        }
        .about__plan h3 {
          color: white;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 12px;
          line-height: 1;
        }
        .about__plan p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          max-width: 24ch;
          margin-bottom: auto;
        }
        .about__plan-stats {
          display: flex;
          gap: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          margin-top: 24px;
        }
        .about__plan-stats strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--c-amber);
          line-height: 1.2;
          font-variant-numeric: tabular-nums;
        }
        .about__plan-stats span {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .values__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .values__card {
          padding: 28px 24px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          transition: transform var(--t), box-shadow var(--t);
        }
        .values__card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow);
        }
        .values__icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-bg-tint);
          color: var(--c-ink);
          border-radius: var(--radius);
          margin-bottom: 16px;
        }
        .values__card h3 {
          font-size: 1.0625rem;
          margin-bottom: 8px;
        }
        .values__card p {
          font-size: 0.9375rem;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .about__story { grid-template-columns: 1fr; gap: 56px; }
          .about__plan { max-width: 480px; }
          .values__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .values__grid { grid-template-columns: 1fr; }
          .about__plan { padding: 28px; }
        }
      `}</style>
    </>
  );
}
