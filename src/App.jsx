import React from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import HeroSection from './components/HeroSection';
import Marquee from './components/Marquee';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import HeritageGallery from './components/HeritageGallery';
import MediaGallery from './components/MediaGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useMotion';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        <PortfolioSection />
        <HeritageGallery />
        <MediaGallery />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
