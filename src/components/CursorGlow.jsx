import React, { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks/useMotion';
import './CursorGlow.css';

const canRun = () =>
  typeof window !== 'undefined' &&
  !prefersReducedMotion() &&
  window.matchMedia('(pointer: fine)').matches;

/**
 * A soft warm spotlight plus a small trailing ring that eases behind the
 * pointer. Desktop / fine-pointer only — never rendered on touch devices.
 */
const CursorGlow = () => {
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled] = useState(canRun);

  useEffect(() => {
    if (!enabled) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let raf = 0;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const interactive = e.target.closest?.(
        'a, button, input, select, textarea, [data-cursor="hover"]'
      );
      ringRef.current?.classList.toggle('is-hover', Boolean(interactive));
    };

    const loop = () => {
      ring.x += (target.x - ring.x) * 0.16;
      ring.y += (target.y - ring.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true">
      <div className="cursor-glow" ref={glowRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  );
};

export default CursorGlow;
