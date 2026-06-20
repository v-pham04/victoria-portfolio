import React from 'react';
import ContactDetail from '../components/ContactDetail';
import Footer from '../components/Footer';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <main className="contact-page fade-up">
      <ContactDetail />
      <Footer />
    </main>
  );
}
