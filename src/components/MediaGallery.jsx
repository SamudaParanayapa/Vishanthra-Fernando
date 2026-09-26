import React from 'react';
import './MediaGallery.css';

const MediaGallery = () => {
  const mediaItems = Object.entries(
    import.meta.glob('../../photos/*.jpeg', {
      eager: true,
      query: '?url',
      import: 'default',
    }),
  )
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, src], index) => ({
      id: path,
      title: `Photo ${String(index + 1).padStart(2, '0')}`,
      src,
    }));

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
              <div className="media-thumb">
                <img className="media-image" src={item.src} alt={`Vishanthra Fernando — ${item.title}`} loading="lazy" />
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
