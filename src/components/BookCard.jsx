import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import './BookCard.css';

export default function BookCard({ book }) {
  const { title, format, amazonUrl, description, themes, rating, ctaText, cover } = book;

  return (
    <motion.article 
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="book-card"
    >
      {/* Book Cover Showcase */}
      <div className="book-card-image-container">
        <div className="book-card-spine"></div>
        <img 
          src={cover} 
          alt={`${title} Book Cover`} 
          className="book-card-cover-img"
          loading="lazy"
        />
        <div className="book-card-page-line"></div>
        
        {rating && (
          <span className="book-card-rating-badge">
            <Star size={12} fill="#C5A059" color="#C5A059" className="star-icon" />
            {rating}
          </span>
        )}
      </div>

      {/* Book Info */}
      <div className="book-card-content">
        <div className="book-card-meta">
          <span className="book-card-format">{format}</span>
        </div>

        <h3 className="book-card-title">{title}</h3>
        
        <p className="book-card-description">{description}</p>
        
        {/* Themes tags */}
        <div className="book-card-themes">
          {themes.map((theme) => (
            <span key={theme} className="theme-badge">
              {theme}
            </span>
          ))}
        </div>

        {/* Amazon CTA Button */}
        <a 
          href={amazonUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-navy book-card-cta"
        >
          <span>{ctaText}</span>
          <ArrowUpRight size={16} className="arrow-icon" />
        </a>
      </div>
    </motion.article>
  );
}
