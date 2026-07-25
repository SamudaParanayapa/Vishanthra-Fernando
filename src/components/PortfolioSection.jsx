import React from 'react';
import { Mic2, Footprints, Music } from 'lucide-react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 'vocalist',
      title: 'Vocalist',
      icon: <Mic2 size={32} className="card-icon" />,
      description: 'Commanding the microphone with soulful vocals. Links to work with premier Israeli band and exclusive studio recordings.',
      image: 'https://picsum.photos/seed/vocalist/800/600',
    },
    {
      id: 'dancer',
      title: 'Dancer',
      icon: <Footprints size={32} className="card-icon" />,
      description: 'Intricate choreography and dynamic movement, inheriting the grace of a dancing mother to command the modern stage.',
      image: 'https://picsum.photos/seed/dancer/800/600',
    },
    {
      id: 'musician',
      title: 'Musician',
      icon: <Music size={32} className="card-icon" />,
      description: 'Instrumental versatility honed through years of practice, bringing depth and harmony to every performance.',
      image: 'https://picsum.photos/seed/musician/800/600',
    }
  ];

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">The Triple Threat</h2>
        
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-card glass-panel animate-on-scroll"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div 
                className="card-image-bg" 
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="icon-wrapper">
                  {item.icon}
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title serif-font">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
                <a href={`#${item.id}`} className="card-link gold-text">Explore {item.title} &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
