/**
 * Icon — minimal line-style SVG icons matching the design system.
 * Stroke-based so they inherit currentColor cleanly and feel "drafted".
 *
 * Usage: <Icon name="ruler" size={24} />
 */

const PATHS = {
  ruler: (
    <>
      <path d="M3 17l4-4 14-14M3 17l4 4 14-14M3 17h6M9 11h4M13 7h4M17 3h2" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6M9 11h.01M12 11h.01M15 11h.01M9 14h.01M12 14h.01M15 14h.01M9 17h6" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M4 21h16M9 9h.01M13 9h.01M9 13h.01M13 13h.01M9 17h.01M13 17h.01" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </>
  ),
  wall: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9h18M3 14h18M9 4v5M15 9v5M6 14v6M12 14v6M18 14v6" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 9v12" />
    </>
  ),
  frame: (
    <>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M4 8h16M4 12h16M4 16h16M8 4v16M12 4v16M16 4v16" />
    </>
  ),
  brush: (
    <>
      <path d="M16 3l5 5-7 7-5-5 7-7zM9 10l-5 5v5h5l5-5" />
    </>
  ),
  'ruler-2': (
    <>
      <path d="M3 8l13-5 5 13-13 5L3 8z" />
      <path d="M8 6l1 2M11 5l1 2M14 4l1 2M6 11l2 1M5 14l2 1M4 17l2 1" />
    </>
  ),
  terrain: (
    <>
      <path d="M2 20l5-7 4 5 4-9 7 11H2z" />
    </>
  ),
  flame: (
    <>
      <path d="M12 2c1 4 5 6 5 11a5 5 0 01-10 0c0-2 1-3 2-5 1 2 2 2 2 0 0-2-1-4 1-6z" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 9h18M7 9v10M7 13h4M7 16h4M13 11h6M13 14h4M13 17h5" />
    </>
  ),
  check: (
    <>
      <polyline points="4 12 10 18 20 6" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3 8-8 9-5-1-8-4-8-9V6l8-3z" />
      <polyline points="9 12 11 14 15 10" />
    </>
  ),
  dollar: (
    <>
      <path d="M12 3v18M16 7H10a3 3 0 000 6h4a3 3 0 010 6H8" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="11" r="2" />
      <path d="M3 19c0-3 3-5 6-5s6 2 6 5M14 18c0-2 2-3 4-3s3 1 3 3" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 5-3 2c1 3 3 5 6 6l2-3 5 2v4a2 2 0 01-2 2C8.5 22 2 15.5 2 7a2 2 0 012-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s8-8 8-13a8 8 0 10-16 0c0 5 8 13 8 13z" />
      <circle cx="12" cy="9" r="3" />
    </>
  ),
  menu: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6l-12 12" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  minus: (
    <>
      <path d="M5 12h14" />
    </>
  ),
  quote: (
    <>
      <path d="M7 14V9a2 2 0 012-2h1V5H8a4 4 0 00-4 4v7h3zM18 14V9a2 2 0 012-2h1V5h-2a4 4 0 00-4 4v7h3z" />
    </>
  ),
  star: (
    <>
      <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9 12 2" />
    </>
  )
};

export default function Icon({ name, size = 24, strokeWidth = 1.6, className = '', ...rest }) {
  const path = PATHS[name];
  if (!path) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  );
}
