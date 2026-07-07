import React from 'react';

interface FooterProps {
  onPageChange?: (page: 'home' | 'about' | 'faq') => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about' | 'faq', id?: string) => {
    e.preventDefault();
    if (onPageChange) {
      onPageChange(page);
    }
    if (id) {
      // Small delay to allow the DOM to switch page and scroll correctly
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 50);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#0071B4] text-white py-14" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Branding Logo Header from screenshot 4 */}
        <div className="text-left mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">
            PhysioRoams
          </h2>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-white/10 pb-12">
          {/* Contact Column (Cols 1-6) */}
          <div className="md:col-span-6 space-y-4 text-left">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white/70">
              CONTACT
            </h4>
            <div className="space-y-1.5 text-slate-100 font-light text-sm sm:text-base leading-relaxed">
              <p>7300 Edmonds St, Suite 800,</p>
              <p>Burnaby, BC V3N 0G8</p>
              <p className="font-semibold text-white pt-1">
                <a href="tel:+17788791975" className="hover:text-[#8FBC52] transition-colors">
                  +1 (778) 879-1975
                </a>
              </p>
              <p className="pt-0.5">
                <a
                  href="mailto:muypt@physioroams.com"
                  className="hover:text-[#8FBC52] transition-colors underline underline-offset-4"
                >
                  muypt@physioroams.com
                </a>
              </p>
            </div>
          </div>

          {/* Links Column (Cols 7-12) */}
          <div className="md:col-span-6 space-y-4 text-left">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white/70">
              LINKS
            </h4>
            <ul className="space-y-3 text-sm sm:text-base font-light">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, 'home', '#services')}
                  className="hover:text-[#8FBC52] transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="hover:text-[#8FBC52] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, 'faq')}
                  className="hover:text-[#8FBC52] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Alignment from screenshots */}
        <div className="pt-6 flex justify-between items-center text-xs text-white/80 font-normal">
          <div>
            {/* Left empty as per the screenshot 4 layout where the credit sits fully to the right */}
          </div>
          <p className="tracking-wide">
            &copy; 2026 by Marlon Wong Uy
          </p>
        </div>
      </div>
    </footer>
  );
}
