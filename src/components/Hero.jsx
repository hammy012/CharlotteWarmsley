import React from 'react';
import { BookOpen, User, Star, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import dirtySnowmanCover from '../assets/dirty-snowman.jpeg';
import foloppyCover from '../assets/foloppy.jpeg';
import peekCover from '../assets/peek.jpeg';
import './Hero.css';

export default function Hero() {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  const floatAnimation = (delay) => ({
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: delay
      }
    }
  });

  return (
    <header id="home" className="hero-section paper-texture">
      {/* Decorative elements */}
      <div className="hero-decorations">
        <motion.div 
          animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="decor-cloud decor-cloud-1"
        >
          <Cloud size={40} className="svg-cloud" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="decor-cloud decor-cloud-2"
        >
          <Cloud size={30} className="svg-cloud" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="decor-star star-1"
        >
          <Star size={18} fill="#C5A059" color="#C5A059" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="decor-star star-2"
        >
          <Star size={14} fill="#85A9C0" color="#85A9C0" />
        </motion.div>

        <motion.div 
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="decor-star star-3"
        >
          <Star size={10} fill="#C5A059" color="#C5A059" />
        </motion.div>
      </div>

      <div className="container hero-container">
        {/* Left Side: Author Text Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-text-column"
        >
          <motion.span variants={itemVariants} className="hero-eyebrow">
            Children's Author
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Stories That Help <br />
            <span className="text-highlight">Young Hearts Grow</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description">
            Meet Charlotte Warmsley, author of thoughtful children's stories about kindness, confidence, acceptance, imagination, and the magic of reading.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <a
              href="#books"
              onClick={(e) => handleScrollTo(e, 'books')}
              className="btn btn-primary btn-hero-primary"
            >
              <BookOpen size={20} />
              Explore the Books
            </a>
            
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, 'about')}
              className="btn btn-secondary btn-hero-secondary"
            >
              <User size={20} />
              Meet Charlotte
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Stacked Book Display */}
        <div className="hero-visual-column">
          <div className="book-composition">
            {/* Background Book Left: Peek */}
            <motion.div 
              {...floatAnimation(0.6)}
              whileHover={{ scale: 1.03, rotate: -4 }}
              className="book-stack-item book-peek"
            >
              <div className="book-spine-shadow"></div>
              <img 
                src={peekCover} 
                alt='"Peek" the Forgotten Book cover' 
                className="book-cover"
                loading="eager"
              />
              <div className="book-page-edge"></div>
            </motion.div>

            {/* Background Book Right: Foloppy */}
            <motion.div 
              {...floatAnimation(1.2)}
              whileHover={{ scale: 1.03, rotate: 6 }}
              className="book-stack-item book-foloppy"
            >
              <div className="book-spine-shadow"></div>
              <img 
                src={foloppyCover} 
                alt="Mr. Foloppy and His Floppy Hat book cover" 
                className="book-cover"
                loading="eager"
              />
              <div className="book-page-edge"></div>
            </motion.div>

            {/* Foreground Main Book: Dirty Snowman */}
            <motion.div 
              {...floatAnimation(0)}
              whileHover={{ scale: 1.04, rotate: 1, zIndex: 12 }}
              className="book-stack-item book-snowman"
            >
              <div className="book-spine-shadow"></div>
              <img 
                src={dirtySnowmanCover} 
                alt="The Dirty Snowman book cover" 
                className="book-cover"
                loading="eager"
              />
              <div className="book-page-edge"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
