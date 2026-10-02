import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLockBody } from '../hooks/useMotion';
import './Lightbox.css';

/**
 * Accessible image lightbox with keyboard navigation.
 * `index` === null closes it.
 */
const Lightbox = ({ items, index, onClose, onIndexChange }) => {
  const open = index !== null && index !== undefined;
  useLockBody(open);

  const go = useCallback(
    (step) => {
      if (!open || !items.length) return;
      onIndexChange((index + step + items.length) % items.length);
    },
    [open, index, items.length, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go, onClose]);

  if (!open) return null;
  const current = items[index];
  if (!current) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      <button className="lb-close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      <button
        className="lb-nav prev"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        aria-label="Previous photo"
      >
        <ChevronLeft size={26} />
      </button>

      <figure className="lb-stage" onClick={(e) => e.stopPropagation()}>
        <img key={current.src} src={current.src} alt={current.alt || ''} />
        <figcaption>
          <span className="lb-count">
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          {current.caption && <span className="lb-caption">{current.caption}</span>}
        </figcaption>
      </figure>

      <button
        className="lb-nav next"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        aria-label="Next photo"
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
};

export default Lightbox;
