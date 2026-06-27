import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Metrics that count up once on scroll into view.
// `to` is the numeric target, `prefix`/`suffix` wrap it, `decimals` for floats.
const metrics = [
  { to: 50, prefix: '~', suffix: '%', decimals: 0, label: 'AI prompt size cut' },
  { to: 63.5, prefix: '', suffix: 'ms', decimals: 1, label: 'avg RAG latency' },
  { to: 900, prefix: '', suffix: '+', decimals: 0, label: 'concurrent AI calls' },
  { to: 0, prefix: '', suffix: '', decimals: 0, label: 'active call drops' },
  { to: 98.5, prefix: '', suffix: '%', decimals: 1, label: 'HOPS error reduction' },
  { to: 509, prefix: '', suffix: '+', decimals: 0, label: 'NASA teams beaten' },
];

const Counter = ({ to, prefix, suffix, decimals }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
              setValue(to * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setValue(to);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-accent tabular-nums">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Metrics = () => {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card relative overflow-hidden p-6 sm:p-10"
        >
          <div className="absolute -top-16 -right-16 w-72 h-72 glow-blob pointer-events-none" />
          <p className="eyebrow mb-6 sm:mb-8"><span className="text-subtle">//</span> impact by the numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <Counter to={m.to} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                <p className="mt-1.5 font-mono text-[11px] sm:text-xs text-muted leading-tight">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
