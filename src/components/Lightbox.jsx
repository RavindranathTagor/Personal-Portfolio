import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Shared image lightbox used by Certificates, Achievements, and Gallery.
// `item` must have an image source under `src` or `image`, plus a `title`.
const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!item) return null;
  const src = item.src || item.image;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-accent transition-colors z-10 p-2"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} className="sm:w-8 sm:h-8" />
      </button>
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="max-w-5xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={item.title}
          className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] object-contain rounded-xl border border-ink-600"
        />
        <p className="text-white text-center mt-3 sm:mt-4 text-sm sm:text-lg font-medium px-4">{item.title}</p>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
