import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Instagram, Github, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Small dark/light toggle. Source of truth is the `.light` class on <html>
// (set pre-paint in index.html); we mirror it here and persist to localStorage.
const ThemeToggle = ({ className = '' }) => {
  const [isLight, setIsLight] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('light')
  );

  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains('light');
    root.classList.toggle('light', next);
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark');
    } catch (err) {
      console.warn('Could not persist theme', err);
    }
    setIsLight(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`relative flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 bg-ink-700 text-muted hover:text-accent hover:border-accent/50 transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isLight ? 'sun' : 'moon'}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {isLight ? <Moon size={17} /> : <Sun size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const LeetCodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { href: 'https://github.com/RavindranathTagor', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/ravindranathrt/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://leetcode.com/u/RavindranathTagor/', label: 'LeetCode', Icon: LeetCodeIcon },
  { href: 'https://x.com/RavindraRT1', label: 'X', Icon: XIcon },
  { href: 'https://www.instagram.com/ravindra._.rt/', label: 'Instagram', Icon: Instagram },
];

const navLinks = [
  { name: 'about', href: '#about' },
  { name: 'experience', href: '#experience' },
  { name: 'projects', href: '#projects' },
  { name: 'achievements', href: '#achievements' },
  { name: 'contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 250);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`container mx-auto flex items-center justify-between gap-4 rounded-2xl border px-3 sm:px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border-ink-600 bg-ink-900/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="group flex items-center gap-2.5">
          <span className="font-mono font-bold text-2xl sm:text-3xl tracking-tight text-fg transition-transform duration-300 group-hover:scale-105">
            <span className="text-accent">&lt;</span>RT<span className="text-accent">/&gt;</span>
          </span>
          <span className="hidden sm:block font-mono text-xs text-muted leading-tight">
            <span className="text-accent">~/</span>ravindranath<br />
            <span className="text-subtle">software-engineer</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 rounded-lg font-mono text-sm text-muted hover:text-fg hover:bg-ink-700 transition-colors"
            >
              <span className="text-accent">#</span>{link.name}
            </a>
          ))}
        </div>

        {/* Desktop socials */}
        <div className="hidden lg:flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-accent transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <span className="w-px h-5 bg-ink-600 mx-1" />
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-fg p-1.5 -mr-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 container mx-auto rounded-2xl border border-ink-600 bg-ink-900/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="w-full text-center py-3 font-mono text-lg text-body hover:text-accent hover:bg-ink-800 transition-colors"
                >
                  <span className="text-accent">#</span>{link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 pt-5 border-t border-ink-600 w-full justify-center">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted hover:text-accent transition-colors p-1"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
