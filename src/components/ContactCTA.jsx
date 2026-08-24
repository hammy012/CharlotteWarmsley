import React from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './ContactCTA.css';

export default function ContactCTA() {
  const handleScrollToBooks = (e) => {
    e.preventDefault();
    const el = document.getElementById('books');
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="contact" className="cta-sections-wrapper">
      {/* Stay Connected Section */}
      <section className="contact-section paper-texture">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="contact-card"
          >
            <div className="contact-icon-wrapper">
              <Mail size={32} className="contact-mail-icon" />
            </div>
            
            <h2 className="contact-title">Stay Connected</h2>
            
            <p className="contact-description">
              Want to hear about new stories, upcoming books, school visits, or author updates? Get in touch directly with Charlotte Warmsley.
            </p>

            <div className="contact-email-box">
              <span className="email-label">Official Email:</span>
              <a href="mailto:warmsleycharlotte@gmail.com" className="email-link">
                warmsleycharlotte@gmail.com
              </a>
            </div>

            <div className="contact-actions">
              <a 
                href="mailto:warmsleycharlotte@gmail.com" 
                className="btn btn-navy contact-btn"
              >
                <span>Email Charlotte</span>
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Find Your Next Story Centered Section */}
      <section className="final-cta-section paper-texture">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="final-cta-content"
          >
            <div className="final-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Next Adventure Awaits</span>
            </div>

            <h2 className="final-title">Find Your Next Story</h2>
            
            <p className="final-description">
              Explore Charlotte Warmsley's books and discover thoughtful stories made to inspire young minds and warm young hearts.
            </p>

            <div className="final-actions">
              <a 
                href="#books" 
                onClick={handleScrollToBooks} 
                className="btn btn-primary final-btn"
              >
                <span>Explore the Books</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
