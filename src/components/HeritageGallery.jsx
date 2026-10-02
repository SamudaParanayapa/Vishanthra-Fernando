import React, { useState } from 'react';
import { Feather, Sparkles, Drama, Expand } from 'lucide-react';
import SplitText from './SplitText';
import Lightbox from './Lightbox';
import { archivePhotos } from '../lib/media';
import './HeritageGallery.css';

const chapters = [
  {
    icon: Feather,
    title: 'B. Fernando',
    role: 'Scriptwriter & Producer',
    text: 'A revered figure in Sri Lankan music and the visionary behind the iconic Vesak Natya stage dramas.',
  },
  {
    icon: Sparkles,
    title: 'Maternal Grace',
    role: 'Dance',
    text: 'A mother who mastered the discipline of movement — the foundation beneath every step taken on stage today.',
  },
  {
    icon: Drama,
    title: 'The Rehearsal Hall',
    role: 'Where it began',
    text: 'Childhood spent in the wings of theatres, learning timing, presence and craft long before the first solo.',
  },
];

const HeritageGallery = () => {
  const [open, setOpen] = useState(null);

  const lbItems = archivePhotos.map((p) => ({
    src: p.src,
    alt: p.caption,
    caption: p.caption,
  }));

  return (
    <section id="heritage" className="section heritage grain">
      <div className="container">
        <header className="head-center heritage-head">
          <p className="eyebrow center" data-reveal="up">Where It Comes From</p>
          <h2 className="section-title">
            <SplitText text="The Heritage Gallery" step={60} />
          </h2>
          <p className="section-lead" data-reveal="up" style={{ '--reveal-delay': '200ms' }}>
            Honouring the roots of B. Fernando — legendary scriptwriter and producer of
            Vesak Natya stage drama — alongside the graceful dance of a maternal influence.
          </p>
        </header>

        {/* ---------- timeline ---------- */}
        <ol className="chapters">
          {chapters.map((c, i) => {
            const Icon = c.icon;
            return (
              <li
                key={c.title}
                className="chapter"
                data-reveal="up"
                style={{ '--reveal-delay': `${i * 130}ms` }}
              >
                <span className="chapter-node">
                  <Icon size={19} strokeWidth={1.9} />
                </span>
                <div className="chapter-body">
                  <span className="chapter-role">{c.role}</span>
                  <h3 className="chapter-title">{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* ---------- archive ---------- */}
        <div className="archive">
          <p className="archive-label" data-reveal="up">
            <span />
            From the family archive
          </p>

          <div className="plate-grid">
            {archivePhotos.map((p, i) => (
              <button
                key={p.caption}
                className="plate"
                data-reveal="up"
                style={{ '--reveal-delay': `${i * 140}ms` }}
                onClick={() => setOpen(i)}
                aria-label={`Open ${p.caption}`}
              >
                <img src={p.src} alt={p.caption} loading="lazy" />
                <span className="plate-veil" />
                <span className="plate-expand">
                  <Expand size={16} strokeWidth={2} />
                </span>
                <span className="plate-caption">
                  <strong>{p.caption}</strong>
                  <em>{p.sub}</em>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox items={lbItems} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
};

export default HeritageGallery;
