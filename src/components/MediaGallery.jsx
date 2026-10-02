import React, { useState } from 'react';
import { Expand, Camera } from 'lucide-react';
import SplitText from './SplitText';
import Lightbox from './Lightbox';
import { photos } from '../lib/media';
import './MediaGallery.css';

// Repeating rhythm so the mosaic never looks like a plain grid.
const SPANS = ['wide', '', '', 'tall', '', 'wide', '', '', '', 'tall', '', ''];

const MediaGallery = () => {
  const [open, setOpen] = useState(null);

  const items = photos.map((p, i) => ({
    ...p,
    caption: `Frame ${String(i + 1).padStart(2, '0')}`,
    span: SPANS[i % SPANS.length],
  }));

  return (
    <section id="media" className="section media">
      <div className="aura media-aura" />

      <div className="container">
        <header className="media-head">
          <div>
            <p className="eyebrow" data-reveal="up">On Stage</p>
            <h2 className="section-title">
              <SplitText text="Media Gallery" step={65} />
            </h2>
          </div>
          <p className="media-count" data-reveal="right" style={{ '--reveal-delay': '200ms' }}>
            <Camera size={16} strokeWidth={2} />
            {items.length} photographs
            <span>Click any frame to enlarge</span>
          </p>
        </header>

        <div className="mosaic">
          {items.map((item, i) => (
            <button
              key={item.id}
              className={`tile ${item.span}`}
              data-reveal="zoom"
              style={{ '--reveal-delay': `${(i % 6) * 90}ms` }}
              onClick={() => setOpen(i)}
              aria-label={`Open ${item.caption}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="tile-veil" />
              <span className="tile-meta">
                <span className="tile-name">{item.caption}</span>
                <span className="tile-icon">
                  <Expand size={15} strokeWidth={2.2} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
};

export default MediaGallery;
