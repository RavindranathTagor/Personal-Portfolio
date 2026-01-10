import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Achievements />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
