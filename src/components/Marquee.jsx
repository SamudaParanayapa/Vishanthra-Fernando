import React from 'react';
import './Marquee.css';

const items = [
  'Live Vocals',
  'Stage Choreography',
  'Studio Sessions',
  'Vesak Natya Legacy',
  'International Touring',
  'Band Performance',
];

const Marquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      {[0, 1].map((pass) => (
        <ul key={pass} className="marquee-group">
          {items.map((item) => (
            <li key={`${pass}-${item}`}>
              <span className="marquee-star">&#10022;</span>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
