import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api.js';
import { services as staticServices } from '../data/services.js';
import ServiceCard from '../components/ServiceCard.jsx';
import Process from '../components/Process.jsx';
import CTA from '../components/CTA.jsx';
import useReveal from '../hooks/useReveal.js';

const CATEGORIES = ['All', 'Estimating', 'General Contractor', 'Sub-Contractor', 'Design'];

export default function Services() {
  const [services, setServices] = useState(staticServices);
  const [activeCategory, setActiveCategory] = useState('All');
  useReveal([services, activeCategory]);

  useEffect(() => {
    let cancelled = false;
    api
      .listServices()
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length) setServices(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return services;
    return services.filter((s) => s.category === activeCategory);
  }, [services, activeCategory]);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>Services</span>
            </div>
            <span className="eyebrow">Our Services</span>
            <h1>Complete estimating coverage — every trade, every division.</h1>
            <p>
              From single-trade takeoffs to full GC estimates with all CSI divisions. Pick what you
              need, or call and we'll scope it together.
            </p>
          </div>
        </div>
      </section>

      <section className="svc-page section section--warm">
        <div className="container">
          {/* Category filter */}
          <div className="svc-page__filter reveal" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`svc-page__filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="svc-page__filter-count">
                  {cat === 'All'
                    ? services.length
                    : services.filter((s) => s.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="svc-page__grid">
            {filtered.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="svc-page__empty">No services in this category yet.</p>
          )}
        </div>

        <style>{`
          .svc-page__filter {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 40px;
            padding-bottom: 32px;
            border-bottom: 1px solid var(--c-border);
          }
          .svc-page__filter-btn {
            padding: 9px 18px;
            background: white;
            border: 1px solid var(--c-border);
            border-radius: 100px;
            font-family: var(--font-display);
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--c-text);
            transition: all var(--t-fast);
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .svc-page__filter-btn:hover {
            border-color: var(--c-border-strong);
            background: var(--c-bg-alt);
          }
          .svc-page__filter-btn.is-active {
            background: var(--c-ink);
            color: white;
            border-color: var(--c-ink);
          }
          .svc-page__filter-count {
            font-family: var(--font-mono);
            font-size: 0.6875rem;
            padding: 2px 6px;
            background: rgba(0, 0, 0, 0.08);
            border-radius: 6px;
          }
          .svc-page__filter-btn.is-active .svc-page__filter-count {
            background: rgba(245, 158, 11, 0.25);
            color: var(--c-amber);
          }

          .svc-page__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .svc-page__empty {
            text-align: center;
            padding: 64px;
            color: var(--c-text-muted);
          }
          @media (max-width: 1024px) {
            .svc-page__grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 600px) {
            .svc-page__grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <Process />
      <CTA />
    </>
  );
}
