import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Users, Mail, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="about me"
          title="Engineer behind the systems"
          subtitle="Software Engineer focused on AI voice agents, RAG, and reliable backend infrastructure."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 sm:gap-5"
        >
          {/* Bio — large cell */}
          <motion.div variants={itemVariants} className="bento-card col-span-2 lg:col-span-2 p-6 sm:p-8">
            <span className="eyebrow mb-4">whoami</span>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              I&apos;m a <span className="text-fg font-medium">Software Engineer</span> who builds
              AI voice-agent platforms, RAG-based knowledge systems, backend services, and
              observability tooling. I graduated in <span className="text-accent">2026</span> with a
              B.E. in Information Science &amp; Engineering (CGPA <span className="text-accent">8.44</span>)
              from DSATM, Bengaluru.
            </p>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              Day to day I work across Python, FastAPI, Temporal, AWS, PostgreSQL, and Redis —
              obsessing over latency, reliability, scalability, and production debugging. I like
              turning fragile flows into resilient, well-instrumented systems.
            </p>
          </motion.div>

          {/* Photo cell */}
          <motion.div
            variants={itemVariants}
            className="bento-card col-span-2 lg:col-span-2 row-span-2 relative min-h-[16rem] overflow-hidden group"
          >
            <img
              src="/images/about-photo.jpeg"
              alt="Ravindranath Tagore"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="font-display font-bold text-xl sm:text-2xl text-white">Ravindranath Tagore</p>
              <p className="font-mono text-xs sm:text-sm text-accent mt-1">Bengaluru, India · open to work</p>
            </div>
          </motion.div>

          {/* Currently @ Formi */}
          <motion.div variants={itemVariants} className="bento-card col-span-2 lg:col-span-1 p-5">
            <Briefcase className="text-accent mb-3" size={20} />
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Currently</p>
            <p className="text-fg font-medium mt-1 text-sm sm:text-base">SWE Intern</p>
            <p className="text-muted text-xs sm:text-sm">Agentic Universe (Formi)</p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="bento-card col-span-2 lg:col-span-1 p-5">
            <GraduationCap className="text-accent mb-3" size={20} />
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Education</p>
            <p className="text-fg font-medium mt-1 text-sm sm:text-base">B.E. ISE · 2026</p>
            <p className="text-muted text-xs sm:text-sm">DSATM · CGPA 8.44</p>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="bento-card col-span-1 p-5">
            <MapPin className="text-accent mb-3" size={20} />
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Based in</p>
            <p className="text-fg font-medium mt-1 text-sm">Bengaluru, IN</p>
          </motion.div>

          {/* Community */}
          <motion.div variants={itemVariants} className="bento-card col-span-1 p-5">
            <Users className="text-accent mb-3" size={20} />
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Community</p>
            <p className="text-fg font-medium mt-1 text-sm">Innovisions Club</p>
            <p className="text-muted text-xs">Core Member · ISE</p>
          </motion.div>

          {/* Contact quick row */}
          <motion.div variants={itemVariants} className="bento-card col-span-2 p-5 flex flex-col justify-center gap-3">
            <a href="mailto:rtravindra10@gmail.com" className="flex items-center gap-3 text-body hover:text-accent transition-colors group">
              <Mail size={18} className="text-accent flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm truncate">rtravindra10@gmail.com</span>
            </a>
            <a href="tel:+918431805765" className="flex items-center gap-3 text-body hover:text-accent transition-colors">
              <Phone size={18} className="text-accent flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm">+91 84318 05765</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
