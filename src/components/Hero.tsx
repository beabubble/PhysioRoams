import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Path to our newly generated professional physiotherapy session image
  const heroBg = '/images/hero.png';

  const handleCall = () => {
    window.location.href = 'tel:+17788791975';
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-[85vh] lg:min-h-[80vh] flex items-center pt-24 bg-gray-900 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional hands-on physiotherapy treatment"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transform motion-safe:animate-[pulse_10s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Deep dual gradient overlay for optimal text contrast and brand color integration */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Headline Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Your Recovery <br className="hidden sm:inline" />
                is in <span className="text-white relative">Expert Hands</span>
              </h1>
              {/* Green decorative underline using standardized brand green #8FBC52 */}
              <div className="w-24 h-2 bg-[#8FBC52] rounded-full mt-2"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl.5 text-slate-200 max-w-xl font-medium leading-relaxed"
            >
              Care that helps you move better, feel better, and live better.
            </motion.p>
          </div>

          {/* Quick Consultation Action Box Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full max-w-md bg-slate-950/65 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-2xl"
              id="hero-action-card"
            >
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white pt-2">
                    Free 10-minute phone consultation
                  </h3>
                </div>

                {/* Call Now button: white background, brand blue text, brand green border, hover turns green */}
                <button
                  id="hero-call-btn"
                  onClick={handleCall}
                  className="w-full py-3.5 bg-white border-2 border-[#8FBC52] hover:bg-[#8FBC52] hover:text-white hover:border-[#8FBC52] text-[#0071B4] rounded-full font-bold text-base tracking-wide shadow-md transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  CALL NOW
                </button>
              </div>

              {/* "or" divider with lines */}
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <div className="h-[1px] bg-slate-700 flex-grow"></div>
                <span className="text-sm font-semibold uppercase tracking-wider">or</span>
                <div className="h-[1px] bg-slate-700 flex-grow"></div>
              </div>

              {/* Book Appointment button linking to external patient portal */}
              <a
                id="hero-book-btn"
                href="https://ptroams.embodiaapp.com/patient_portal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 border-2 border-white/80 hover:bg-[#8FBC52] hover:border-[#8FBC52] text-white rounded-full font-bold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                <Calendar className="w-5 h-5" />
                BOOK APPOINTMENT
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
