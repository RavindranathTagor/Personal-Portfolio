import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import '@fontsource/playfair-display'; // Defaults to weight 400
import '@fontsource/playfair-display/700.css'; // Bold weight

const Hero = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I am Ravindranath Tagore";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setIsTypingComplete(true), 500); // Slight delay before switching theme
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden bg-white select-none"
    >
      
      {/* ------------------------------------------------------
          Hero Section - Clean White Theme - Fully Responsive
      ------------------------------------------------------- */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 relative h-full flex items-center">
           
           {/* Mobile Layout: Stacked vertically */}
           <div className="md:hidden absolute inset-0 flex flex-col items-center pt-20 sm:pt-24 z-30 pointer-events-none px-4">
              {/* Name */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-center min-h-[2em] leading-tight text-black" style={{ fontFamily: '"Playfair Display", serif' }}>
                {text}
                <span className="animate-pulse text-green-500 font-sans">|</span>
              </h2>
              
              {/* Coder tag - directly below name on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-4 sm:mt-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter font-mono text-black text-center">
                  &lt;coder&gt;
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base font-mono text-center text-gray-600">
                  Developer who writes<br/>
                  clean, elegant and efficient code.
                </p>
              </motion.div>
           </div>

           {/* Desktop Layout: Left Content - Typing Animation */}
           <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-1/2 flex-col justify-center items-end pr-24 lg:pr-36 xl:pr-48 z-30 pointer-events-none">
                 <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide text-right min-h-[3em] leading-tight text-black" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {text}
                    <span className="animate-pulse text-green-500 font-sans">|</span>
                 </h2>
           </div>

           {/* Desktop Layout: Right Content - Coder */}
           <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-1/2 flex-col justify-center items-start pl-32 lg:pl-48 xl:pl-60 z-30 pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }} 
              >
                <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter font-mono text-black">
                  &lt;coder&gt;
                </h2>
                <p className="mt-6 text-xl font-mono text-left text-gray-600">
                  Developer who writes<br/>
                  clean, elegant and efficient code.
                </p>
              </motion.div>
           </div>

           {/* Central Image */}
           <div className="absolute inset-x-0 bottom-0 h-[55vh] sm:h-[58vh] md:h-[70vh] lg:h-[80vh] flex justify-center items-end pointer-events-none">
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src="/images/hero-new.png" 
                alt="Ravindranath Tagore" 
                className="h-full w-auto object-contain max-w-none mix-blend-normal"
              />
           </div>
        </div>
      </div>

      
      {/* ------------------------------------------------------
          Scroll Indicator
      ------------------------------------------------------- */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 text-gray-800 pointer-events-none"
      >
        <ArrowDown size={32} />
      </motion.div>

    </section>
  );
};

export default Hero;



