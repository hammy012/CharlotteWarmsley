import React from 'react';
import { motion } from 'framer-motion';
import { books } from '../data/books';
import BookCard from './BookCard';
import './BookCollection.css';

export default function BookCollection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  return (
    <section id="books" className="books-section paper-texture">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">The Collection</span>
          <h2>Stories With Something to Say</h2>
          <p>
            Discover Charlotte Warmsley's collection of thoughtful stories created to spark conversations, curiosity, confidence, and a love of reading.
          </p>
        </div>

        {/* Book Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="books-grid"
        >
          {books.map((book) => (
            <motion.div key={book.id} variants={cardVariants}>
              <BookCard book={book} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
