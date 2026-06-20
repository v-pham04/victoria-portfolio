import React from 'react';
import './Skills.css';

const categories = [
  {
    label: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: ['AWS', 'EC2', 'VPC', 'EKS', 'S3', 'IAM', 'Azure', 'GCP'],
  },
  {
    label: 'Systems & Linux',
    icon: '🐧',
    skills: ['Linux Admin', 'DNS', 'SMTP/IMAP', 'Nginx', 'SSL/TLS', 'UFW', 'Fail2Ban', 'System Hardening'],
  },
  {
    label: 'DevOps & Automation',
    icon: '⚙️',
    skills: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Infrastructure as Code'],
  },
  {
    label: 'Monitoring & Observability',
    icon: '📊',
    skills: ['Log Analysis', 'Health Check Automation', 'Alerting Pipelines', 'System Metrics'],
  },
  {
    label: 'Scripting & Languages',
    icon: '💻',
    skills: ['Bash', 'Python', 'Rust', 'Java', 'C++', 'SQL', 'JavaScript'],
  },
  {
    label: 'Security',
    icon: '🔒',
    skills: ['Least-Privilege IAM', 'SSH Hardening', 'SPF/DKIM/DMARC', 'TLS/PKI', 'Firewall Config', 'Patch Management'],
  },
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="skills__heading">Technical Skills</h2>

        <div className="skills__grid">
          {categories.map(cat => (
            <div className="skill-card" key={cat.label}>
              <div className="skill-card__header">
                <span className="skill-card__icon">{cat.icon}</span>
                <h3 className="skill-card__title">{cat.label}</h3>
              </div>
              <div className="skill-card__tags">
                {cat.skills.map(s => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
