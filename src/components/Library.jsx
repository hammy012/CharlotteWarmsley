import React from 'react';
import { motion } from 'framer-motion';
import { books } from '../data/books';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import './Library.css';

export default function Library() {
  // Page-turn / opening rotation animation variant
  const getCoverVariants = (index) => {
    const isEven = index % 2 === 0;
    return {
      hidden: { 
        opacity: 0, 
        rotateY: isEven ? -40 : 40,
        transformOrigin: isEven ? 'left center' : 'right center',
        perspective: 1000 
      },
      visible: {
        opacity: 1,
        rotateY: 0,
        transition: { type: 'spring', stiffness: 50, damping: 16, delay: 0.1 }
      }
    };
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 16, delay: 0.2 }
    }
  };

  return (
    <section id="library" className="library-section paper-texture">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">A Closer Look</span>
          <h2>The Literary Library</h2>
          <p>
            Dive deeper into the characters, pages, and key themes of each story in Charlotte Warmsley's children's collection.
          </p>
        </div>

        {/* Alternating Books Showcase */}
        <div className="library-list">
          {books.map((book, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={book.id} 
                className={`library-item-row ${isEven ? 'row-normal' : 'row-reversed'}`}
              >
                {/* Book Cover Visual with 3D Page Turn Animation */}
                <motion.div
                  variants={getCoverVariants(index)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-120px' }}
                  className="library-cover-column"
                >
                  <div className="library-book-container">
                    <div className="book-shadow-backing"></div>
                    <motion.div 
                      whileHover={{ rotateY: isEven ? -8 : 8, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="library-book-canvas"
                    >
                      <div className="book-spine-shadow"></div>
                      <img 
                        src={book.cover} 
                        alt={`${book.title} cover showcase`} 
                        className="library-cover-img"
                        loading="lazy"
                      />
                      <div className="book-page-edge"></div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Book Metadata & Description */}
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-120px' }}
                  className="library-details-column"
                >
                  <span className="lib-format-badge">{book.format}</span>
                  <h3 className="lib-book-title">{book.title}</h3>
                  <span className="lib-book-author">By {book.author}</span>
                  
                  <p className="lib-book-desc">{book.description}</p>
                  
                  <blockquote className="lib-book-quote">
                    “{book.quote}”
                  </blockquote>

                  <div className="lib-themes-list">
                    {book.themes.map((theme) => (
                      <span key={theme} className="theme-pill">
                        {theme}
                      </span>
                    ))}
                  </div>

                  <div className="lib-action-wrapper">
                    <a 
                      href={book.amazonUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-navy"
                    >
                      <BookOpen size={16} />
                      <span>{book.ctaText}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
