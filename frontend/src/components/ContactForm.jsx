import { useState } from 'react';
import { api } from '../api.js';
import { services } from '../data/services.js';
import Icon from './Icon.jsx';

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
};

export default function ContactForm() {
  const [data, setData] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrors({});
    try {
      const res = await api.submitContact(data);
      setStatus('success');
      setServerMessage(res.message);
      setData(INITIAL);
    } catch (err) {
      setStatus('error');
      if (err.body?.errors) {
        setErrors(err.body.errors);
        setServerMessage('Please fix the highlighted fields and try again.');
      } else {
        setServerMessage('Something went wrong sending your message. Please try again or email us directly.');
      }
    }
  }

  if (status === 'success') {
    return (
      <div className="cf cf--success">
        <div className="cf__success-icon">
          <Icon name="check" size={28} />
        </div>
        <h3>Message received</h3>
        <p>{serverMessage}</p>
        <button
          className="btn btn--outline"
          onClick={() => {
            setStatus('idle');
            setServerMessage('');
          }}
        >
          Send another message
        </button>

        <style>{`
          .cf--success {
            text-align: center;
            padding: 48px 32px;
            background: white;
            border: 1px solid var(--c-border);
            border-radius: var(--radius-lg);
          }
          .cf__success-icon {
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            background: #DCFCE7;
            color: #166534;
            border-radius: 50%;
          }
          .cf--success h3 { margin-bottom: 8px; }
          .cf--success p {
            margin-bottom: 24px;
            max-width: 40ch;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </div>
    );
  }

  return (
    <form className="cf" onSubmit={handleSubmit} noValidate>
      <div className="cf__row">
        <div className={`cf__field ${errors.name ? 'has-error' : ''}`}>
          <label htmlFor="cf-name">Full Name *</label>
          <input
            id="cf-name"
            type="text"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="John Smith"
            required
            autoComplete="name"
          />
          {errors.name && <span className="cf__error">{errors.name}</span>}
        </div>
        <div className={`cf__field ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="cf-email">Email *</label>
          <input
            id="cf-email"
            type="email"
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@company.com"
            required
            autoComplete="email"
          />
          {errors.email && <span className="cf__error">{errors.email}</span>}
        </div>
      </div>

      <div className="cf__row">
        <div className="cf__field">
          <label htmlFor="cf-phone">Phone</label>
          <input
            id="cf-phone"
            type="tel"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(555) 555-1234"
            autoComplete="tel"
          />
        </div>
        <div className="cf__field">
          <label htmlFor="cf-company">Company</label>
          <input
            id="cf-company"
            type="text"
            value={data.company}
            onChange={(e) => update('company', e.target.value)}
            placeholder="Your company"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="cf__field">
        <label htmlFor="cf-service">Service Needed</label>
        <select
          id="cf-service"
          value={data.service}
          onChange={(e) => update('service', e.target.value)}
        >
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </div>

      <div className={`cf__field ${errors.message ? 'has-error' : ''}`}>
        <label htmlFor="cf-message">Project Details *</label>
        <textarea
          id="cf-message"
          rows={5}
          value={data.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us about your project — size, scope, timeline, plan format. The more detail, the faster we can quote."
          required
        />
        {errors.message && <span className="cf__error">{errors.message}</span>}
      </div>

      {status === 'error' && serverMessage && (
        <div className="cf__alert" role="alert">
          {serverMessage}
        </div>
      )}

      <button
        type="submit"
        className="btn btn--primary btn--lg cf__submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          'Sending…'
        ) : (
          <>
            Send Message
            <Icon name="arrow" size={16} className="arrow" />
          </>
        )}
      </button>

      <p className="cf__note">
        Or email us directly at{' '}
        <a href="mailto:hello@westestimating.com">hello@westestimating.com</a>. We respond within
        one business day.
      </p>

      <style>{`
        .cf {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 36px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
        }
        .cf__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .cf__field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cf__field label {
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--c-ink);
        }
        .cf__field input,
        .cf__field select,
        .cf__field textarea {
          padding: 12px 14px;
          background: white;
          border: 1.5px solid var(--c-border);
          border-radius: var(--radius);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--c-text);
          transition: border-color var(--t-fast), box-shadow var(--t-fast);
        }
        .cf__field textarea { resize: vertical; min-height: 120px; line-height: 1.6; }
        .cf__field input:focus,
        .cf__field select:focus,
        .cf__field textarea:focus {
          outline: none;
          border-color: var(--c-amber);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
        }
        .cf__field input::placeholder,
        .cf__field textarea::placeholder { color: var(--c-text-faint); }
        .cf__field.has-error input,
        .cf__field.has-error textarea,
        .cf__field.has-error select {
          border-color: #DC2626;
        }
        .cf__error {
          font-size: 0.8125rem;
          color: #DC2626;
          margin-top: 2px;
        }
        .cf__alert {
          padding: 14px 16px;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          color: #991B1B;
          border-radius: var(--radius);
          font-size: 0.875rem;
        }
        .cf__submit {
          margin-top: 8px;
          width: 100%;
        }
        .cf__submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .cf__note {
          font-size: 0.8125rem;
          color: var(--c-text-muted);
          text-align: center;
          margin: 0;
        }
        .cf__note a {
          color: var(--c-amber-deep);
          font-weight: 500;
        }
        @media (max-width: 600px) {
          .cf { padding: 24px; }
          .cf__row { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </form>
  );
}
