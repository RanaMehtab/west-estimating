import { useState } from 'react';
import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';

const FAQS = [
  {
    q: 'How accurate are your estimates?',
    a:
      "On most projects our estimates land within ±5% of final construction cost. Highly conceptual projects (where plans are partial or schematic) sit closer to ±10%. We log every assumption so any variance is traceable — no black-box numbers."
  },
  {
    q: 'How long does a typical estimate take?',
    a:
      "Single-trade takeoffs usually come back in 3–5 business days. Full GC estimates take 7–10 business days. We offer 48-hour rush turnaround for tight bid deadlines at a small premium — just ask when you send the plans."
  },
  {
    q: 'What plan formats can you work from?',
    a:
      'PDFs, DWGs, Revit exports, hard-copy blueprints, even rough hand sketches. If we need clarification we ask before starting work — never after. You can send files via email, Dropbox, Google Drive, or a project management tool you already use.'
  },
  {
    q: 'How do you price your services?',
    a:
      'Most jobs are flat-fee, quoted in advance based on scope and complexity. Some clients prefer per-sheet or hourly pricing for ongoing work — we can structure either way. There are no hidden charges and the price you see is the price you pay.'
  },
  {
    q: 'Do you sign NDAs?',
    a:
      'Yes, standard practice. We sign your NDA before any plans change hands. If you do not have one, we will provide ours. All project files are stored encrypted and never shared with third parties.'
  },
  {
    q: 'Can you help reduce project costs?',
    a:
      'Yes — value engineering is included in our cost-estimation deliverable. We flag where alternate materials or assemblies could save money without changing the design intent, and quantify the savings for each option.'
  },
  {
    q: 'Do you provide ongoing support during construction?',
    a:
      'Our core deliverable is pre-construction estimating, but several long-term clients keep us on retainer for change-order pricing, cost forecasting, and budget tracking through the build. Ask about our cost-management packages.'
  },
  {
    q: 'What software do you use?',
    a:
      'PlanSwift, Bluebeam Revu, Trimble Accubid, and STACK are our day-to-day tools. We deliver in formats that fit your workflow — Excel, PDF, and marked-up plan files.'
  }
];

function FAQItem({ q, a, isOpen, onToggle, index }) {
  return (
    <div
      className={`faq__item reveal ${isOpen ? 'is-open' : ''}`}
      style={{ '--reveal-delay': `${index * 40}ms` }}
    >
      <button
        className="faq__btn"
        aria-expanded={isOpen}
        onClick={onToggle}
        type="button"
      >
        <span className="faq__num">{String(index + 1).padStart(2, '0')}</span>
        <span className="faq__q">{q}</span>
        <span className="faq__icon" aria-hidden="true">
          <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
        </span>
      </button>
      <div className="faq__panel" role="region">
        <div className="faq__panel-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  useReveal();

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__layout">
          <div className="faq__intro reveal">
            <span className="eyebrow">Common Questions</span>
            <h2>Everything you might want to know — answered.</h2>
            <p>
              Still curious about something? Send a quick note. A real estimator (not a chatbot)
              will get back to you within one business day.
            </p>
            <a href="mailto:hello@westestimating.com" className="btn btn--outline">
              Ask a question
              <Icon name="arrow" size={14} className="arrow" />
            </a>
          </div>

          <div className="faq__list">
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq__layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: start;
        }
        .faq__intro h2 { margin-bottom: 16px; }
        .faq__intro p {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .faq__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq__item {
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius);
          transition: border-color var(--t), box-shadow var(--t);
          overflow: hidden;
        }
        .faq__item.is-open {
          border-color: var(--c-border-strong);
          box-shadow: var(--shadow);
        }
        .faq__btn {
          width: 100%;
          padding: 20px 24px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
          text-align: left;
          font-family: var(--font-display);
          color: var(--c-ink);
          transition: background var(--t-fast);
        }
        .faq__btn:hover { background: var(--c-bg-warm); }
        .faq__num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--c-amber-deep);
          letter-spacing: 0.04em;
        }
        .faq__q {
          font-size: 1rem;
          font-weight: 600;
        }
        .faq__icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-bg-alt);
          border-radius: var(--radius-sm);
          color: var(--c-ink);
          transition: background var(--t-fast), color var(--t-fast);
        }
        .faq__item.is-open .faq__icon {
          background: var(--c-ink);
          color: var(--c-amber);
        }
        .faq__panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows var(--t-slow);
        }
        .faq__item.is-open .faq__panel {
          grid-template-rows: 1fr;
        }
        .faq__panel-inner {
          overflow: hidden;
        }
        .faq__panel-inner p {
          padding: 0 24px 24px 64px;
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--c-text-muted);
          margin: 0;
        }
        @media (max-width: 900px) {
          .faq__layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 600px) {
          .faq__btn { padding: 16px 18px; gap: 12px; }
          .faq__panel-inner p { padding: 0 18px 20px 48px; }
        }
      `}</style>
    </section>
  );
}
