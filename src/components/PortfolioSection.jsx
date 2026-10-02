import React from 'react';
import { Mic2, Footprints, Music4, ArrowUpRight } from 'lucide-react';
import SplitText from './SplitText';
import { useTilt } from '../hooks/useMotion';
import { facetPhotos } from '../lib/media';
import './PortfolioSection.css';

const items = [
  {
    id: 'vocalist',
    n: '01',
    title: 'Vocalist',
    tone: 'gold',
    icon: Mic2,
    description:
      'Commanding the microphone with soulful range — front line of a premier band, plus exclusive studio recordings.',
    tags: ['Live sets', 'Studio', 'Backing arrangement'],
  },
  {
    id: 'dancer',
    n: '02',
    title: 'Dancer',
    tone: 'rose',
    icon: Footprints,
    description:
      'Intricate choreography and dynamic movement, inheriting a dancer mother’s grace and translating it for the modern stage.',
    tags: ['Choreography', 'Stage drama', 'Ensemble'],
  },
  {
    id: 'musician',
    n: '03',
    title: 'Musician',
    tone: 'sage',
    icon: Music4,
    description:
      'Instrumental versatility honed over years of practice, bringing depth and harmony to every performance.',
    tags: ['Arrangement', 'Rhythm', 'Session work'],
  },
];

const FacetCard = ({ item, index }) => {
  const tiltRef = useTilt({ max: 8 });
  const Icon = item.icon;
  const photo = facetPhotos[item.id];

  return (
    <article
      className={`facet tone-${item.tone}`}
      data-reveal="up"
      style={{ '--reveal-delay': `${index * 130}ms` }}
    >
      <div className="facet-inner" ref={tiltRef} data-cursor="hover">
        <div className="facet-media">
          <img src={photo?.src} alt="" loading="lazy" aria-hidden="true" />
          <span className="facet-num">{item.n}</span>
        </div>

        {/* Sibling of .facet-media, not a child — .facet-media clips its
            overflow, which would slice the badge in half. */}
        <span className="facet-icon">
          <Icon size={22} strokeWidth={1.8} />
        </span>

        <div className="facet-body">
          <h3 className="facet-title">{item.title}</h3>
          <p className="facet-desc">{item.description}</p>

          <ul className="facet-tags">
            {item.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <a href="#media" className="facet-link">
            See the work
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </a>
        </div>

        <span className="facet-glare" aria-hidden="true" />
      </div>
    </article>
  );
};

const PortfolioSection = () => (
  <section id="portfolio" className="section portfolio">
    <div className="aura portfolio-aura" />

    <div className="container">
      <header className="head-center portfolio-head">
        <p className="eyebrow center" data-reveal="up">What He Brings</p>
        <h2 className="section-title">
          <SplitText text="The Triple Threat" step={65} />
        </h2>
        <p className="section-lead" data-reveal="up" style={{ '--reveal-delay': '200ms' }}>
          Three disciplines, one performer. Each one sharpened in a household where
          rehearsal never really stopped.
        </p>
      </header>

      <div className="facet-grid">
        {items.map((item, i) => (
          <FacetCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
