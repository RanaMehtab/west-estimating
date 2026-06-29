/**
 * Tiny fetch wrapper for the backend API.
 *
 * On Cloudflare Pages, /api/* routes are served by Pages Functions
 * (frontend/functions/api/*.js) on the same origin — no CORS, no proxy needed.
 * Locally via `npm run dev`, wrangler serves both the Vite site and Functions.
 */

const BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }
  if (!res.ok) {
    const error = new Error(data?.error || 'Request failed');
    error.status = res.status;
    error.body = data;
    throw error;
  }
  return data;
}

export const api = {
  listServices: () => request('/services'),
  getService: (slug) => request(`/services/${slug}`),
  submitContact: (payload) =>
    request('/contact', { method: 'POST', body: JSON.stringify(payload) })
};
