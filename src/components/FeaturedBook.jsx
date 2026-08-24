import React from 'react';
import { motion } from 'framer-motion';
import { books } from '../data/books';
import { ArrowUpRight } from 'lucide-react';
import './FeaturedBook.css';

export default function FeaturedBook() {
  // The Dirty Snowman is books[0]
  const snowman = books[0];

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15, delay: 0.1 }
    }
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15, delay: 0.2 }
    }
  };

  return (
    <section className="featured-section paper-texture">
      <div className="container featured-container">
        {/* Left Side: Mockup Image */}
        <motion.div 
          variants={leftColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="featured-visual-column"
        >
          <div className="featured-book-frame">
            <div className="book-shadow-backing"></div>
            <div className="featured-book-item">
              <div className="book-spine-shadow"></div>
              <img 
                src={snowman.cover} 
                alt="The Dirty Snowman cover" 
                className="featured-cover-img"
                loading="lazy"
              />
              <div className="book-page-edge"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Editorial Info */}
        <motion.div 
          variants={rightColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="featured-text-column"
        >
          <span className="featured-badge">Featured Story</span>
          
          <h2 className="featured-title">{snowman.title}</h2>
          
          <p className="featured-tagline">{snowman.featuredText}</p>
          
          <p className="featured-description">{snowman.longDescription}</p>

          <blockquote className="featured-quote">
            <p className="quote-text">“{snowman.quote}”</p>
            <cite className="quote-author">— {snowman.title}</cite>
          </blockquote>

          <div className="featured-cta-container">
            <a 
              href={snowman.amazonUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <span>Discover The Story</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
