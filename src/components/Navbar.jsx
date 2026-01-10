import React, { useState, useEffect } from 'react';
import { Menu, X, Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RTLogo = () => (
    <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full border-2 border-white group-hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
            <path d="M 25 20 L 25 80 L 40 80 L 40 60 L 55 60 L 65 80 L 80 80 L 70 60 C 80 60 85 50 85 40 C 85 30 80 20 60 20 Z M 40 35 L 60 35 C 65 35 65 45 60 45 L 40 45 Z" fill="black" />
            <rect x="25" y="20" width="55" height="10" fill="black"/> 
             {/* Simplified RT Monogram Geometry simulation for robust rendering */}
            <text x="50" y="70" fontSize="50" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" fill="black">RT</text>
        </svg>
    </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'certificates', href: '#certificates' },
    { name: 'projects', href: '#projects' },
    { name: 'gallery', href: '#gallery' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 bg-black transition-all duration-300 py-2 sm:py-4 border-b border-gray-800`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Left: Logo */}
        <a href="#home" className="group">
           <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center border-2 border-transparent group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <div className="flex items-center justify-center transform translate-y-0.5">
                  <span className="text-2xl sm:text-4xl font-black text-black tracking-tighter leading-none" style={{ fontFamily: 'Impact, fantasy', letterSpacing: '-2px' }}>R</span>
                  <span className="text-2xl sm:text-4xl font-black text-black tracking-tighter leading-none" style={{ fontFamily: 'Impact, fantasy', letterSpacing: '-2px' }}>T</span>
              </div>
           </div>
        </a>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center justify-center flex-1 ml-8 xl:ml-12">
          {navLinks.map((link) => (
            <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base font-light tracking-wide hover:underline decoration-1 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Social Icons (Desktop) */}
        <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
            <a href="https://github.com/RavindranathTagor" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/ravindranathrt/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors"><Linkedin size={20} /></a>
            <a href="https://x.com/RavindraRT1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
            </a>
            <a href="https://www.instagram.com/ravindra._.rt/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors"><Instagram size={20} /></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 -mr-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 sm:py-8 space-y-5 sm:space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg sm:text-xl text-gray-300 hover:text-white py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 mt-4 pt-4 border-t border-gray-800">
                <a href="https://github.com/RavindranathTagor" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors p-2"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/ravindranathrt/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors p-2"><Linkedin size={24} /></a>
                <a href="https://x.com/RavindraRT1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors p-2">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/ravindra._.rt/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors p-2"><Instagram size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
