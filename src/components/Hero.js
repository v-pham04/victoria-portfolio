import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';


const roles = [
  'Systems Engineer',
  'Cloud Infrastructure Engineer',
  'DevOps Engineer',
  'Site Reliability Engineer',
  'Platform Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="hero" id="hero">
      {/* Subtle grid background */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Glow orb */}
      <div className="hero__orb" aria-hidden="true" />

      <div className="container hero__content fade-up">
        <p className="hero__greeting mono">
          <span className="accent">$</span> whoami
        </p>

        <h1 className="hero__name">
          Vinh <span className="accent">(Victoria)</span> Pham
        </h1>

        <h2 className="hero__role">
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor" aria-hidden="true">|</span>
        </h2>

        <p className="hero__desc">
          Infrastructure & Systems Engineer with hands-on production experience across cloud architecture, Linux administration, monitoring, and automation. 
          Designed and deployed AWS multi-environment infrastructure using Terraform IaC, hardened production Linux servers to zero security incidents, and built observability stacks with automated alerting and health-check pipelines. 
          Experienced with Docker, Kubernetes, and CI/CD workflows. Actively expanding skills in GCP and Azure. Comfortable working across the full infrastructure lifecycle — from provisioning and hardening to incident response and reliability engineering. 
          Based in Wisconsin — open to roles nationwide.
        </p>

        <div className="hero__badges">
          <span className="badge badge--green">
            <span className="badge__dot" />
            Available for work
          </span>
          <span className="badge">F-1 STEM OPT · 3 years work auth</span>
        </div>

        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">Get in touch</Link>
          <Link to="/experience" className="btn btn--ghost">View projects</Link>
          <a
            href="https://github.com/v-pham04"
            target="_blank"
            rel="noreferrer"
            className="btn btn--icon"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vinh-bach-lan-pham/"
            target="_blank"
            rel="noreferrer"
            className="btn btn--icon"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
