import React from 'react';
import './ContactSection.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info animate-on-scroll">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Bookings & Inquiries</h2>
            <p className="contact-desc">
              Available for international bookings, collaborations, and studio sessions. Get in touch to bring the rhythm of legacy to your stage.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <MapPin className="info-icon" />
                <span>Tel Aviv, Israel & Colombo, Sri Lanka</span>
              </div>
              <div className="info-item">
                <Mail className="info-icon" />
                <span>booking@vishanthrafernando.com</span>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <span>+972 50 123 4567</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <form className="contact-form glass-panel">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option>Performance Booking</option>
                  <option>Studio Session</option>
                  <option>Collaboration</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we work together?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
