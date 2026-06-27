import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import Lightbox from './Lightbox';

const achievements = [
  {
    title: 'NASA Space Apps Challenge — Local Award 2024',
    image: '/certificates/NASA APP CHALLENGE LOCAL AWARD CERTIFICATE.png',
    description: 'Local Award for innovation and impact among 509+ teams (DSU Local Host).',
    orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    orgName: 'NASA',
  },
  {
    title: '1st Prize — Inter-College Innovative Idea & Model Competition',
    image: '/certificates/Inter College Science Forum 1st prize.png',
    description: 'First place at Dayananda Sagar Academy of Technology and Management, Bengaluru.',
    orgLogo: '/logos/DSi.png',
    orgName: 'DSATM',
  },
  {
    title: '2nd Runner-Up — State-Level Project Exhibition 2025',
    image: '/certificates/BIT Project 3rd Place.png',
    description: 'Secured Second Runner-Up at Bangalore Institute of Technology.',
    orgLogo: '/logos/bangalore-institute-of-technology.png',
    orgName: 'Bangalore Institute of Technology',
  },
  {
    title: '2nd Runner-Up — Inter-College Frontend Development',
    image: '/certificates/Frontend Competition Winning.png',
    description: 'Second Runner-Up in the frontend development competition at DSATM.',
    orgLogo: '/logos/DSi.png',
    orgName: 'DSATM',
  },
  {
    title: 'Consolation Prize — Altair Data Science Contest',
    image: '/certificates/winning Consolation Prize in Altair Data ScienceContest.png',
    description: 'Recognized in the Altair Data Science Contest (IIT Kanpur) using Altair RapidMiner.',
    orgLogo: '/logos/altair.png',
    orgName: 'Altair · IIT Kanpur',
  },
];

const AchievementCard = ({ cert, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="bento-card group flex flex-col cursor-pointer hover:-translate-y-1"
    onClick={() => onClick(cert)}
  >
    <div className="relative overflow-hidden">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-44 sm:h-52 md:h-60 object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent flex items-end">
        <img src={cert.orgLogo} alt={cert.orgName} className="h-9 sm:h-11 w-auto object-contain bg-white/90 p-1.5 rounded-md" />
      </div>
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors flex items-center justify-center">
        <span className="font-mono text-xs text-onaccent bg-accent opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 rounded-full">click to view</span>
      </div>
    </div>
    <div className="p-5 sm:p-6 flex-grow flex flex-col">
      <h3 className="font-display font-bold text-base sm:text-lg text-fg mb-2 leading-snug">{cert.title}</h3>
      <p className="text-muted text-xs sm:text-sm mb-3 flex-grow">{cert.description}</p>
      <div className="font-mono text-[11px] text-accent uppercase tracking-widest">{cert.orgName}</div>
    </div>
  </motion.div>
);

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="achievements" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="absolute top-0 right-1/4 w-[28rem] h-[28rem] glow-blob pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow="achievements"
          title="Awards & recognition"
          subtitle="Wins from national hackathons and inter-college competitions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map((cert, index) => (
            <AchievementCard key={index} cert={cert} index={index} onClick={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
