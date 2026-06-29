import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api.js';
import { services as staticServices } from '../data/services.js';
import Icon from '../components/Icon.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CTA from '../components/CTA.jsx';
import useReveal from '../hooks/useReveal.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const fallback = useMemo(
    () => staticServices.find((s) => s.slug === slug),
    [slug]
  );
  const [service, setService] = useState(fallback);
  const [notFound, setNotFound] = useState(false);

  useReveal([service]);

  useEffect(() => {
    let cancelled = false;
    setService(fallback);
    setNotFound(false);
    api
      .getService(slug)
      .then((data) => {
        if (!cancelled && data) setService(data);
      })
      .catch((err) => {
        if (err.status === 404 && !fallback) {
          if (!cancelled) setNotFound(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [slug, fallback]);

  if (notFound || !service) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 12 }}>Service not found</h2>
          <p style={{ marginBottom: 24 }}>That service doesn't exist or has been moved.</p>
          <Link to="/services" className="btn btn--primary">
            See all services
          </Link>
        </div>
      </section>
    );
  }

  const related = staticServices
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span>{service.title}</span>
            </div>
            <span className="eyebrow">{service.category}</span>
            <h1>{service.title}</h1>
            <p>{service.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="svc-detail section">
        <div className="container">
          <div className="svc-detail__layout">
            <div className="svc-detail__main">
              <div className="reveal">
                <h2>Overview</h2>
                <p className="svc-detail__lead">{service.fullDescription}</p>
              </div>

              <div className="svc-detail__features reveal">
                <h3>What's included</h3>
                <ul>
                  {service.features.map((f, i) => (
                    <li key={i}>
                      <span className="svc-detail__check">
                        <Icon name="check" size={14} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="svc-detail__cta reveal">
                <div>
                  <h3>Ready to get started?</h3>
                  <p>Send us your plans and we'll send a fixed quote within hours.</p>
                </div>
                <Link to="/contact" className="btn btn--primary btn--lg">
                  Request a Quote
                  <Icon name="arrow" size={16} className="arrow" />
                </Link>
              </div>
            </div>

            <aside className="svc-detail__sidebar reveal">
              <div className="svc-detail__card">
                <div className="svc-detail__card-icon">
                  <Icon name={service.icon} size={26} />
                </div>
                <h4>{service.title}</h4>

                <dl className="svc-detail__meta">
                  <div>
                    <dt>Turnaround</dt>
                    <dd>{service.turnaround || '3–7 business days'}</dd>
                  </div>
                  <div>
                    <dt>Category</dt>
                    <dd>{service.category}</dd>
                  </div>
                  <div>
                    <dt>Pricing</dt>
                    <dd>Flat-fee, quoted in advance</dd>
                  </div>
                </dl>

                {service.deliverables && (
                  <>
                    <div className="svc-detail__divider"></div>
                    <h5>You'll receive</h5>
                    <ul className="svc-detail__deliverables">
                      {service.deliverables.map((d) => (
                        <li key={d}>
                          <Icon name="check" size={14} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="svc-detail__divider"></div>
                <Link to="/contact" className="btn btn--primary svc-detail__card-cta">
                  Request this service
                  <Icon name="arrow" size={14} className="arrow" />
                </Link>
                <a href="tel:+18005551200" className="btn btn--outline svc-detail__card-cta">
                  <Icon name="phone" size={14} />
                  (800) 555-1200
                </a>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="svc-detail__related">
              <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: 'none', marginBottom: 32 }}>
                <span className="eyebrow">Related Services</span>
                <h2 style={{ margin: 0 }}>Other ways we can help</h2>
              </div>
              <div className="svc-detail__related-grid">
                {related.map((s, i) => (
                  <ServiceCard key={s.slug} service={s} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>

        <style>{`
          .svc-detail__layout {
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 64px;
            align-items: start;
          }
          .svc-detail__main h2 { margin-bottom: 16px; }
          .svc-detail__lead {
            font-size: 1.0625rem;
            line-height: 1.75;
            color: var(--c-text-muted);
            margin-bottom: 48px;
          }
          .svc-detail__features {
            padding: 32px;
            background: var(--c-bg-warm);
            border: 1px solid var(--c-border);
            border-radius: var(--radius-lg);
            margin-bottom: 32px;
          }
          .svc-detail__features h3 {
            font-size: 1.125rem;
            margin-bottom: 18px;
          }
          .svc-detail__features ul {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px 24px;
          }
          .svc-detail__features li {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            font-size: 0.9375rem;
            line-height: 1.55;
            color: var(--c-text);
          }
          .svc-detail__check {
            flex-shrink: 0;
            width: 22px;
            height: 22px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--c-amber);
            color: white;
            border-radius: 50%;
            margin-top: 1px;
          }
          .svc-detail__cta {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 24px;
            align-items: center;
            padding: 32px;
            background: var(--c-ink);
            color: white;
            border-radius: var(--radius-lg);
          }
          .svc-detail__cta h3 { color: white; margin-bottom: 4px; font-size: 1.125rem; }
          .svc-detail__cta p { color: rgba(255, 255, 255, 0.75); margin: 0; font-size: 0.9375rem; }

          /* Sidebar */
          .svc-detail__sidebar { position: sticky; top: 100px; }
          .svc-detail__card {
            padding: 32px;
            background: white;
            border: 1px solid var(--c-border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow);
          }
          .svc-detail__card-icon {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--c-ink);
            color: var(--c-amber);
            border-radius: var(--radius);
            margin-bottom: 18px;
          }
          .svc-detail__card h4 {
            font-size: 1.0625rem;
            margin-bottom: 18px;
          }
          .svc-detail__card h5 {
            font-family: var(--font-display);
            font-size: 0.8125rem;
            font-weight: 600;
            color: var(--c-text-muted);
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 12px;
          }
          .svc-detail__meta {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 0;
          }
          .svc-detail__meta > div {
            display: flex;
            justify-content: space-between;
            font-size: 0.875rem;
          }
          .svc-detail__meta dt { color: var(--c-text-muted); }
          .svc-detail__meta dd {
            font-family: var(--font-mono);
            font-weight: 500;
            color: var(--c-ink);
            text-align: right;
            margin: 0;
          }
          .svc-detail__divider {
            height: 1px;
            background: var(--c-border);
            margin: 24px -32px;
          }
          .svc-detail__deliverables {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .svc-detail__deliverables li {
            display: flex;
            gap: 8px;
            font-size: 0.875rem;
            color: var(--c-text);
          }
          .svc-detail__deliverables svg { color: var(--c-amber); flex-shrink: 0; margin-top: 4px; }
          .svc-detail__card-cta {
            width: 100%;
            margin-bottom: 8px;
            font-size: 0.875rem;
            padding: 11px 18px;
          }
          .svc-detail__card-cta:last-child { margin-bottom: 0; }

          /* Related */
          .svc-detail__related {
            margin-top: 80px;
            padding-top: 56px;
            border-top: 1px solid var(--c-border);
          }
          .svc-detail__related-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          @media (max-width: 1024px) {
            .svc-detail__layout {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .svc-detail__sidebar { position: static; }
            .svc-detail__related-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 600px) {
            .svc-detail__features ul { grid-template-columns: 1fr; }
            .svc-detail__cta {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .svc-detail__related-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <CTA />
    </>
  );
}
