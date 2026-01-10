import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react'; // Ensure lucide-react is installed

const projectsData = [
  {
    title: "Slates.me - Canvas Collaboration Platform",
    description: "Built Slates.me using React for the frontend and Supabase for backend data storage and real-time collaboration. Implemented a shared canvas feature where users can add and move notes and files (images, videos, PDFs). Made a responsive UI with gesture support, auto-save, and easy access from any device.",
    link: "https://slates.me",
    linkText: "Live Site",
    type: "Web App",
    image: "https://slates.me/images/slate_Logo.png",
    video: null 
  },
  {
    title: "AI-Powered Orbital Object Detection",
    description: "Developed an advanced space debris detection system using Python and YOLOv8 that analyzes satellite imagery in real-time through a web interface to identify and classify 11 types of space objects including satellites (CHEOPS, SOHO, SMART-1) and orbital debris with precise bounding box localization. Implemented hybrid neural network architecture combining YOLO object detection with Vision Transformer components and trained the model on space debris dataset, achieving 86.5% mAP accuracy.",
    link: "https://github.com/RavindranathTagor/HOPS",
    linkText: "GitHub",
    type: "AI / ML",
    video: "/videos/BIT Project 3rd Place.mp4" 
  },
  {
    title: "PhysioSense",
    subtitle: "Gamified Wrist Mobility Rehabilitation System",
    description: "Engineered a gamified wrist mobility rehabilitation system utilizing ESP8266 microcontroller and MPU6050 Sensor. Implemented a Python Flask server using Socket communication to process wrist motion data in real time and simulate keyboard inputs for interactive game control. Enhanced patient engagement and rehabilitation outcomes through gamified wrist exercises.",
    link: "https://github.com/RavindranathTagor/Gamified-Physio-Treatment",
    linkText: "GitHub",
    type: "IoT / Python",
    video: "/videos/Science Forum Project Demo.mp4"
  }
];

const VideoCard = ({ project }) => {
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
        <div ref={containerRef} className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-800 flex flex-col h-full hover:border-gray-600 transition-colors duration-300">
            {project.video ? (
                <div className="relative aspect-video group cursor-pointer" onClick={handleVideoClick}>
                    <video 
                        ref={videoRef}
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={project.video} type="video/mp4" />
                    </video>
                    {isMuted && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors pointer-events-none">
                            <span className="text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Tap to Unmute</span>
                        </div>
                    )}
                </div>
            ) : project.image ? (
                <div className="relative aspect-video group bg-white flex items-center justify-center p-4 sm:p-8">
                     <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                     />
                </div>
            ) : (
                 <div className="aspect-video bg-[#222] flex items-center justify-center border-b border-gray-800">
                    <span className="text-gray-500 font-mono text-sm">No Preview Available</span>
                 </div>
            )}
            
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
                     <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-purple-500 uppercase tracking-wider">{project.type}</span>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 leading-tight line-clamp-2">{project.title}</h3>
                        {project.subtitle && <p className="text-gray-400 text-xs sm:text-sm mt-1">{project.subtitle}</p>}
                     </div>
                     <span className="p-1.5 sm:p-2 bg-[#252525] rounded-full text-gray-400 flex-shrink-0">
                        {project.linkText === 'Live Site' ? <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]"/> : <Github size={16} className="sm:w-[18px] sm:h-[18px]"/>}
                     </span>
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-4 sm:line-clamp-none">
                    {project.description}
                </p>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium text-xs sm:text-sm self-start group">
                    View {project.linkText} 
                    <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px] group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
              A selection of my recent works involving Web Development, IoT, and Artificial Intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
                <VideoCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
