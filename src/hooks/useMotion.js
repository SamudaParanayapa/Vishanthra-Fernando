import { useEffect, useRef, useState, useCallback } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------------
   useScrollReveal — one observer for every [data-reveal] on the page.
   Elements added later (filters, lightbox, etc.) are picked up on each
   run because App re-invokes it when `deps` change.
------------------------------------------------------------------ */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]:not(.in)');
    if (prefersReducedMotion()) {
      nodes.forEach((n) => n.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    nodes.forEach((n) => io.observe(n));

    // Safety net. A [data-reveal] element starts at opacity 0, so anything the
    // observer misses stays permanently invisible. Sweep for elements that are
    // on screen but still hidden and reveal them directly.
    const sweep = () => {
      document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    };
    const raf = requestAnimationFrame(sweep);
    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('resize', sweep);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/* ------------------------------------------------------------------
   useTilt — 3D pointer tilt for cards.
------------------------------------------------------------------ */
export function useTilt({ max = 9, scale = 1.02, glare = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frame = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform =
          `perspective(1100px) rotateX(${(0.5 - py) * max}deg) ` +
          `rotateY(${(px - 0.5) * max}deg) scale(${scale})`;
        if (glare) {
          el.style.setProperty('--gx', `${px * 100}%`);
          el.style.setProperty('--gy', `${py * 100}%`);
        }
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = '';
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [max, scale, glare]);

  return ref;
}

/* ------------------------------------------------------------------
   useMagnetic — element leans toward the cursor.
------------------------------------------------------------------ */
export function useMagnetic(strength = 0.28) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frame = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = '';
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [strength]);

  return ref;
}

/* ------------------------------------------------------------------
   useCountUp — animates 0 → target once the node scrolls into view.
------------------------------------------------------------------ */
export function useCountUp(target, duration = 1600) {
  const ref = useRef(null);
  // Reduced motion: land on the final number immediately, no animation.
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return [ref, value];
}

/* ------------------------------------------------------------------
   useParallax — translates an element as it moves through the viewport.
------------------------------------------------------------------ */
export function useParallax(strength = 40) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let ticking = false;
    const update = () => {
      const r = el.getBoundingClientRect();
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(0, ${progress * strength}px, 0)`;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [strength]);

  return ref;
}

/* ------------------------------------------------------------------
   useActiveSection — which section id is currently in view.
------------------------------------------------------------------ */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}

/* ------------------------------------------------------------------
   useLockBody — freeze page scroll (mobile menu / lightbox).
------------------------------------------------------------------ */
export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

/* ------------------------------------------------------------------
   splitWords — turns a string into staggered <span> words.
------------------------------------------------------------------ */
export function useSplitWords(text, step = 55) {
  return useCallback(() => text.split(' ').map((w, i) => ({ w, delay: i * step })), [text, step])();
}
