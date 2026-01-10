import React from 'react';
import { motion } from 'framer-motion';
import { Code, User, GraduationCap, MapPin, Mail, Phone, Award } from 'lucide-react';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-white mb-6"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column: Bio & Personal Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-4">
                I am a final-year Information Science and Engineering student at Dayananda Sagar Academy of Technology and Management, Bangalore, with a passion for building impactful solutions using modern web technologies and AI.
              </p>
              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                My journey involves developing award-winning projects from IoT-based gamified rehabilitation systems to AI-powered space debris detection platforms. With a strong technical foundation in Java, Python, and React, I am constantly seeking opportunities to solve real-world challenges.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base"
            >
              <div className="flex items-center gap-2 sm:gap-3 group">
                <User className="text-white flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <span className="truncate">Ravindranath Tagore</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 group">
                <MapPin className="text-white flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 group">
                <Mail className="text-white flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <a href="mailto:rtravindra10@gmail.com" className="hover:text-white transition-colors truncate">rtravindra10@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 group">
                <Phone className="text-white flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <a href="tel:+918431805765" className="hover:text-white transition-colors">+91 8431805765</a>
              </div>
            </motion.div>

            {/* Education & Certifications - Side by Side on Desktop */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Education Card */}
              <div className="bg-[#0a0a0a] p-4 sm:p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base">B.E. in Information Science</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">DSATM, Bangalore</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">4th Year (2022 - 2026)</p>
              </div>

              {/* Certifications Card */}
              <div className="bg-[#0a0a0a] p-4 sm:p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">Certifications</h3>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-300 font-medium text-xs sm:text-sm">Microsoft Azure AZ-900</p>
                    <p className="text-gray-500 text-xs">June 2025</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium text-xs sm:text-sm">Oracle Cloud HCM</p>
                    <p className="text-gray-500 text-xs">2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Skills & Stats */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Code className="text-white" size={20} /> Technical Skills
              </h3>
            </motion.div>
            
            <div className="space-y-5 sm:space-y-6">
              {/* Languages */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-2 sm:mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'JavaScript', 'SQL'].map((skill) => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 sm:px-4 py-1.5 bg-[#111] text-gray-300 rounded-lg border border-gray-800 text-xs sm:text-sm cursor-default hover:border-gray-600 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Web Dev */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-2 sm:mb-3">Web & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'HTML/CSS', 'Git', 'VS Code', 'Figma'].map((skill) => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 sm:px-4 py-1.5 bg-[#111] text-gray-300 rounded-lg border border-gray-800 text-xs sm:text-sm cursor-default hover:border-gray-600 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-2 sm:mb-3">Core Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'Problem-Solving', 'Creativity', 'Communication'].map((skill) => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 sm:px-4 py-1.5 bg-[#111] text-gray-300 rounded-lg border border-gray-800 text-xs sm:text-sm cursor-default hover:border-gray-600 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10"
            >
              {[
                { value: '5+', label: 'Awards' },
                { value: '10+', label: 'Projects' },
                { value: '2026', label: 'Graduating' }
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#0a0a0a] p-3 sm:p-4 rounded-xl border border-gray-800 text-center hover:border-gray-700 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
