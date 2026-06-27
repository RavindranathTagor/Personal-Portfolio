import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Github, Linkedin, Instagram, Mail, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);
      if (error) throw error;

      await emailjs.sendForm(
        'ravindranathtagore.dev',
        'template_zm0kwys',
        formRef.current,
        'B4WnJfWO45lCulYLE'
      );

      setStatus({ type: 'success', message: "Yooo! Message sent. I'll slide into your inbox soon! 🚀" });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Bruh, something broke 😅 Try again or just DM me directly!' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-ink-700 border border-ink-600 rounded-xl text-fg placeholder-subtle font-mono text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors';

  return (
    <section id="contact" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="absolute bottom-0 left-1/3 w-[34rem] h-[34rem] glow-blob pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow="contact"
          title="Let's build something"
          subtitle="Open to full-time roles, collabs, or just a good engineering conversation."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bento-card p-6 sm:p-8 flex flex-col"
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl text-fg mb-3">Get in touch</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Have a role, project, or idea in mind? Drop a message and I&apos;ll get back to you fast.
            </p>

            <div className="space-y-3 flex-grow">
              {[
                { href: 'mailto:rtravindra10@gmail.com', Icon: Mail, label: 'Email', value: 'rtravindra10@gmail.com' },
                { href: 'https://www.linkedin.com/in/ravindranathrt/', Icon: Linkedin, label: 'LinkedIn', value: 'ravindranathrt' },
                { href: 'https://github.com/RavindranathTagor', Icon: Github, label: 'GitHub', value: 'RavindranathTagor' },
              ].map(({ href, Icon, label, value }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-11 h-11 bg-ink-700 border border-ink-600 rounded-xl flex items-center justify-center group-hover:border-accent/50 transition-colors flex-shrink-0">
                    <Icon className="text-accent" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-muted">{label}</p>
                    <p className="text-body text-sm truncate group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a href="/Ravindranath_Tagore_Resume.pdf" download className="btn-accent mt-6 w-full">
              <FileText size={16} /> Download Resume
            </a>

            <div className="flex gap-3 mt-5 pt-5 border-t border-ink-600">
              {[
                { href: 'https://github.com/RavindranathTagor', Icon: Github },
                { href: 'https://www.linkedin.com/in/ravindranathrt/', Icon: Linkedin },
                { href: 'https://x.com/RavindraRT1', Icon: XIcon },
                { href: 'https://www.instagram.com/ravindra._.rt/', Icon: Instagram },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-ink-700 border border-ink-600 rounded-lg flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bento-card p-6 sm:p-8">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your good name, legend ✨" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Your Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@awesome.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="Job offer? Let's collab? Just vibing?" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Spill the tea ☕ What's on your mind?" />
                </div>

                {status.message && (
                  <div className={`flex items-center gap-2 p-3 rounded-xl text-sm ${status.type === 'success' ? 'bg-accent/10 text-accent' : 'bg-red-500/10 text-red-400'}`}>
                    {status.type === 'success' ? <CheckCircle size={18} className="flex-shrink-0" /> : <AlertCircle size={18} className="flex-shrink-0" />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="btn-accent w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-onaccent/30 border-t-onaccent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-ink-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="font-mono text-xs text-subtle">© 2026 Ravindranath Tagore — built with React + Tailwind</p>
          <p className="font-mono text-xs text-subtle">Bengaluru, India · <span className="text-accent">open to work</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
