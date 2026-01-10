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
            <a href="https://leetcode.com/u/RavindranathTagor/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
            </a>
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const element = document.querySelector(link.href);
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }
                  }}
                  className="text-lg sm:text-xl text-gray-300 hover:text-white py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 mt-4 pt-4 border-t border-gray-800">
                <a href="https://github.com/RavindranathTagor" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors p-2"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/ravindranathrt/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors p-2"><Linkedin size={24} /></a>
                <a href="https://leetcode.com/u/RavindranathTagor/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors p-2">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                </a>
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
