import React from 'react';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;