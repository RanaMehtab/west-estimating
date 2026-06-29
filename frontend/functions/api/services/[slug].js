/**
 * GET /api/services/:slug → one service
 *
 * The [slug] in the filename becomes a route parameter in params.slug.
 */

import { services } from '../../_data.js';

export function onRequestGet({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return new Response(JSON.stringify({ error: 'Service not found' }), {
      status: 404,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });
  }

  return new Response(JSON.stringify(service), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300'
    }
  });
}
