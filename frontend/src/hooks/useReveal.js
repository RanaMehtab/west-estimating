import { useEffect } from 'react';

/**
 * useReveal — attaches an IntersectionObserver to all `.reveal` elements
 * within scope on mount. When an element scrolls into view, it gets
 * the `.is-visible` class which the CSS animates.
 *
 * Lightweight, no dependencies. Respects prefers-reduced-motion via CSS.
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
