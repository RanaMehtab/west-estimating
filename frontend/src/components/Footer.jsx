import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { services } from '../data/services.js';

export default function Footer() {
  const year = new Date().getFullYear();
  const featured = services.slice(0, 6);

  return (
    <footer className="footer">
      {/* Pre-footer CTA strip */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div>
            <span className="eyebrow">Ready to bid?</span>
            <h3>Send us your plans — get an estimate in 3–7 days</h3>
          </div>
          <div className="footer__cta-actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Start a Project
              <Icon name="arrow" size={16} className="arrow" />
            </Link>
            <a href="tel:+18005551200" className="btn btn--ghost btn--lg">
              <Icon name="phone" size={16} />
              (800) 555-1200
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__main">
        {/* Brand column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="West Estimating">
            <svg viewBox="0 0 36 36" width="36" height="36" aria-hidden="true">
              <rect width="36" height="36" rx="8" fill="white" />
              <path
                d="M8 10 L12 26 L16 16 L19 26 L23 10 L20 10 L17.5 21 L14.5 10 L12 10 L10.5 17 L8 10 Z"
                fill="var(--c-amber)"
              />
            </svg>
            <span>
              <strong>West Estimating</strong>
              <span>Construction Cost Experts</span>
            </span>
          </Link>
          <p>
            Accurate, on-time construction estimates and quantity takeoffs for general contractors,
            subcontractors, and developers across all 50 states.
          </p>
          <div className="footer__contacts">
            <a href="tel:+18005551200" className="footer__contact">
              <Icon name="phone" size={16} />
              <span>(800) 555-1200</span>
            </a>
            <a href="mailto:hello@westestimating.com" className="footer__contact">
              <Icon name="mail" size={16} />
              <span>hello@westestimating.com</span>
            </a>
            <span className="footer__contact">
              <Icon name="pin" size={16} />
              <span>1100 W Olympic Blvd, Suite 400, Los Angeles, CA 90015</span>
            </span>
          </div>
        </div>

        {/* Services column */}
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {featured.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="footer__more">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company column */}
        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">All Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        {/* Hours / trust column */}
        <div className="footer__col">
          <h4>Office Hours</h4>
          <ul className="footer__hours">
            <li>
              <span>Mon – Fri</span>
              <span className="footer__time">7:00 AM – 7:00 PM PST</span>
            </li>
            <li>
              <span>Saturday</span>
              <span className="footer__time">9:00 AM – 4:00 PM PST</span>
            </li>
            <li>
              <span>Sunday</span>
              <span className="footer__time footer__time--muted">Closed</span>
            </li>
          </ul>
          <div className="footer__trust">
            <Icon name="shield" size={20} />
            <div>
              <strong>Confidential</strong>
              <span>NDA on every project</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__bar">
        <div className="footer__bar-left">
          <span>© {year} West Estimating, LLC. All rights reserved.</span>
          <span className="footer__credit">
            Built by <strong>Rana Mehtab</strong>
          </span>
        </div>
        <div className="footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="#terms">Terms of Service</a>
          <span aria-hidden="true">·</span>
          <a href="#sitemap">Sitemap</a>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--c-ink-deep);
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.9375rem;
        }
        .footer h4 {
          color: white;
          font-size: 0.9375rem;
          margin-bottom: 18px;
          letter-spacing: -0.005em;
        }

        /* CTA strip */
        .footer__cta {
          background: linear-gradient(135deg, #133a66 0%, var(--c-ink) 100%);
          padding: 56px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }
        .footer__cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
        }
        .footer__cta-inner {
          position: relative;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: center;
        }
        .footer__cta h3 {
          color: white;
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          margin: 0;
        }
        .footer__cta .eyebrow { color: var(--c-amber); }
        .footer__cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Main footer */
        .footer__main {
          padding: 72px 24px 56px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 56px;
        }
        .footer__logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: white;
          margin-bottom: 18px;
        }
        .footer__logo:hover { color: white; }
        .footer__logo strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .footer__logo > span > span {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .footer__brand p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9375rem;
          line-height: 1.65;
          margin-bottom: 24px;
          max-width: 36ch;
        }
        .footer__contacts {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer__contact {
          display: inline-flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.875rem;
          line-height: 1.5;
        }
        a.footer__contact:hover { color: var(--c-amber); }
        .footer__contact svg { flex-shrink: 0; margin-top: 2px; color: var(--c-amber); }

        .footer__col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer__col a {
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.9375rem;
          transition: color var(--t-fast);
        }
        .footer__col a:hover { color: var(--c-amber); }
        .footer__more { color: var(--c-amber) !important; font-weight: 500; }

        .footer__hours li {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          padding: 4px 0;
        }
        .footer__hours li > span:first-child { color: rgba(255, 255, 255, 0.6); }
        .footer__time { color: white; font-family: var(--font-mono); font-size: 0.8125rem; }
        .footer__time--muted { color: rgba(255, 255, 255, 0.4); }

        .footer__trust {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius);
        }
        .footer__trust svg { color: var(--c-amber); flex-shrink: 0; }
        .footer__trust strong {
          display: block;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .footer__trust span { font-size: 0.75rem; color: rgba(255, 255, 255, 0.6); }

        /* Bottom bar */
        .footer__bar {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer__bar-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer__credit {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 100px;
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          letter-spacing: 0.02em;
        }
        .footer__credit strong {
          color: var(--c-amber);
          font-weight: 600;
        }
        .footer__legal {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .footer__legal a {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8125rem;
        }
        .footer__legal a:hover { color: var(--c-amber); }

        @media (max-width: 1024px) {
          .footer__main {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 760px) {
          .footer__cta-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer__cta-actions { justify-content: center; }
        }
        @media (max-width: 600px) {
          .footer__main {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 56px 18px 40px;
          }
          .footer__bar {
            flex-direction: column;
            text-align: center;
            padding: 20px 18px;
          }
        }
      `}</style>
    </footer>
  );
}
