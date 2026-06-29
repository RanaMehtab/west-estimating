import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { services } from '../data/services.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Add shadow when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        {/* Logo */}
        <Link to="/" className="nav__logo" aria-label="West Estimating — home">
          <span className="nav__logo-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <rect width="32" height="32" rx="7" fill="var(--c-ink)" />
              <path
                d="M7 9 L11 23 L14 15 L17 23 L21 9 L18 9 L15.5 18 L13 9 L11 9 L9.5 15 L7 9 Z"
                fill="var(--c-amber)"
              />
            </svg>
          </span>
          <span className="nav__logo-text">
            <span className="nav__logo-name">West Estimating</span>
            <span className="nav__logo-tagline">Construction Cost Experts</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/" end className="nav__link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
          <div
            className={`nav__dropdown ${servicesOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className="nav__link nav__link--has-arrow"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </NavLink>
            <div className="nav__menu" role="menu">
              <div className="nav__menu-head">
                <span className="eyebrow">Our Services</span>
                <h4>Complete estimating coverage</h4>
                <p>From conceptual budgets to bid-ready takeoffs across every trade.</p>
              </div>
              <div className="nav__menu-grid">
                {services.slice(0, 8).map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="nav__menu-item">
                    <span className="nav__menu-item-icon">
                      <Icon name={s.icon} size={18} />
                    </span>
                    <div>
                      <strong>{s.title}</strong>
                      <span>{s.shortDescription}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/services" className="nav__menu-foot">
                View all services
                <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>
          <NavLink to="/contact" className="nav__link">
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn btn--primary nav__cta">
          Get a Free Quote
          <Icon name="arrow" size={14} className="arrow" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="nav__burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="nav__drawer-inner" aria-label="Mobile">
          <NavLink to="/" end className="nav__drawer-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav__drawer-link">
            About
          </NavLink>
          <NavLink to="/services" className="nav__drawer-link">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav__drawer-link">
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn--primary btn--lg nav__drawer-cta">
            Get a Free Quote
            <Icon name="arrow" size={16} className="arrow" />
          </Link>
        </nav>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: saturate(180%) blur(14px);
          -webkit-backdrop-filter: saturate(180%) blur(14px);
          border-bottom: 1px solid transparent;
          transition: box-shadow var(--t), border-color var(--t);
        }
        .nav--scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-bottom-color: var(--c-border);
          box-shadow: 0 4px 24px -8px rgba(10, 37, 64, 0.08);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          height: 76px;
        }
        .nav__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--c-ink);
          flex-shrink: 0;
        }
        .nav__logo:hover { color: var(--c-ink); }
        .nav__logo-mark { display: flex; }
        .nav__logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .nav__logo-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1875rem;
          letter-spacing: -0.025em;
          color: var(--c-ink);
        }
        .nav__logo-tagline {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--c-text-muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .nav__links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav__link {
          position: relative;
          padding: 10px 16px;
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--c-text);
          border-radius: var(--radius-sm);
          transition: color var(--t-fast), background var(--t-fast);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .nav__link:hover {
          color: var(--c-ink);
          background: var(--c-bg-alt);
        }
        .nav__link.active {
          color: var(--c-ink);
        }
        .nav__link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 16px;
          right: 16px;
          height: 2px;
          background: var(--c-amber);
          border-radius: 1px;
        }
        .nav__link--has-arrow svg { transition: transform var(--t-fast); }
        .nav__dropdown.is-open .nav__link--has-arrow svg { transform: rotate(180deg); }

        /* Dropdown mega-menu */
        .nav__dropdown {
          position: relative;
        }
        .nav__menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          width: 720px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: 24px;
          opacity: 0;
          visibility: hidden;
          transition: opacity var(--t), transform var(--t), visibility var(--t);
        }
        .nav__dropdown.is-open .nav__menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .nav__menu-head {
          padding: 0 8px 16px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--c-border);
        }
        .nav__menu-head h4 {
          font-size: 1rem;
          margin-bottom: 4px;
        }
        .nav__menu-head p {
          font-size: 0.8125rem;
          color: var(--c-text-muted);
          margin: 0;
        }
        .nav__menu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }
        .nav__menu-item {
          display: flex;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius);
          color: var(--c-text);
          transition: background var(--t-fast);
        }
        .nav__menu-item:hover {
          background: var(--c-bg-alt);
          color: var(--c-ink);
        }
        .nav__menu-item-icon {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-bg-tint);
          color: var(--c-ink);
          border-radius: var(--radius-sm);
        }
        .nav__menu-item strong {
          display: block;
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--c-ink);
          margin-bottom: 2px;
        }
        .nav__menu-item span {
          font-size: 0.75rem;
          color: var(--c-text-muted);
          line-height: 1.45;
        }
        .nav__menu-foot {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          padding: 8px 12px;
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--c-amber-deep);
        }
        .nav__menu-foot:hover { color: var(--c-amber-deep); gap: 10px; }

        .nav__cta { padding: 11px 20px; font-size: 0.875rem; }
        .nav__burger {
          display: none;
          padding: 8px;
          color: var(--c-ink);
        }

        .nav__drawer {
          position: fixed;
          top: 76px;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          z-index: 49;
          transform: translateX(100%);
          transition: transform var(--t-slow);
          overflow-y: auto;
        }
        .nav__drawer.is-open {
          transform: translateX(0);
        }
        .nav__drawer-inner {
          display: flex;
          flex-direction: column;
          padding: 32px 24px;
          gap: 4px;
        }
        .nav__drawer-link {
          padding: 16px 4px;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--c-ink);
          border-bottom: 1px solid var(--c-border);
        }
        .nav__drawer-link.active { color: var(--c-amber-deep); }
        .nav__drawer-cta { margin-top: 24px; }

        @media (max-width: 1050px) {
          .nav__links { display: none; }
          .nav__cta { display: none; }
          .nav__burger { display: inline-flex; }
        }
        @media (max-width: 600px) {
          .nav__inner { height: 64px; }
          .nav__drawer { top: 64px; }
          .nav__logo-tagline { display: none; }
        }
      `}</style>
    </header>
  );
}
