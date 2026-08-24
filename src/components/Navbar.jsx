import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link detection
      const sections = ['home', 'about', 'books', 'educators', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 80; // height of navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Books', target: 'books' },
    { label: 'For Educators', target: 'educators' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="navbar-logo">
            <span>Charlotte Warmsley</span>
            <span className="logo-sub">Children's Author</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.target}>
                <a
                  href={`#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`nav-link ${activeSection === link.target ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-cta-desktop">
            <a href="#books" onClick={(e) => handleNavClick(e, 'books')} className="btn btn-primary btn-sm-nav">
              <BookOpen size={16} />
              Explore Books
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="navbar-mobile-drawer"
          >
            <ul className="navbar-mobile-links">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => handleNavClick(e, link.target)}
                    className={`nav-link ${activeSection === link.target ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mobile-cta-li">
                <a
                  href="#books"
                  onClick={(e) => handleNavClick(e, 'books')}
                  className="btn btn-primary mobile-cta-btn"
                >
                  <BookOpen size={18} />
                  Explore Books
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
