import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm.jsx';
import Icon from '../components/Icon.jsx';
import useReveal from '../hooks/useReveal.js';

const INFO = [
  {
    icon: 'phone',
    label: 'Call us',
    value: '(800) 555-1200',
    sub: 'Mon–Fri 7am–7pm PST',
    href: 'tel:+18005551200'
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'hello@westestimating.com',
    sub: 'Response within one business day',
    href: 'mailto:hello@westestimating.com'
  },
  {
    icon: 'pin',
    label: 'Visit',
    value: '1100 W Olympic Blvd, Suite 400',
    sub: 'Los Angeles, CA 90015',
    href: null
  },
  {
    icon: 'clock',
    label: 'Hours',
    value: 'Mon–Fri · 7am–7pm PST',
    sub: 'Saturday · 9am–4pm PST',
    href: null
  }
];

export default function Contact() {
  useReveal();

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>Contact</span>
            </div>
            <span className="eyebrow">Get In Touch</span>
            <h1>Let's talk about your project.</h1>
            <p>
              Tell us what you need and we'll send a fixed quote — usually within hours. No
              commitment, no sales pressure, just clear numbers.
            </p>
          </div>
        </div>
      </section>

      <section className="contact section section--warm">
        <div className="container">
          <div className="contact__layout">
            <div className="contact__form-side reveal">
              <span className="eyebrow">Send Us a Message</span>
              <h2>Start a new project</h2>
              <p className="contact__intro">
                Fill out the form and our estimating team will get back to you within one business
                day. For urgent quotes, just call directly.
              </p>
              <ContactForm />
            </div>

            <aside className="contact__info-side reveal">
              <div className="contact__info-card">
                <span className="eyebrow">Contact Info</span>
                <h3>Reach us directly</h3>
                <p>Multiple ways to get in touch — pick whatever works for you.</p>

                <div className="contact__info-list">
                  {INFO.map((item) => (
                    <div key={item.label} className="contact__info-item">
                      <div className="contact__info-icon">
                        <Icon name={item.icon} size={18} />
                      </div>
                      <div className="contact__info-text">
                        <span className="contact__info-label">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="contact__info-value">
                            {item.value}
                          </a>
                        ) : (
                          <span className="contact__info-value">{item.value}</span>
                        )}
                        <span className="contact__info-sub">{item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact__map" aria-hidden="true">
                <div className="contact__map-grid"></div>
                <div className="contact__map-pin">
                  <Icon name="pin" size={28} />
                </div>
                <div className="contact__map-label">
                  <strong>Los Angeles, CA</strong>
                  <span>Serving all 50 states</span>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <style>{`
          .contact__layout {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 56px;
            align-items: start;
          }
          .contact__form-side h2 { margin-bottom: 16px; }
          .contact__intro {
            font-size: 1rem;
            line-height: 1.7;
            margin-bottom: 32px;
            max-width: 52ch;
          }
          .contact__info-card {
            padding: 36px;
            background: var(--c-ink);
            color: white;
            border-radius: var(--radius-lg);
            margin-bottom: 16px;
          }
          .contact__info-card .eyebrow { color: var(--c-amber); }
          .contact__info-card h3 {
            color: white;
            font-size: 1.25rem;
            margin-bottom: 8px;
          }
          .contact__info-card p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9375rem;
            margin-bottom: 28px;
            line-height: 1.6;
          }
          .contact__info-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .contact__info-item {
            display: flex;
            gap: 14px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }
          .contact__info-item:first-child {
            padding-top: 0;
            border-top: none;
          }
          .contact__info-icon {
            flex-shrink: 0;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(245, 158, 11, 0.12);
            color: var(--c-amber);
            border-radius: var(--radius-sm);
          }
          .contact__info-text {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;
          }
          .contact__info-label {
            font-family: var(--font-mono);
            font-size: 0.6875rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }
          .contact__info-value {
            font-family: var(--font-display);
            font-size: 1rem;
            font-weight: 600;
            color: white;
            line-height: 1.3;
            word-break: break-word;
          }
          a.contact__info-value:hover { color: var(--c-amber); }
          .contact__info-sub {
            font-size: 0.8125rem;
            color: rgba(255, 255, 255, 0.6);
          }

          .contact__map {
            position: relative;
            aspect-ratio: 4 / 3;
            background: var(--c-bg-tint);
            border: 1px solid var(--c-border);
            border-radius: var(--radius-lg);
            overflow: hidden;
            isolation: isolate;
          }
          .contact__map-grid {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(10, 37, 64, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10, 37, 64, 0.06) 1px, transparent 1px);
            background-size: 32px 32px;
            z-index: -1;
          }
          .contact__map-pin {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -100%);
            color: var(--c-amber);
            filter: drop-shadow(0 4px 8px rgba(10, 37, 64, 0.2));
          }
          .contact__map-pin svg { fill: var(--c-amber); }
          .contact__map-label {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 10px 20px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            text-align: center;
          }
          .contact__map-label strong {
            display: block;
            font-family: var(--font-display);
            font-size: 0.875rem;
            color: var(--c-ink);
          }
          .contact__map-label span {
            font-size: 0.75rem;
            color: var(--c-text-muted);
          }

          @media (max-width: 1024px) {
            .contact__layout {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
          @media (max-width: 600px) {
            .contact__info-card { padding: 24px; }
          }
        `}</style>
      </section>
    </>
  );
}
