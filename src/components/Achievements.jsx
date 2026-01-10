import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Achievement Certificates
const achievements = [
  {
    title: "NASA App Challenge Local Award",
    image: "/certificates/NASA APP CHALLENGE LOCAL AWARD CERTIFICATE.png",
    description: "Local award winner at NASA Space Apps Challenge.",
    orgLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
    orgName: "NASA"
  },
  {
    title: "BIT Project 3rd Place",
    image: "/certificates/BIT Project 3rd Place.png",
    description: "Secured 3rd place in college project contest.",
    orgLogo: "/logos/bangalore-institute-of-technology.png",
    orgName: "Bangalore Institute of Technology"
  },
  {
    title: "Frontend Competition Winner",
    image: "/certificates/Frontend Competition Winning.png",
    description: "Winner of the departmental frontend dev competition.",
    orgLogo: "/logos/DSi.png",
    orgName: "Dayananda Sagar Institutions"
  },
  {
    title: "Science Forum 1st Prize",
    image: "/certificates/Inter College Science Forum 1st prize.png",
    description: "First prize in Inter-College Science Forum.",
    orgLogo: "/logos/DSi.png",
    orgName: "Dayananda Sagar Institutions"
  },
  {
    title: "Altair Data Science Consolation",
    image: "/certificates/winning Consolation Prize in Altair Data ScienceContest.png",
    description: "Consolation prize in Altair Data Science Contest.",
    orgLogo: "/logos/altair.png",
    orgName: "Altair"
  }
];

// Lightbox Modal Component
const Lightbox = ({ item, onClose }) => {
    if (!item) return null;
    
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 sm:p-4"
            onClick={onClose}
        >
            <button 
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-300 transition-colors z-10 p-2"
                onClick={onClose}
            >
                <X size={28} className="sm:w-8 sm:h-8" />
            </button>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
                />
                <p className="text-white text-center mt-3 sm:mt-4 text-sm sm:text-lg font-medium px-4">{item.title}</p>
            </motion.div>
        </motion.div>
    );
};

// Certificate Card Component
const CertificateCard = ({ cert, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-[#242424] rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
    onClick={() => onClick(cert)}
  >
    <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
      <img 
        src={cert.image} 
        alt={cert.title} 
        className="w-full h-48 sm:h-56 md:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <img 
              src={cert.orgLogo} 
              alt={cert.orgName}
              className="h-10 sm:h-12 w-auto object-contain bg-white/90 p-1 rounded-md shadow-sm"
          />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1 rounded-lg text-xs sm:text-sm">Click to view</span>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 line-clamp-2">{cert.title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{cert.description}</p>
      <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
          {cert.orgName}
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Achievement Certificates Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Achievement Certificates</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base px-4">Awards and recognitions from competitions and events</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} onClick={setSelectedCert} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <Lightbox item={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
