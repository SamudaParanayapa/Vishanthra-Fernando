import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container flex-container">
        <div className="about-content animate-on-scroll">
          <h2 className="section-title" style={{ textAlign: 'left' }}>A Legacy in Motion</h2>
          
          <p className="about-text">
            Born into the heartbeat of Sri Lankan artistry, Vishanthra Fernando is more than a performer; he is the evolution of a creative dynasty. As the son of B. Fernando—a revered figure in Sri Lankan music and the visionary behind iconic Vesak Natya stage dramas—and a mother who mastered the grace of dance, Vishanthra was raised in the wings of theaters and the echoes of rehearsal halls.
          </p>

          <div className="gold-divider"></div>

          <p className="about-text">
            Today, Vishanthra has taken that foundational excellence to the global stage. Currently a standout performer in a premier band in Israel, he seamlessly blends the disciplined tradition of his roots with the contemporary energy of the international music scene.
          </p>
          
          <p className="about-text highlight">
            Whether he is commanding the microphone with soulful vocals or captivating an audience through intricate choreography, Vishanthra embodies the "Triple Threat." His work is a tribute to his father’s scripts and his mother’s movement, reimagined for a modern, global audience.
          </p>
        </div>

        <div className="about-image-wrapper animate-on-scroll">
          <div className="about-image-frame glass-panel">
            <img src="https://picsum.photos/seed/portrait/800/1000" alt="Vishanthra Fernando Portrait" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
