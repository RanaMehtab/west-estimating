/**
 * POST /api/contact — handle contact form submissions.
 *
 * Validates input. If a CONTACT_EMAIL environment variable is set in the
 * Cloudflare dashboard, submissions are forwarded there via Cloudflare's
 * built-in email routing webhook (or a 3rd-party service of your choice).
 * Otherwise, submissions are just logged and a success response returned —
 * useful for development.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400);
  }

  const { name, email, phone, company, service, message } = body || {};

  // Validation
  const errors = {};
  if (!name || String(name).trim().length < 2) errors.name = 'Please enter your name.';
  if (!email || !EMAIL_RE.test(String(email))) errors.email = 'Please enter a valid email.';
  if (!message || String(message).trim().length < 10)
    errors.message = 'Please provide a bit more detail (10+ characters).';

  if (Object.keys(errors).length > 0) {
    return json({ ok: false, errors }, 400);
  }

  const submission = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: phone ? String(phone).trim() : '',
    company: company ? String(company).trim() : '',
    service: service ? String(service).trim() : '',
    message: String(message).trim(),
    at: new Date().toISOString(),
    ip: request.headers.get('cf-connecting-ip') || ''
  };

  // Log to Cloudflare's tail logs (visible in `wrangler tail` and the dashboard)
  console.log('[contact]', JSON.stringify(submission));

  // If you set a FORM_WEBHOOK env var (e.g. a Formspree, Discord, Slack, or
  // your own endpoint), we forward the submission there. See README for setup.
  if (env && env.FORM_WEBHOOK) {
    try {
      await fetch(env.FORM_WEBHOOK, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(submission)
      });
    } catch (err) {
      console.error('[contact] webhook forward failed:', err);
      // Don't fail the user-facing response — submission is logged either way.
    }
  }

  return json({
    ok: true,
    message:
      "Thanks for reaching out. Our estimating team will follow up within one business day."
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
}
