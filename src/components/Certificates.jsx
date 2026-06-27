import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import Lightbox from './Lightbox';

const certifications = [
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    image: '/certificates/azure-fundamentals.png',
    description: 'Cloud concepts, core Azure services, security, governance, pricing, and deployment models.',
    orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    orgName: 'Microsoft',
    date: 'June 2025',
  },
  {
    title: 'Oracle Fusion Cloud HCM — Certified Foundations Associate',
    image: '/certificates/oracle-foundation.png',
    description: 'Foundational knowledge of Oracle Fusion Cloud HCM applications.',
    orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    orgName: 'Oracle',
    date: '2024',
  },
];

const CertificateCard = ({ cert, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bento-card group flex flex-col cursor-pointer hover:-translate-y-1"
    onClick={() => onClick(cert)}
  >
    <div className="relative overflow-hidden">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-between">
        <img src={cert.orgLogo} alt={cert.orgName} className="h-9 sm:h-11 w-auto object-contain bg-white/90 p-1.5 rounded-md" />
        <span className="font-mono text-[11px] text-white bg-black/70 px-2 py-1 rounded">{cert.date}</span>
      </div>
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors flex items-center justify-center">
        <span className="font-mono text-xs text-onaccent bg-accent opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 rounded-full">click to view</span>
      </div>
    </div>
    <div className="p-5 sm:p-6">
      <h3 className="font-display font-bold text-base sm:text-lg text-fg mb-2 leading-snug">{cert.title}</h3>
      <p className="text-muted text-xs sm:text-sm mb-3">{cert.description}</p>
      <div className="font-mono text-[11px] text-accent uppercase tracking-widest">{cert.orgName}</div>
    </div>
  </motion.div>
);

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="certifications"
          title="Credentials"
          subtitle="Industry-recognized certifications validating cloud and platform fundamentals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {certifications.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} onClick={setSelectedCert} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && <Lightbox item={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
