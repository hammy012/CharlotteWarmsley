import React from 'react';
import { Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
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

  return (
    <footer className="footer paper-texture">
      <div className="container footer-container">
        {/* Left Side: Brand info */}
        <div className="footer-brand-column">
          <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="footer-logo">
            Charlotte Warmsley
          </a>
          <span className="footer-logo-sub">Children's Author</span>
          <p className="footer-bio">
            Thoughtful stories made to spark conversations, curiosity, confidence, and a love of reading.
          </p>
        </div>

        {/* Center: Directory links */}
        <div className="footer-nav-column">
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-links">
            <li>
              <a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>
                About Charlotte
              </a>
            </li>
            <li>
              <a href="#books" onClick={(e) => handleScrollTo(e, 'books')}>
                Books
              </a>
            </li>
            <li>
              <a href="#educators" onClick={(e) => handleScrollTo(e, 'educators')}>
                For Educators
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact info */}
        <div className="footer-contact-column">
          <h4 className="footer-heading">Get in Touch</h4>
          <p className="footer-contact-text">
            For inquiries, school visits, or book requests:
          </p>
          <a href="mailto:warmsleycharlotte@gmail.com" className="footer-email-link">
            <Mail size={16} />
            <span>warmsleycharlotte@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; 2026 Charlotte Warmsley. All rights reserved.
          </p>
          <p className="footer-credits">
            Designed for young hearts & minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
