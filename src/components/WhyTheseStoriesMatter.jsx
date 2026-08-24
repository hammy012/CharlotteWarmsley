import React from 'react';
import { motion } from 'framer-motion';
import './WhyTheseStoriesMatter.css';

export default function WhyTheseStoriesMatter() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  const statements = [
    { title: 'Be Kind.', subtitle: 'Empathy & Warmth', desc: 'Understanding others is where connections start.' },
    { title: 'Be Curious.', subtitle: 'Questions & Memory', desc: 'Exploring details builds a lifetime of learning.' },
    { title: 'Be Yourself.', subtitle: 'Confidence & Pride', desc: 'Accepting who you are is your greatest strength.' }
  ];

  return (
    <section className="matter-section paper-texture">
      <div className="container">
        {/* Core Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="matter-header"
        >
          <h2>Little Stories. Big Conversations.</h2>
          <p className="matter-sub">
            A good children's book can entertain a child while quietly teaching something they may carry with them for years.
          </p>
        </motion.div>

        {/* Massive Statements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="statements-grid"
        >
          {statements.map((stmt, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="statement-card"
            >
              <span className="stmt-index">0{idx + 1}</span>
              <h3 className="stmt-title">{stmt.title}</h3>
              <h4 className="stmt-subtitle">{stmt.subtitle}</h4>
              <p className="stmt-desc">{stmt.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
