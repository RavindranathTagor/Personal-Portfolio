import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit, Workflow, Cloud, Database, Activity, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

const categories = [
  { icon: Code2, title: 'Languages', items: ['Java', 'Python', 'JavaScript', 'SQL'] },
  { icon: Server, title: 'Backend', items: ['FastAPI', 'REST APIs', 'WebSockets', 'Distributed Systems', 'System Design'] },
  { icon: BrainCircuit, title: 'AI / LLM Systems', items: ['Knowledge Base Architecture', 'Prompt Optimization', 'LLM Observability', 'STT / TTS', 'AI Voice Agents'] },
  { icon: Workflow, title: 'Workflows', items: ['Temporal', 'Celery', 'Activity Workers', 'Retry Handling', 'Circuit Breakers'] },
  { icon: Cloud, title: 'Cloud / DevOps', items: ['AWS EC2', 'AWS RDS', 'Auto Scaling', 'ALB', 'Docker', 'Nginx', 'systemd', 'CI/CD'] },
  { icon: Database, title: 'Databases / Cache', items: ['PostgreSQL', 'Redis', 'Supabase', 'Query Debugging'] },
  { icon: Activity, title: 'Monitoring', items: ['Prometheus', 'Grafana', 'Loki', 'Custom Metrics', 'Latency Tracking'] },
  { icon: ShieldCheck, title: 'Security', items: ['JWT Revocation', 'Audit Logging', 'Idle Timeout', 'Session Control'] },
];

const extras = ['React', 'Git', 'Figma', 'Flask', 'Machine Learning', 'YOLOv8'];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="tech stack"
          title="Tools I build with"
          subtitle="From voice pipelines to workflow orchestration to the dashboards that watch it all."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {categories.map(({ icon: Icon, title, items }) => (
            <motion.div key={title} variants={cardVariants} className="bento-card p-5 sm:p-6 group hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-accent" size={18} />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-fg">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="tag text-[11px] sm:text-xs">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extras row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-wrap items-center gap-2"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted mr-1">also:</span>
          {extras.map((s) => (
            <span key={s} className="tag text-[11px] sm:text-xs">{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
