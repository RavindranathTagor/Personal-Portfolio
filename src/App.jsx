import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative bg-ink-900 text-fg min-h-screen font-sans overflow-x-hidden">
      {/* Fixed film-grain overlay for texture */}
      <div className="grain pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-overlay" />

      <div className="relative z-[2]">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Metrics />
        <Projects />
        <Certificates />
        <Achievements />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
