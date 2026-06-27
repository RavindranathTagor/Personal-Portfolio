import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const projectsData = [
  {
    title: 'Slates.me — Canvas Collaboration Platform',
    type: 'React · Supabase · Realtime',
    description:
      'Real-time collaborative canvas built with React and Supabase for persistent storage and synced interactions. Shared canvas to add, move, and manage notes and files (images, videos, PDFs) — with gesture support, auto-save, and cross-device access.',
    link: 'https://slates.me',
    linkText: 'Live Site',
    image: '/logos/slate_Logo.png',
    video: null,
    tags: ['React', 'Supabase', 'Realtime', 'Responsive UI'],
  },
  {
    title: 'HOPS — Hybrid Orbital Prediction System',
    type: 'Python · ML · Space',
    description:
      'Hybrid satellite orbital-lifetime predictor combining the JB2008 physics model with a Random Forest (100 trees). 98.5% error reduction training on 32,413 TLE records from 6 reentry satellites (UARS, ROSAT, Tiangong-1/2, Compton GRO, Phobos-Grunt). Flask app with real-time CelesTrak & Space-Track integration and transparent SEEN/UNSEEN accuracy.',
    link: 'https://github.com/RavindranathTagor/HOPS',
    linkText: 'GitHub',
    video: '/videos/BIT Project 3rd Place.mp4',
    tags: ['Python', 'Flask', 'Random Forest', 'JB2008', 'Space-Track'],
  },
  {
    title: 'PhysioSense',
    subtitle: 'Gamified Wrist Mobility Rehabilitation',
    type: 'IoT · Python · Flask',
    description:
      'Gamified wrist-rehab system using an ESP8266 and MPU6050 sensor. A Python Flask server processes wrist-motion data in real time over sockets and simulates keyboard inputs for interactive game control — boosting patient engagement and rehab outcomes.',
    link: 'https://github.com/RavindranathTagor/Gamified-Physio-Treatment',
    linkText: 'GitHub',
    video: '/videos/Science Forum Project Demo.mp4',
    tags: ['ESP8266', 'MPU6050', 'Flask', 'WebSockets'],
  },
];

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-mute when out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current && !videoRef.current.muted) {
            videoRef.current.muted = true;
            setIsMuted(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div ref={containerRef} className="bento-card flex flex-col h-full group hover:-translate-y-1">
      {/* Media */}
      {project.video ? (
        <div className="relative aspect-video cursor-pointer overflow-hidden" onClick={handleVideoClick}>
          <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={project.video} type="video/mp4" />
          </video>
          {isMuted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors pointer-events-none">
              <span className="font-mono text-[11px] text-white bg-black/70 px-2 py-1 rounded backdrop-blur-sm">tap to unmute</span>
            </div>
          )}
        </div>
      ) : project.image ? (
        <div className="relative aspect-video bg-gradient-to-br from-white to-gray-100 flex items-center justify-center p-8 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="aspect-video bg-ink-700 flex items-center justify-center border-b border-ink-600">
          <span className="text-muted font-mono text-sm">No Preview</span>
        </div>
      )}

      {/* Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{project.type}</span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-fg mt-1 leading-tight">{project.title}</h3>
            {project.subtitle && <p className="text-muted text-xs sm:text-sm mt-0.5">{project.subtitle}</p>}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-full bg-ink-700 text-muted hover:text-accent hover:bg-ink-600 transition-colors"
            aria-label={project.linkText}
          >
            {project.linkText === 'Live Site' ? <ExternalLink size={16} /> : <Github size={16} />}
          </a>
        </div>

        <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] sm:text-[11px] text-muted px-2 py-1 rounded-md border border-ink-600 bg-ink-700/50">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-accent hover:gap-2.5 transition-all self-start"
        >
          View {project.linkText} <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="projects"
          title="Things I've built"
          subtitle="Selected work across real-time web, machine learning, and IoT."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
