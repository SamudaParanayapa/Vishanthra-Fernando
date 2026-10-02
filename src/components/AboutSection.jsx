import React from 'react';
import { Quote } from 'lucide-react';
import SplitText from './SplitText';
import { useParallax } from '../hooks/useMotion';
import { aboutPhoto } from '../lib/media';
import './AboutSection.css';

const milestones = [
  { year: 'Roots', text: 'Raised in the wings of Sri Lankan theatre' },
  { year: 'Craft', text: 'Voice, movement and instrument in one performer' },
  { year: 'Today', text: 'Front line of a premier band in Israel' },
];

const AboutSection = () => {
  const imgRef = useParallax(34);

  return (
    <section id="about" className="section about grain">
      <div className="aura about-aura" />

      <div className="container about-grid">
        {/* ------------- visual ------------- */}
        <div className="about-visual" data-reveal="left">
          <figure className="about-frame">
            <img
              ref={imgRef}
              src={aboutPhoto?.src}
              alt="Vishanthra Fernando on stage"
              loading="lazy"
            />
          </figure>
          <span className="frame-accent" aria-hidden="true" />

          <div className="about-badge">
            <Quote size={18} strokeWidth={2} />
            <p>
              The stage was never a destination.
              <br />
              It was the room I grew up in.
            </p>
          </div>
        </div>

        {/* ------------- copy ------------- */}
        <div className="about-copy">
          <p className="eyebrow" data-reveal="up">The Story</p>

          <h2 className="section-title about-title">
            <SplitText text="A legacy" step={70} />
            <SplitText text="in motion" step={70} delay={100} className="about-title-em" />
          </h2>

          <div className="about-body">
            <p data-reveal="up" style={{ '--reveal-delay': '160ms' }}>
              Born into the heartbeat of Sri Lankan artistry, Vishanthra Fernando is more
              than a performer &mdash; he is the continuation of a creative dynasty. As the
              son of <strong>B. Fernando</strong>, a revered figure in Sri Lankan music and
              the visionary behind the iconic <em>Vesak Natya</em> stage dramas, and of a
              mother who mastered the grace of dance, he was raised in the wings of theatres
              and the echoes of rehearsal halls.
            </p>

            <p data-reveal="up" style={{ '--reveal-delay': '280ms' }}>
              Today he has taken that foundation to the global stage. A standout performer
              in a premier band in Israel, he blends the discipline of his roots with the
              contemporary energy of the international music scene.
            </p>

            <blockquote data-reveal="up" style={{ '--reveal-delay': '380ms' }}>
              Whether commanding the microphone with soulful vocals or captivating an
              audience through intricate choreography, Vishanthra embodies the
              <strong> triple threat</strong> &mdash; his father&rsquo;s scripts and his
              mother&rsquo;s movement, reimagined for a modern, global audience.
            </blockquote>
          </div>

          <ul className="milestones">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                data-reveal="up"
                style={{ '--reveal-delay': `${480 + i * 110}ms` }}
              >
                <span className="ms-year">{m.year}</span>
                <span className="ms-text">{m.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
