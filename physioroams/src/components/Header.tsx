import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPage: 'home' | 'about' | 'faq';
  onPageChange: (page: 'home' | 'about' | 'faq') => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', page: 'home' as const },
    { name: 'Contact & Hours', href: '#contact', page: 'home' as const },
    { name: 'About', href: '#about', page: 'about' as const },
    { name: 'FAQ', href: '#faq', page: 'faq' as const },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onPageChange(link.page);

    setTimeout(() => {
      try {
        const element = document.querySelector(link.href);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } catch (err) {
        console.error('Invalid selector scroll target:', link.href, err);
      }
    }, 100);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onPageChange('home');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FFFFFF] ${
        isScrolled ? 'shadow-md py-4' : 'border-b border-gray-100 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-4 group focus:outline-none"
            id="logo-link"
          >
            {/* PR-Icon Logo Image */}
            <div className="w-12 h-12 relative rounded-full overflow-hidden flex items-center justify-center border border-gray-100 bg-white shadow-sm transition-transform group-hover:scale-105">
              <img
                src="/src/assets/images/PR-Icon.jpg"
                alt="PhysioRoams Logo Icon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0071B4] transition-colors group-hover:text-[#8FBC52]">
              PhysioRoams
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page && (link.page !== 'home' || link.href === '#');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-[17px] sm:text-[18px] font-bold transition-colors duration-200 relative py-1 group ${
                    isActive ? 'text-[#8FBC52]' : 'text-[#0071B4] hover:text-[#8FBC52]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#8FBC52] transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}
          </nav>

          {/* Call to Action Booking Button */}
          <div className="hidden md:block">
            <a
              id="desktop-book-btn"
              href="https://ptroams.embodiaapp.com/patient_portal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border-2 border-[#8FBC52] text-[#0071B4] hover:text-white hover:bg-[#8FBC52] rounded-full font-bold text-[16px] sm:text-[17px] tracking-wide transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              BOOK NOW
            </a>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0071B4] hover:text-[#8FBC52] p-2 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-3 pb-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page && (link.page !== 'home' || link.href === '#');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`block px-4 py-2.5 text-base font-semibold rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-[#8FBC52]/10 text-[#8FBC52]' 
                        : 'text-[#0071B4] hover:bg-[#8FBC52]/5 hover:text-[#8FBC52]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 px-4">
                <a
                  id="mobile-book-btn"
                  href="https://ptroams.embodiaapp.com/patient_portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#8FBC52] hover:bg-[#8FBC52]/90 text-white rounded-full font-bold text-center tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  BOOK APPOINTMENT
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
