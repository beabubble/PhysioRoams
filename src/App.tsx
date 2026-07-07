import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Conditions from './components/Conditions';
import Tools from './components/Tools';
import About from './components/About';
import FAQ from './components/FAQ';
import Parking from './components/Parking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'faq'>('home');

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 antialiased flex flex-col font-sans" id="app-root">
      {/* 1. Header / Navigation */}
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* 2. Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Services Section */}
            <Services />

            {/* Conditions Section */}
            <Conditions />

            {/* Tools Section (Commented out for now as requested) */}
            {/* <Tools /> */}

            {/* Contact Section (with Clinic Information) */}
            <Contact />

            {/* Where to Park Section (placed directly under clinic information) */}
            <Parking />
          </>
        )}

        {currentPage === 'about' && (
          <div className="pt-24 pb-8">
            <About />
          </div>
        )}

        {currentPage === 'faq' && (
          <div className="pt-24 pb-8">
            <FAQ />
          </div>
        )}
      </main>

      {/* 3. Footer */}
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}
