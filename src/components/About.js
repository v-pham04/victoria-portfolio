import React from 'react';
import './About.css';

const stats = [
  { value: '3.9', label: 'GPA' },
  { value: '30+', label: 'Mailboxes migrated' },
  { value: '~60%', label: 'Faster provisioning' },
  { value: '~$200', label: 'Monthly savings' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="about__heading">
          Building reliable systems,<br />
          <span className="accent">one layer at a time.</span>
        </h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a recent Computer Science graduate from the University of Wisconsin–Stout
              (GPA 3.9) with a focus on Cybersecurity and Secure Software Development.
              I care deeply about the infrastructure layer — the servers, networks, and
              automation pipelines that keep everything else running.
            </p>
            <p>
              At Intrastack Solutions, I've had the opportunity to do real production
              infrastructure work — designing AWS environments from scratch, hardening
              Linux servers, self-hosting a complete mail platform, and building the
              monitoring and alerting systems that keep everything observable.
            </p>
            <p>
              I'm on F-1 STEM OPT with 3 years of work authorization — no sponsorship
              needed right now. I'm open to roles nationwide, with a preference for
              Chicago or NYC, but genuinely open to wherever the right opportunity is.
            </p>

            <div className="about__links">
              <a href="https://github.com/v-pham04" target="_blank" rel="noreferrer">
                → github.com/v-pham04
              </a>
              <a href="https://www.linkedin.com/in/vinh-bach-lan-pham/" target="_blank" rel="noreferrer">
                → linkedin.com/in/vinh-bach-lan-pham/
              </a>
              <a href="mailto:phamb0532@my.uwstout.edu">
                → phamb0532@my.uwstout.edu
              </a>
            </div>
          </div>

          <div className="about__stats">
            {stats.map(s => (
              <div className="stat-card" key={s.label}>
                <span className="stat-card__value mono accent">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
