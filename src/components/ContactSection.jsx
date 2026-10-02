import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Loader2 } from 'lucide-react';
import SplitText from './SplitText';
import './ContactSection.css';

const details = [
  { icon: MapPin, label: 'Based in', value: 'Tel Aviv, Israel · Colombo, Sri Lanka' },
  { icon: Mail, label: 'Email', value: 'booking@vishanthrafernando.com', href: 'mailto:booking@vishanthrafernando.com' },
  { icon: Phone, label: 'Phone', value: '+972 50 123 4567', href: 'tel:+972501234567' },
];

const subjects = ['Performance Booking', 'Studio Session', 'Collaboration', 'General Inquiry'];

const Field = ({ id, label, type = 'text', ...rest }) => (
  <div className="field">
    <input id={id} type={type} placeholder=" " required {...rest} />
    <label htmlFor={id}>{label}</label>
    <span className="field-bar" />
  </div>
);

const ContactSection = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const onSubmit = (e) => {
    e.preventDefault();
    if (status !== 'idle') return;
    setStatus('sending');
    // Wire this up to your mail service / form endpoint.
    setTimeout(() => setStatus('sent'), 1200);
  };

  return (
    <section id="contact" className="section contact grain">
      <div className="aura contact-aura" />

      <div className="container contact-grid">
        {/* ---------------- info ---------------- */}
        <div className="contact-info">
          <p className="eyebrow" data-reveal="up">Get in Touch</p>

          <h2 className="section-title contact-title">
            <SplitText text="Bookings &" step={70} />
            <SplitText text="inquiries" step={70} delay={110} className="contact-title-em" />
          </h2>

          <p className="section-lead" data-reveal="up" style={{ '--reveal-delay': '180ms' }}>
            Available for international bookings, collaborations and studio sessions.
            Bring the rhythm of legacy to your stage.
          </p>

          <ul className="detail-list">
            {details.map((d, i) => {
              const Icon = d.icon;
              const Row = d.href ? 'a' : 'div';
              return (
                <li
                  key={d.label}
                  data-reveal="up"
                  style={{ '--reveal-delay': `${280 + i * 110}ms` }}
                >
                  <Row {...(d.href ? { href: d.href } : {})} className="detail">
                    <span className="detail-icon">
                      <Icon size={17} strokeWidth={1.9} />
                    </span>
                    <span className="detail-text">
                      <em>{d.label}</em>
                      <strong>{d.value}</strong>
                    </span>
                  </Row>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ---------------- form ---------------- */}
        <div className="contact-form-wrap" data-reveal="right" style={{ '--reveal-delay': '160ms' }}>
          <form className="contact-form" onSubmit={onSubmit} noValidate={status !== 'idle'}>
            <div className="form-row">
              <Field id="name" label="Full name" autoComplete="name" />
              <Field id="email" label="Email address" type="email" autoComplete="email" />
            </div>

            <div className="field">
              <select id="subject" defaultValue={subjects[0]}>
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <label htmlFor="subject" className="static-label">Subject</label>
              <span className="field-bar" />
            </div>

            <div className="field">
              <textarea id="message" rows="4" placeholder=" " required />
              <label htmlFor="message">How can we work together?</label>
              <span className="field-bar" />
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-btn is-${status}`}
              disabled={status !== 'idle'}
            >
              {status === 'idle' && (
                <>
                  Send Inquiry
                  <Send size={16} strokeWidth={2.2} />
                </>
              )}
              {status === 'sending' && (
                <>
                  Sending
                  <Loader2 size={16} strokeWidth={2.2} className="spin" />
                </>
              )}
              {status === 'sent' && (
                <>
                  Message Sent
                  <Check size={16} strokeWidth={2.6} />
                </>
              )}
            </button>

            <p className="form-note">
              Typical reply within 48 hours. For urgent dates, call directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
