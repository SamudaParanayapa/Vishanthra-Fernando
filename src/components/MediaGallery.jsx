import React from 'react';
import { Play } from 'lucide-react';
import './MediaGallery.css';

const MediaGallery = () => {
  const mediaItems = [
    { id: 1, type: 'video', title: 'Live Performance in Israel', thumb: 'https://picsum.photos/seed/perf1/800/600' },
    { id: 2, type: 'video', title: 'Acoustic Studio Session', thumb: 'https://picsum.photos/seed/perf2/800/600' },
    { id: 3, type: 'image', title: 'Stage Lighting Check', thumb: 'https://picsum.photos/seed/perf3/800/600' },
    { id: 4, type: 'video', title: 'Choreography Reel', thumb: 'https://picsum.photos/seed/perf4/800/600' },
  ];

  return (
    <section id="media" className="section media-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Media Gallery</h2>
        
        <div className="media-grid">
          {mediaItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={`media-card ${idx === 0 ? 'featured' : ''} animate-on-scroll`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div 
                className="media-thumb"
                style={{ backgroundImage: `url(${item.thumb})` }}
              >
                {item.type === 'video' && (
                  <div className="play-btn-overlay">
                    <Play size={36} fill="var(--accent-gold)" color="var(--accent-gold)" />
                  </div>
                )}
              </div>
              <div className="media-info">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
