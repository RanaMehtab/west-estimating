/**
 * GET /api/services            → all services
 * GET /api/services?category=  → filtered
 *
 * Runs as a Cloudflare Pages Function. No Node, no Express — just a fetch handler.
 */

import { services } from '../_data.js';

export function onRequestGet({ request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');

  const data = category
    ? services.filter((s) => s.category.toLowerCase() === category.toLowerCase())
    : services;

  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300'
    }
  });
}
