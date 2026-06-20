import React, { useState } from 'react';
import './Experience.css';

const jobs = [
  {
    company: 'Intrastack Solutions',
    role: 'System Engineer (Internship)',
    period: 'Jan 2026 – Present',
    location: 'Remote · Orlando, FL',
    bullets: [
      'Architected AWS infrastructure across 3 isolated environments (Dev/Test/Prod) using Terraform IaC — VPCs, subnets, EC2, EKS — cutting provisioning time ~60% and eliminating configuration drift.',
      'Hardened Linux servers with least-privilege IAM, SSH key-only auth, UFW, and Fail2Ban; maintained zero security incidents across all monitored systems.',
      'Built observability and alerting stack with automated health checks (CPU, memory, disk, auth events), reducing mean time to detect anomalies by ~45%.',
      'Engineered Dockerized Mailcow (Postfix, Dovecot, SPF/DKIM/DMARC/TLS), eliminating vendor lock-in; migrated 30+ mailboxes with zero downtime and cut mail costs ~70% (~$200/month saved).',
      'Authored Bash scripts to reduce operational toil through automated health reporting and alerting across all production Linux hosts.',
    ],
    tags: ['AWS', 'Terraform', 'Linux', 'Docker', 'Bash', 'IaC', 'CI/CD'],
  },
  {
    company: 'University of Wisconsin – Stout Dining',
    role: 'Student Manager',
    period: 'Sep 2023 – May 2026',
    location: 'Menomonie, WI',
    bullets: [
      'Led 10+ person team across 300+ transactions/shift; resolved 15+ escalations weekly — building incident communication and cross-functional coordination skills directly applicable to SRE on-call.',
      'Maintained zero-stockout inventory for 100+ critical supply items using systematic tracking during peak demand periods.',
    ],
    tags: ['Leadership', 'Incident Response', 'Operations', 'Documentation'],
  },
  {
    company: 'University of Wisconsin – Stout ',
    role: 'Student Assistant – Instructional Design Program',
    period: 'May 2024 – Feb 2025',
    location: 'Menomonie, WI',
    bullets: [
      'Conducted research on AI, Generative AI, and Online Teaching using the University Library Database.',
      'Audited course media in Canvas to ensure resources were current and properly integrated.',
      'Assisted in development of course materials for online, hybrid, and web-enhanced courses.',
      'Completed Canvas training on course setup, content management, and student interaction tools.',
      'Created media content and infographics using Piktochart and Canva.',
    ],
    tags: ['Research', 'Instructional Design', 'Content Audit', 'Documentation'],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="experience__heading">Where I've Worked</h2>

        <div className="experience__layout">
          {/* Tab list */}
          <div className="experience__tabs" role="tablist">
            {jobs.map((j, i) => (
              <button
                key={j.company}
                role="tab"
                aria-selected={active === i}
                className={`exp-tab ${active === i ? 'exp-tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                {j.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="experience__content" role="tabpanel">
            <div className="experience__header">
              <h3 className="experience__role">{job.role}</h3>
              <p className="experience__company accent">{job.company}</p>
              <div className="experience__meta">
                <span className="mono">{job.period}</span>
                <span className="experience__dot">·</span>
                <span>{job.location}</span>
              </div>
            </div>

            <ul className="experience__bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>
                  <span className="experience__arrow accent">▸</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="experience__tags">
              {job.tags.map(t => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
