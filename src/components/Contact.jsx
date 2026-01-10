import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Github, Linkedin, Instagram, Mail, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // Send email via EmailJS
      await emailjs.sendForm(
        'ravindranathtagore.dev',  // Your EmailJS service ID
        'template_zm0kwys',        // Your EmailJS template ID
        formRef.current,
        'B4WnJfWO45lCulYLE'        // Your EmailJS public key
      );

      setStatus({
        type: 'success',
        message: 'Yooo! Message sent successfully. I\'ll slide into your inbox soon! 🚀'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: 'Bruh, something broke 😅 Try again or just DM me directly!'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Drop me a message and I'll get back to you as soon as possible!
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="mailto:rtravindra10@gmail.com" 
                className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors flex-shrink-0">
                  <Mail className="text-red-500" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">Email</p>
                  <p className="font-medium text-sm sm:text-base truncate">rtravindra10@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/ravindranathrt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                  <Linkedin className="text-blue-500" size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">LinkedIn</p>
                  <p className="font-medium text-sm sm:text-base">ravindranathrt</p>
                </div>
              </a>

              <a 
                href="https://github.com/RavindranathTagor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-gray-500/20 transition-colors flex-shrink-0">
                  <Github className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">GitHub</p>
                  <p className="font-medium text-sm sm:text-base">RavindranathTagor</p>
                </div>
              </a>
            </div>

            {/* Resume Download */}
            <div className="pt-4 sm:pt-6 border-t border-gray-800">
              <a 
                href="/Ravindranath_Tagore_Resume.pdf" 
                download
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
              >
                <FileText size={18} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-4">
              <a href="https://github.com/RavindranathTagor" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#242424] transition-colors">
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/in/ravindranathrt/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-[#242424] transition-colors">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="https://x.com/RavindraRT1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#242424] transition-colors">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/ravindra._.rt/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-[#242424] transition-colors">
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1a1a1a] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800">
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-colors text-sm sm:text-base"
                      placeholder="Your good name, legend ✨"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-colors text-sm sm:text-base"
                      placeholder="you@awesome.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-colors text-sm sm:text-base"
                    placeholder="Let's collab? Job offer? Just vibing?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Spill the tea ☕ What's on your mind?"
                  />
                </div>

                {status.message && (
                  <div className={`flex items-center gap-2 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                    {status.type === 'success' ? <CheckCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" /> : <AlertCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-sm sm:text-base">© 2026 Ravindranath Tagore. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
