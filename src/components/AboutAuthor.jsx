import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Compass } from 'lucide-react';
import portraitPlaceholder from '../assets/author-portrait-placeholder.jpg';
import './AboutAuthor.css';

export default function AboutAuthor() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  return (
    <section id="about" className="about-section paper-texture">
      <div className="container about-container">
        {/* Left Side: Frame & Handwritten Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="about-visual-column"
        >
          <div className="author-portrait-frame">
            <div className="author-frame-border"></div>
            <img 
              src={portraitPlaceholder} 
              alt="Charlotte Warmsley writing room watercolor illustration" 
              className="author-portrait-img"
              loading="lazy"
            />
          </div>
          
          <div className="handwritten-quote-container">
            <p className="handwritten-quote">
              “Every child deserves a story that helps them feel seen.”
            </p>
          </div>
        </motion.div>

        {/* Right Side: Narrative */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="about-text-column"
        >
          <motion.span variants={itemVariants} className="about-eyebrow">
            Meet the Author
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="about-title">
            Charlotte Warmsley
          </motion.h2>
          
          <motion.p variants={itemVariants} className="about-description">
            Charlotte Warmsley creates children's stories that encourage young readers to think, question, imagine, and see the world with kindness. Her stories explore meaningful childhood experiences through memorable characters and gentle storytelling.
          </motion.p>

          {/* Highlights Box */}
          <motion.div variants={itemVariants} className="about-highlight-card">
            <div className="highlight-icon-wrapper">
              <Sparkles size={20} className="highlight-icon" />
            </div>
            <p className="highlight-text">
              Stories that encourage children to be curious, confident, kind, and comfortable being themselves.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-philosophy-grid">
            <div className="philosophy-item">
              <Heart size={18} className="philosophy-icon" />
              <div>
                <h4>Kindness First</h4>
                <p>Emphasizing empathy in every character's decision.</p>
              </div>
            </div>

            <div className="philosophy-item">
              <Compass size={18} className="philosophy-icon" />
              <div>
                <h4>Curiosity & Wonder</h4>
                <p>Asking questions that open paths to learning.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
