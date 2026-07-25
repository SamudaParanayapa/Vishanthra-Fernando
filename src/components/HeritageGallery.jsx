import React from 'react';
import './HeritageGallery.css';

const HeritageGallery = () => {
  return (
    <section id="heritage" className="section heritage-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">The Heritage Gallery</h2>
        <p className="heritage-subtitle animate-on-scroll">
          Honoring the roots of B. Fernando, the legendary scriptwriter and stage drama producer of Vesak Natya, alongside the graceful dance of a maternal influence.
        </p>

        <div className="gallery-grid">
          {/* Main large image */}
          <div className="gallery-item large animate-on-scroll">
            <img src="https://picsum.photos/seed/drama/800/1200" alt="Vesak Natya heritage" className="gallery-img" />
            <div className="gallery-caption">
              <h4>Vesak Natya Legacy</h4>
              <p>The stage dramas of B. Fernando</p>
            </div>
          </div>
          
          {/* Smaller complementary images */}
          <div className="gallery-item animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <img src="https://picsum.photos/seed/dance/800/600" alt="Dance Heritage" className="gallery-img" />
            <div className="gallery-caption">
              <h4>Maternal Grace</h4>
              <p>The foundational movements</p>
            </div>
          </div>
          
          <div className="gallery-item animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <img src="https://picsum.photos/seed/theater/800/600" alt="Vintage Theater" className="gallery-img" />
            <div className="gallery-caption">
              <h4>The Echoes of Rehearsal</h4>
              <p>Where it all began</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageGallery;
