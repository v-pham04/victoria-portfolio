import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <h2 className="education__heading">Academic Background</h2>

        <div className="education__card">
          <div className="education__left">
            <img src="/uw-stout-logo.jpg"
              alt="University of Wisconsin - Stout logo"
              className="education__school-logo"
            />
          </div>

          <div className="education__right">
            <div className="education__top-row">
              <div>
                <h3 className="education__degree">
                  B.S. Computer Science
                </h3>
                <p className="education__school accent">
                  University of Wisconsin – Stout
                </p>
              </div>
              <div className="education__meta">
                <span className="education__gpa mono">
                  <span className="accent">3.9</span> GPA
                </span>
                <span className="education__grad mono">Graduated May 2026</span>
              </div>
            </div>

            <div className="education__details">
              <div className="education__detail-block">
                <span className="education__detail-label">Concentration</span>
                <span>Cybersecurity & Secure Software Development</span>
              </div>
              <div className="education__detail-block">
                <span className="education__detail-label">Minors</span>
                <span>Mathematics · Computer Networking & System Design · Information Security Management</span>
              </div>
            </div>

            <div className="education__highlights">
              <span className="edu-tag">Cloud Infrastructure</span>
              <span className="edu-tag">Network Security</span>
              <span className="edu-tag">Secure Software Development</span>
              <span className="edu-tag">Systems Programming</span>
              <span className="edu-tag">Database Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
