import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import Lightbox from './Lightbox';

const featuredItem = {
  type: 'video',
  src: '/gallery/Nasa Award video.mp4',
  title: 'NASA Award Ceremony',
  description: 'Receiving the NASA Space Apps Challenge Local Award — recognized among 509+ teams.',
};

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
    <div ref={containerRef} className="relative cursor-pointer group h-full" onClick={handleVideoClick}>
      <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
      {isMuted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors pointer-events-none">
          <span className="font-mono text-xs sm:text-sm text-white bg-black/70 px-3 py-2 rounded-lg backdrop-blur-sm">🔊 tap for sound</span>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader eyebrow="gallery" title="Winning moments" align="center" />

        {/* Featured NASA video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card mb-5 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-video">
              <FeaturedVideo src={featuredItem.src} />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <span className="eyebrow mb-3">major achievement</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-fg mb-3">{featuredItem.title}</h3>
              <p className="text-muted text-sm sm:text-base">{featuredItem.description}</p>
              <div className="mt-5 flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" alt="NASA" className="h-8 sm:h-10 w-auto" />
                <span className="font-mono text-xs text-muted">NASA Space Apps Challenge 2024</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bento-card cursor-pointer group hover:-translate-y-1"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-mono text-[10px] sm:text-xs text-white text-center truncate">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
