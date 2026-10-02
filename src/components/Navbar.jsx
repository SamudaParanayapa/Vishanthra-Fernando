import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useActiveSection, useLockBody } from '../hooks/useMotion';
import './Navbar.css';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Heritage', id: 'heritage' },
  { name: 'Media', id: 'media' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection([...navLinks.map((l) => l.id), 'contact']);

  useLockBody(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar-inner container" aria-label="Primary">
          <a href="#home" className="brand" aria-label="Vishanthra Fernando — home">
            <span className="brand-mark">
              V<span className="gold">F</span>
            </span>
            <span className="brand-sub">Vishanthra Fernando</span>
          </a>

          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${active === link.id ? 'active' : ''}`}
                >
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="nav-cta">
              Book Now
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-drawer ${menuOpen ? 'active' : ''}`}>
        <ul>
          {[...navLinks, { name: 'Booking', id: 'contact' }].map((link, i) => (
            <li key={link.id} style={{ '--i': i }}>
              <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                <span className="drawer-num">0{i + 1}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="drawer-foot">The Rhythm of Legacy</p>
      </div>
    </>
  );
};

export default Navbar;
