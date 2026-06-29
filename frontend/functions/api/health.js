export function onRequestGet() {
  return new Response(
    JSON.stringify({ status: 'ok', service: 'west-estimating-api' }),
    { headers: { 'content-type': 'application/json; charset=utf-8' } }
  );
}
