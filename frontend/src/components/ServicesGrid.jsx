import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard.jsx';
import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';

export default function ServicesGrid({ services, title, eyebrow, intro, showAllLink = true, limit }) {
  useReveal([services]);
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="services section section--warm" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{eyebrow || 'What We Do'}</span>
          <h2>{title || 'Estimating services built around your scope'}</h2>
          <p>{intro || 'From single-trade takeoffs to full GC estimates — pick the depth you need and we handle the rest.'}</p>
        </div>

        <div className="services__grid">
          {list.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        {showAllLink && (
          <div className="services__all reveal">
            <Link to="/services" className="btn btn--outline btn--lg">
              View all services
              <Icon name="arrow" size={16} className="arrow" />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .services__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .services__all {
          margin-top: 56px;
          text-align: center;
        }
        @media (max-width: 1100px) {
          .services__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 820px) {
          .services__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .services__grid { grid-template-columns: 1fr; gap: 14px; }
        }
      `}</style>
    </section>
  );
}
