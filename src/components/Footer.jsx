import React from 'react';
import { FaInstagram, FaYoutube, FaFacebookF, FaSpotify } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const socials = [
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaYoutube, label: 'YouTube', href: '#' },
  { Icon: FaFacebookF, label: 'Facebook', href: '#' },
  { Icon: FaSpotify, label: 'Spotify', href: '#' },
];

const quickLinks = [
  { name: 'About', id: 'about' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Heritage', id: 'heritage' },
  { name: 'Media', id: 'media' },
  { name: 'Booking', id: 'contact' },
];

const Footer = () => (
  <footer className="footer">
    <div className="container footer-top">
      <div className="footer-brand" data-reveal="up">
        <span className="footer-mark">
          V<span className="gold">F</span>
        </span>
        <p className="footer-tagline">The Rhythm of Legacy</p>
        <p className="footer-blurb">
          A second-generation Sri Lankan performer bringing voice, movement and music
          to stages around the world.
        </p>
      </div>

      <nav className="footer-nav" data-reveal="up" style={{ '--reveal-delay': '120ms' }} aria-label="Footer">
        <h3>Explore</h3>
        <ul>
          {quickLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="link-u">{l.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer-connect" data-reveal="up" style={{ '--reveal-delay': '220ms' }}>
        <h3>Follow</h3>
        <div className="socials">
          {socials.map((s) => {
            const Icon = s.Icon;
            return (
              <a key={s.label} href={s.href} className="social" aria-label={s.label}>
                <Icon size={17} />
              </a>
            );
          })}
        </div>
        <a href="mailto:booking@vishanthrafernando.com" className="footer-mail link-u">
          booking@vishanthrafernando.com
        </a>
      </div>
    </div>

    <div className="container footer-bottom">
      <p>&copy; {new Date().getFullYear()} Vishanthra Fernando. All rights reserved.</p>
      <a href="#home" className="to-top">
        Back to top
        <span><ArrowUp size={14} strokeWidth={2.4} /></span>
      </a>
    </div>
  </footer>
);

export default Footer;
