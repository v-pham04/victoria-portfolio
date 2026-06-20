import React from 'react';
import './ContactDetail.css';

const statusCards = [
  {
    label: 'Status',
    value: 'Available Now',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <circle cx="12" cy="12" r="10" fill="#4ade80" />
        <path d="M10 15l-3-3m6-3l3 3" stroke="#0a0f1e" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
    highlight: true,
  },
  {
    label: 'Location',
    value: 'US (F-1 OPT)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Work Auth',
    value: '3 Years (No Sponsorship)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 1.5m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const contactLinks = [
  {
    label: 'Email',
    value: 'phamb0532@my.uwstout.edu', 
    href: 'mailto:phamb0532@my.uwstout.edu',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vinh-bach-lan-pham',
    href: 'https://www.linkedin.com/in/vinh-bach-lan-pham/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/v-pham04',
    href: 'https://github.com/v-pham04',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
];

export default function ContactDetail() {
  return (
    <section className="section contact-detail" id="contact">
      <div className="container">
        <h2 className="contact-detail__heading">Contact Information</h2>

        <div className="contact-detail__status">
          {statusCards.map(card => (
            <div
              key={card.label}
              className={`status-card ${card.highlight ? 'status-card--highlight' : ''}`}
            >
              <div className="status-card__icon">
                {card.icon}
              </div>
              <div className="status-card__text">
                <span className="status-card__label">{card.label}</span>
                <span className="status-card__value">{card.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-detail__text">
          <p>
            I'm actively looking for junior SRE, DevOps, Cloud Infrastructure,
            and System Engineering roles. If you have an opening or just want
            to connect, my inbox is open.
          </p>
        </div>

        <div className="contact-detail__links">
          {contactLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link__icon accent">{link.icon}</span>
              <div className="contact-link__text">
                <span className="contact-link__label">{link.label}</span>
                <span className="contact-link__value mono">{link.value}</span>
              </div>
              <svg className="contact-link__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
