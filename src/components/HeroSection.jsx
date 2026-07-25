import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        {/* Placeholder for cinematic video or high-res image */}
        <div className="overlay"></div>
      </div>
      
      <div className="hero-content container">
        <h1 className="hero-title animate-on-scroll">
          Vishanthra Fernando
        </h1>
        <p className="hero-subtitle animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          The Rhythm of Legacy, <span className="gold-text">The Voice of the Stage</span>
        </p>
        <div className="hero-actions animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
          <a href="#portfolio" className="btn btn-primary">Discover the Art</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
