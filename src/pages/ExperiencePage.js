import React from 'react';
import Experience from '../components/Experience';
import ProjectsDetail from '../components/ProjectsDetail';
import Footer from '../components/Footer';
import Research from '../components/Research';
import './ExperiencePage.css';

export default function ExperiencePage() {
  return (
    <main className="experience-page fade-up">
      <Experience />
      <ProjectsDetail />
      <Research />
      <Footer />
    </main>
  );
}
