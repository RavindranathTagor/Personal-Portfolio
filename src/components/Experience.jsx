import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import SectionHeader from './SectionHeader';

const highlights = [
  {
    metric: '45–50%',
    text: 'Cut large AI voice-agent prompts by moving FAQs, objections, policy rules, and branch logic into a structured RAG knowledge base.',
  },
  {
    metric: '63.5ms',
    text: 'Achieved average RAG retrieval latency (p90 95ms / p95 97ms), validated across 162 UAT cases for multilingual English-Hindi voice flows.',
  },
  {
    metric: '100–900+',
    text: 'Architected AWS backend supporting concurrent AI voice calls with 0 active drops via lifecycle-aware graceful instance draining.',
  },
  {
    metric: '30–40%',
    text: 'Reduced end-to-end voice-agent latency by resolving streaming and backend bottlenecks, eliminating stuttering.',
  },
  {
    metric: 'Temporal',
    text: 'Migrated dialler orchestration to Temporal workflows — replacing fragile scheduling with activity workers, quota governance, retries, and circuit breakers.',
  },
  {
    metric: 'Full-stack obs',
    text: 'Built end-to-end observability with Prometheus, Grafana, Loki, and custom metrics for RAG latency, LLM failures, TTS, Celery workers, and workflows.',
  },
];

const stack = [
  'Python', 'FastAPI', 'Temporal', 'Celery', 'AWS EC2', 'AWS RDS', 'ALB',
  'Docker', 'Nginx', 'PostgreSQL', 'Redis', 'Prometheus', 'Grafana', 'Loki', 'systemd',
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] glow-blob pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow="experience"
          title="Where I'm shipping"
          subtitle="Production work on AI voice infrastructure — measured in latency, reliability, and scale."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card p-6 sm:p-8 md:p-10"
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-ink-600">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-ink-600 flex-shrink-0 p-2">
                <img src="/logos/formi.png" alt="Agentic Universe (Formi)" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-fg">Software Engineer Intern</h3>
                <p className="text-accent font-medium mt-0.5">Agentic Universe (Formi)</p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs sm:text-sm text-muted sm:pl-4">
              <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> 2026 – Present</span>
              <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> Bengaluru, India</span>
            </div>
          </div>

          {/* Featured highlight: production-ready enterprise AI agents + clients */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 rounded-2xl border border-accent/30 bg-accent/[0.06] p-5 sm:p-6"
          >
            <p className="text-body text-sm sm:text-base leading-relaxed">
              Building <span className="text-accent font-semibold">production-ready enterprise AI voice agents</span>{' '}
              — designed, shipped, and currently running in production for real enterprise customers.
            </p>
            <div className="mt-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2.5">In production at</p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
                className="flex flex-wrap gap-2"
              >
                {['Cashify', 'UKG', 'Generali Insurance', 'DLF'].map((client) => (
                  <motion.span
                    key={client}
                    variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="px-3.5 py-1.5 rounded-full border border-accent/40 bg-ink-800 text-accent font-display font-semibold text-xs sm:text-sm cursor-default"
                  >
                    {client}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Intro line */}
          <p className="mt-5 text-body text-sm sm:text-base leading-relaxed">
            Built and shipped an enterprise Knowledge Base + RAG system powering these voice agents —
            enabling KB upload, compile, publish, versioning, agent-level enablement, and real-time
            runtime retrieval.
          </p>

          {/* Highlights grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.07 }}
            className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.text}
                variants={itemVariants}
                className="rounded-2xl border border-ink-600 bg-ink-700/60 p-4 sm:p-5 hover:border-accent/40 transition-colors"
              >
                <span className="font-display font-bold text-lg sm:text-xl text-accent">{h.metric}</span>
                <p className="mt-2 text-muted text-xs sm:text-sm leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stack */}
          <div className="mt-7 pt-6 border-t border-ink-600">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
