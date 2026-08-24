import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookCollection from './components/BookCollection';
import FeaturedBook from './components/FeaturedBook';
import AboutAuthor from './components/AboutAuthor';
import Themes from './components/Themes';
import EducatorSection from './components/EducatorSection';
import WhyTheseStoriesMatter from './components/WhyTheseStoriesMatter';
import Library from './components/Library';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BookCollection />
        <FeaturedBook />
        <AboutAuthor />
        <Themes />
        <EducatorSection />
        <WhyTheseStoriesMatter />
        <Library />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
