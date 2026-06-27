import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';

const ROLES = ['Software Engineer', 'AI Voice Agent Builder', 'RAG & Backend Systems', 'Observability Nerd'];

const techTicker = [
  'Python', 'FastAPI', 'Temporal', 'Celery', 'AWS', 'PostgreSQL', 'Redis',
  'Docker', 'Prometheus', 'Grafana', 'Loki', 'React', 'WebSockets', 'Nginx',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter loop through ROLES
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 70);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 35);
    } else {
      // Fully deleted: advance to next role (async to avoid sync setState in effect)
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, 200);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 pb-16 flex items-center"
    >
      {/* Background glows */}
      <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] glow-blob animate-glow-pulse pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[32rem] h-[32rem] glow-blob animate-glow-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Main headline cell */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bento-card p-6 sm:p-10 flex flex-col justify-center"
          >
            <span className="eyebrow mb-4">
              available for full-time roles · 2026
            </span>
            <p className="font-mono text-accent text-sm sm:text-base mb-3">Hi, I&apos;m</p>
            <h1 className="font-display font-bold leading-[0.95] tracking-tight text-4xl sm:text-6xl lg:text-7xl text-gradient">
              RAVINDRANATH<br />TAGORE
            </h1>
            <div className="mt-5 font-mono text-lg sm:text-2xl text-fg">
              <span className="text-muted">&gt; </span>
              {typed}
              <span className="inline-block w-[2px] h-[1.1em] align-middle bg-accent ml-0.5 animate-blink" />
            </div>
            <p className="mt-5 max-w-xl text-muted text-sm sm:text-base leading-relaxed">
              I build <span className="text-fg">AI voice-agent platforms</span>, RAG knowledge
              systems, and scalable backend services — with a focus on latency, reliability, and
              production-grade observability.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#projects" className="btn-accent">
                View Work <ArrowUpRight size={16} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="/Ravindranath_Tagore_Resume.pdf" download className="btn-ghost">
                <FileText size={16} /> Resume
              </motion.a>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#contact" className="btn-ghost">Let&apos;s Talk</motion.a>
            </div>
          </motion.div>

          {/* Right column: photo + stat chips */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
            {/* Photo cell */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bento-card col-span-2 lg:col-span-1 relative flex items-end justify-center bg-white min-h-[14rem] sm:min-h-[18rem]"
            >
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-700">
                @ravindranath._.rt
              </div>
              <img
                src="/images/hero-new.png"
                alt="Ravindranath Tagore"
                className="relative z-10 h-[15rem] sm:h-[19rem] w-auto object-contain object-bottom drop-shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
              />
            </motion.div>

            {/* Stat chips */}
            {[
              { value: '63.5ms', label: 'avg RAG latency' },
              { value: '900+', label: 'concurrent AI calls' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="bento-card p-4 sm:p-5 flex flex-col justify-center cursor-default"
              >
                <span className="font-display font-bold text-2xl sm:text-3xl text-accent">{s.value}</span>
                <span className="font-mono text-[11px] sm:text-xs text-muted mt-1">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 sm:mt-5 bento-card py-4 overflow-hidden mask-fade-x"
        >
          <div className="flex gap-8 w-max animate-marquee">
            {[...techTicker, ...techTicker].map((t, i) => (
              <span key={i} className="font-mono text-sm text-muted whitespace-nowrap">
                <span className="text-accent mr-2">▹</span>{t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 1.6, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-subtle hover:text-accent transition-colors z-20"
        aria-label="Scroll down"
      >
        <ArrowDown size={26} />
      </motion.a>
    </section>
  );
};

export default Hero;
