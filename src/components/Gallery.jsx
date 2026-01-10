import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Featured item (NASA Award Video)
const featuredItem = { type: 'video', src: '/gallery/Nasa Award video.mp4', title: 'NASA Award Ceremony', description: 'Receiving the prestigious NASA Space Apps Challenge Local Award' };

// Regular gallery items
const galleryItems = [
  { type: 'image', src: '/gallery/BIT Project Competition.jpg', title: 'BIT Project Competition' },
  { type: 'image', src: '/gallery/Frontend Competition Win Prize.jpg', title: 'Frontend Competition Winner' },
  { type: 'image', src: '/gallery/NASA SPACE APP CHALLENGE 2024.jpg', title: 'NASA Space Apps Challenge' },
  { type: 'image', src: '/gallery/Science Forum Award Momentum.jpg', title: 'Science Forum Award' },
  { type: 'image', src: '/gallery/Science Forum Winning.jpg', title: 'Science Forum Winning Moment' },
];

const FeaturedVideo = ({ src }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    // Auto-mute when video goes out of viewport
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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleVideoClick = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div ref={containerRef} className="relative cursor-pointer group h-full" onClick={handleVideoClick}>
             <video 
               ref={videoRef}
               autoPlay 
               muted 
               loop 
               playsInline
               className="w-full h-full object-cover rounded-lg sm:rounded-xl"
             >
               <source src={src} type="video/mp4" />
             </video>
             {isMuted && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors pointer-events-none rounded-lg sm:rounded-xl">
                     <span className="text-xs sm:text-sm text-white bg-black/60 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm">🔊 Tap for Sound</span>
                </div>
             )}
        </div>
    );
};

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
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
                />
                <p className="text-white text-center mt-3 sm:mt-4 text-sm sm:text-lg font-medium px-4">{item.title}</p>
            </motion.div>
        </motion.div>
    );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Winning Moments</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        {/* Featured NASA Award Video - Large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <div className="border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gray-700 transition-colors">
            <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="aspect-video">
                  <FeaturedVideo src={featuredItem.src} />
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">Major Achievement</span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">{featuredItem.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg">{featuredItem.description}</p>
                  <div className="mt-4 sm:mt-6 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" alt="NASA" className="h-8 sm:h-10 w-auto" />
                    <span className="text-gray-500 text-xs sm:text-sm">NASA Space Apps Challenge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Regular Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#242424] rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-800 cursor-pointer group"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="p-2 sm:p-3">
                <p className="text-gray-300 font-medium text-center text-xs sm:text-sm truncate">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
