import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile, Users, Sparkles, BookOpen, GraduationCap } from 'lucide-react';
import './Themes.css';

export default function Themes() {
  const themeItems = [
    {
      icon: <Heart size={28} className="theme-icon-svg" />,
      title: 'Kindness',
      description: 'Stories that encourage children to understand and care about others.'
    },
    {
      icon: <Smile size={28} className="theme-icon-svg" />,
      title: 'Confidence',
      description: 'Helping young readers discover their own value and build inner strength.'
    },
    {
      icon: <Users size={28} className="theme-icon-svg" />,
      title: 'Acceptance',
      description: 'Celebrating individuality and being comfortable with who you are.'
    },
    {
      icon: <Sparkles size={28} className="theme-icon-svg" />,
      title: 'Imagination',
      description: 'Opening the door to curiosity, creative thinking, and playful wonder.'
    },
    {
      icon: <BookOpen size={28} className="theme-icon-svg" />,
      title: 'Reading',
      description: 'Encouraging children to rediscover the joy and tactile magic of physical books.'
    },
    {
      icon: <GraduationCap size={28} className="theme-icon-svg" />,
      title: 'Learning',
      description: 'Stories that invite observations, open-ended questions, and meaningful discussions.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 14 }
    }
  };

  return (
    <section className="themes-section paper-texture">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Core Values</span>
          <h2>More Than Just Stories</h2>
          <p>
            Explore the meaningful, positive themes woven into Charlotte Warmsley's children's books, designed to stimulate both emotional and intellectual development.
          </p>
        </div>

        {/* Themes Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="themes-grid"
        >
          {themeItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="theme-card"
            >
              <div className="theme-card-icon-container">
                {item.icon}
              </div>
              <h3 className="theme-card-title">{item.title}</h3>
              <p className="theme-card-description">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
