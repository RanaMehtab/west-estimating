import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <section className="nf">
      <div className="container nf__inner">
        <div className="nf__code" aria-hidden="true">404</div>
        <h1>Page not found</h1>
        <p>
          That page got lost on the way to the jobsite. Let's get you back to something useful.
        </p>
        <div className="nf__actions">
          <Link to="/" className="btn btn--primary btn--lg">
            <Icon name="arrow" size={16} style={{ transform: 'rotate(180deg)' }} />
            Back to Home
          </Link>
          <Link to="/services" className="btn btn--outline btn--lg">
            See Services
          </Link>
        </div>
      </div>

      <style>{`
        .nf {
          min-height: 60vh;
          display: flex;
          align-items: center;
          padding: 96px 0;
          background: var(--c-bg-warm);
        }
        .nf__inner {
          text-align: center;
          max-width: 560px;
        }
        .nf__code {
          font-family: var(--font-display);
          font-size: clamp(6rem, 18vw, 11rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.06em;
          background: linear-gradient(180deg, var(--c-ink) 0%, var(--c-amber) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 8px;
        }
        .nf h1 { margin-bottom: 12px; }
        .nf p {
          font-size: 1.0625rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .nf__actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
