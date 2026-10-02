import React from 'react';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import SplitText from './SplitText';
import { useMagnetic, useCountUp, useParallax } from '../hooks/useMotion';
import { heroPhoto } from '../lib/media';
import './HeroSection.css';

const Stat = ({ value, suffix, label }) => {
  const [ref, n] = useCountUp(value);
  return (
    <div className="hero-stat" ref={ref}>
      <strong>
        {n}
        <span>{suffix}</span>
      </strong>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
};

const HeroSection = () => {
  const ctaRef = useMagnetic(0.2);
  const portraitRef = useParallax(-26);

  return (
    <section id="home" className="hero grain">
      {/* Ambient light */}
      <div className="hero-aura aura a1" />
      <div className="hero-aura aura a2" />
      <div className="hero-aura aura a3" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        {/* ---------------- Copy ---------------- */}
        <div className="hero-copy">
          <p className="hero-eyebrow" data-reveal="up">
            <span className="live-dot" />
            Vocalist · Dancer · Musician
          </p>

          <h1 className="hero-title">
            <SplitText text="Vishanthra" step={75} />
            <SplitText text="Fernando" step={75} delay={120} className="hero-title-2" />
          </h1>

          <p className="hero-sub" data-reveal="up" style={{ '--reveal-delay': '420ms' }}>
            The rhythm of legacy, <em>the voice of the stage.</em> A second-generation
            Sri Lankan performer carrying a family of stagecraft onto the international
            circuit.
          </p>

          <div className="hero-actions" data-reveal="up" style={{ '--reveal-delay': '560ms' }}>
            <span ref={ctaRef} className="magnet-wrap">
              <a href="#portfolio" className="btn btn-primary">
                Discover the Art
                <ArrowRight size={17} strokeWidth={2.2} />
              </a>
            </span>
            <a href="#media" className="btn btn-ghost">
              <Play size={15} strokeWidth={2.4} fill="currentColor" />
              Watch Performances
            </a>
          </div>

          {/* <div className="hero-stats" data-reveal="up" style={{ '--reveal-delay': '700ms' }}>
            <Stat value={18} suffix="+" label="Years on stage" />
            <Stat value={200} suffix="+" label="Live shows" />
            <Stat value={3} suffix="" label="Disciplines" />
          </div> */}
        </div>

        {/* ---------------- Portrait ---------------- */}
        <div className="hero-visual" data-reveal="zoom" style={{ '--reveal-delay': '260ms' }}>
          <div className="hero-arch">
            {/* Parallax lives on the wrapper so the hover zoom on the image
                below it is never overwritten by the inline transform. */}
            <div className="arch-shift" ref={portraitRef}>
              <img src={heroPhoto?.src} alt="Vishanthra Fernando performing live" />
            </div>
            <div className="arch-sheen" />
          </div>

          <div className="arch-ring" aria-hidden="true" />

          {/* Rotating seal */}
          <div className="hero-seal" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="seal-text">
              <defs>
                <path
                  id="sealPath"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <text>
                <textPath href="#sealPath">
                  AVAILABLE FOR BOOKINGS · LIVE · STUDIO · STAGE ·
                </textPath>
              </text>
            </svg>
            <span className="seal-core" />
          </div>

          {/* Floating chip */}
          <div className="hero-chip float">
            <MapPin size={14} strokeWidth={2.2} />
            <div>
              <strong>Tel Aviv &middot; Colombo</strong>
              <span>Touring internationally</span>
            </div>
          </div>
        </div>
      </div>

      {/* <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <span className="cue-label">Scroll</span>
        <span className="cue-line" />
      </a> */}
    </section>
  );
};

export default HeroSection;
