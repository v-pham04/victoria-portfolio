import React from 'react';
import './Research.css';

export default function Research() {
  return (
    <section className="section research" id="research">
      <div className="container">
        <h2 className="research__heading">Research</h2>

        <div className="research__card">
          <div className="research__content">
            <div className="research__meta">
              <span className="research__conference">National Conference on Undergraduate Research 2024</span>
              <span className="research__badge">Selected Presenter</span>
            </div>

            <h3 className="research__title">
              Artificial Intelligence in Deception: Unraveling the Role of AI and Large Language Models in Online Financial Scams and Countermeasures
            </h3>

            <ul className="research__bullets">
              <li>Selected among 9 students representing the University of Wisconsin–Stout at NCUR 2024.</li>
              <li>Investigated the intersection of Artificial Intelligence and financial scams, focusing on phishing as a common fraudulent activity.</li>
              <li>Conducted an analysis of phishing attempts, distinguishing between fully AI-generated and partly AI-facilitated phishing.</li>
              <li>Utilized a twofold methodological approach to examine patterns, structure, linguistics, and other characteristics in different types of phishing emails.</li>
            </ul>

            <div className="research__actions">
              <a
                href="/research-demo/ncurresearchposter.pdf"
                target="_blank"
                rel="noreferrer"
                className="research__poster-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                View Poster
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}