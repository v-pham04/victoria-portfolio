import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy mono">
          <span className="accent">Built by Vinh (Victoria) Pham</span>
        </span>
        <span className="footer__stack mono">React · Deployed on Vercel</span>
      </div>
    </footer>
  );
}
