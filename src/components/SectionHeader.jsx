import React from 'react';
import { motion } from 'framer-motion';

// Shared section heading: mono eyebrow + bold display title + optional subtitle.
const SectionHeader = ({ eyebrow, title, subtitle, align = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center mx-auto' : ''}`}
  >
    {eyebrow && (
      <span className={`eyebrow mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-subtle">//</span> {eyebrow}
      </span>
    )}
    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-fg tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-muted text-sm sm:text-base max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
