import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './ProjectsDetail.css';

function DemoModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);
  const images = project.images;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title">{project.title}</h3>
          <button className="modal__close" onClick={onClose}>✕</button>
        </div>

        <div className="modal__img-wrap">
          <img
            src={images[current]}
            alt={`${project.title} screenshot ${current + 1}`}
            className="modal__img"
          />
          {images.length > 1 && (
            <>
              <button
                className="modal__nav modal__nav--prev"
                onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              >‹</button>
              <button
                className="modal__nav modal__nav--next"
                onClick={() => setCurrent((current + 1) % images.length)}
              >›</button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="modal__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`modal__dot ${i === current ? 'modal__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}

        <p className="modal__counter">{current + 1} / {images.length}</p>
      </div>
    </div>,
    document.body
  );
}

const projects = [
  {
    title: 'AWS Multi-Environment IaC Platform',
    description: 'Deployed reproducible Dev/Test/Prod AWS environments via Terraform modules. Implemented S3 remote state locking and GitHub Actions CI/CD to validate infrastructure changes on every pull request. Externalized sensitive backend config via dynamic init workflows for secure public repo collaboration.',
    tags: ['Terraform', 'AWS', 'GitHub Actions', 'S3', 'IaC', 'CI/CD'],
    images: ['/projects-demo/aws-iac/img1.png', '/projects-demo/aws-iac/img2.png', '/projects-demo/aws-iac/img3.png'],
    github: 'https://github.com/v-pham04',
    order: 'left',
  },
  {
    title: 'Windows Server AD & VPN Lab',
    description: 'Built a 5-VM Windows Server 2022 enterprise lab with single-forest Active Directory, 2 Domain Controllers (including Server Core), DNS/DHCP failover supporting 200+ IP leases. Implemented RBAC across 6 OUs, 20+ user accounts, 5 security groups, Group Policies, and a VPN gateway with group-based access control.',
    tags: ['Windows Server 2022', 'Active Directory', 'DNS', 'DHCP', 'VPN', 'RBAC'],
    images: ['/projects-demo/ad-lab/img1.png', '/projects-demo/ad-lab/img2.png', '/projects-demo/ad-lab/img3.png'],
    github: 'https://github.com/v-pham04',
    order: 'right',
  },
  {
    title: 'Dockerized Mail Platform (Mailcow)',
    description: 'Self-hosted Mailcow deployment with Postfix, Dovecot, SPF/DKIM/DMARC/TLS. Migrated 30+ mailboxes from Hostinger/GoDaddy with zero downtime. Eliminated vendor dependency and saved ~$200/month, cutting mail costs by ~70%.',
    tags: ['Docker', 'Postfix', 'Dovecot', 'DNS', 'TLS', 'SPF/DKIM/DMARC'],
    images: ['/projects-demo/mailcow/img1.png', '/projects-demo/mailcow/img2.png', '/projects-demo/mailcow/img3.png'],
    github: 'https://github.com/v-pham04',
    order: 'left',
  },
  {
    title: 'FOMO – Real-time Social Event Discovery App',
    role: 'Frontend Developer',
    description: 'Capstone project built collaboratively with a team of 7. A React Native mobile app for discovering and sharing local events. I worked primarily on the frontend, building UI screens and components with TypeScript and Expo. Full-stack app with Node.js/Express backend, Prisma ORM, and MySQL database.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'Prisma', 'MySQL', 'REST API'],
    images: ['/projects-demo/fomo/img1.png', '/projects-demo/fomo/img2.png'],
    github: 'https://github.com/v-pham04',
    order: 'right',
  },
  {
    title: 'PiSense — IoT Sensor Data Platform',
    role: 'Frontend Developer',
    description: 'Collaborative capstone project building an IoT sensor data platform. Python backend API serving real-time sensor readings to a JavaScript frontend dashboard. I contributed to the frontend data visualization and UI components.',
    tags: ['Python', 'JavaScript', 'REST API', 'IoT', 'Data Visualization', 'Raspberry Pi'],
    images: ['/projects-demo/pisense/img1.png', '/projects-demo/pisense/img2.png', '/projects-demo/pisense/img3.png', '/projects-demo/pisense/img4.png', '/projects-demo/pisense/img5.png', '/projects-demo/pisense/img6.png', '/projects-demo/pisense/img7.png'],
    github: 'https://github.com/v-pham04',
    order: 'left',
  },
];

export default function ProjectsDetail() {
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <section className="section projects-detail" id="projects">
      <div className="container">
        <h2 className="projects-detail__heading">Projects</h2>

        <div className="projects-detail__list">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`project-detail ${project.order === 'left' ? 'project-detail--left' : 'project-detail--right'}`}
            >
              <div className="project-detail__content">
                <h3 className="project-detail__title">{project.title}</h3>

                {project.role && (
                  <span className="project-detail__role">{project.role}</span>
                )}

                <p className="project-detail__desc">{project.description}</p>

                {project.bullets && (
                  <ul className="project-detail__bullets">
                    {project.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="project-detail__tags">
                  {project.tags.map(tag => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-detail__actions">
                  {/* Fixed: Added the missing opening <a tag below */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-detail__link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>View on GitHub</span>
                  </a>

                  {project.images && project.images.length > 0 && (
                    <button
                      className="project-detail__demo-btn"
                      onClick={() => setActiveDemo(project)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <path d="M8 21h8M12 17v4"/>
                      </svg>
                      View Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeDemo && (
        <DemoModal project={activeDemo} onClose={() => setActiveDemo(null)} />
      )}
    </section>
  );
}