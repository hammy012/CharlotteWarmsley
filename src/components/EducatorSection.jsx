import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessagesSquare, BookOpen, ArrowRight } from 'lucide-react';
import './EducatorSection.css';

export default function EducatorSection() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  const featureItems = [
    {
      icon: <HelpCircle size={24} className="edu-item-icon" />,
      title: 'Open-Ended Questions',
      description: 'Encourage children to look closely, think creatively, notice small illustrative details, and share their own unique ideas.'
    },
    {
      icon: <MessagesSquare size={24} className="edu-item-icon" />,
      title: 'Meaningful Conversations',
      description: 'Use the character choices as gentle starting points for classroom discussions about kindness, confidence, acceptance, and bullying.'
    },
    {
      icon: <BookOpen size={24} className="edu-item-icon" />,
      title: 'Learning Through Storytelling',
      description: 'Make classroom reading engaging and memorable through character-driven situations that mirror kids\' daily experiences.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="educators" className="educators-section paper-texture">
      <div className="container educators-container">
        {/* Left Side: General Info */}
        <div className="educators-text-column">
          <span className="educators-eyebrow">Educator Resources</span>
          <h2 className="educators-title">Stories for the Classroom, Too</h2>
          <p className="educators-description">
            Charlotte Warmsley's children's stories are thoughtfully structured to serve as wonderful conversation starters for teachers, parents, librarians, and educators. They help children observe, ask questions, express ideas, and explore complex emotional themes in an age-appropriate, gentle way.
          </p>
          <div className="educators-cta-wrapper">
            <a 
              href="#books" 
              onClick={(e) => handleScrollTo(e, 'books')}
              className="btn btn-primary"
            >
              <span>Explore the Books</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: Features List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="educators-features-column"
        >
          {featureItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="educator-feature-card"
            >
              <div className="edu-icon-container">
                {item.icon}
              </div>
              <div className="edu-content-container">
                <h3 className="edu-card-title">{item.title}</h3>
                <p className="edu-card-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
