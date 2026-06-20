import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const links = [
  { label: 'About', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__logo mono">
          <Link to="/" className="nav__logo mono">
            Victoria Pham
          </Link>

        </Link>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <Link to={l.path} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Victoria_Pham_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav__resume-btn"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className={`nav__hamburger ${open ? 'nav__hamburger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
