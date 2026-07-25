import React from 'react';
import './Footer.css';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="logo">V<span className="gold-text">F</span></h2>
          <p className="footer-tagline">The Modern Legacy</p>
        </div>
        
        <div className="social-links">
          <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram size={24} /></a>
          <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube size={24} /></a>
          <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook size={24} /></a>
          <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter size={24} /></a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vishanthra Fernando. All rights reserved.</p>
        <p className="credit">Designed for the Global Stage</p>
      </div>
    </footer>
  );
};

export default Footer;
