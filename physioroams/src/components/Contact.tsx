import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleParkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#parking');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clinic Information */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0071B4] tracking-tight">
                Clinic Information
              </h2>
              <div className="w-16 h-1 bg-[#8FBC52] rounded-full"></div>
            </div>

            <div className="space-y-6">
              {/* Location Card */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#0071B4]/10 text-[#0071B4] rounded-xl flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#0071B4] tracking-wide uppercase">Location</h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    7300 Edmonds Street, Suite 800, Burnaby, BC
                  </p>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#0071B4]/10 text-[#0071B4] rounded-xl flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#0071B4] tracking-wide uppercase">Contact</h4>
                  <p className="text-sm sm:text-base text-gray-700 font-semibold flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a href="tel:+17788791975" className="text-[#0071B4] hover:text-[#8FBC52] transition-colors underline decoration-[#8FBC52]/30 decoration-2 underline-offset-4">
                      +1 (778) 879-1975
                    </a>
                    <span className="text-gray-300 hidden sm:inline font-normal">|</span>
                    <a href="mailto:muypt@physioroams.com" className="hover:text-[#8FBC52] transition-colors font-medium text-gray-700">
                      muypt@physioroams.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Clinic Hours Card */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#0071B4]/10 text-[#0071B4] rounded-xl flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#0071B4] tracking-wide uppercase">Clinic Hours</h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    Variable hours — see our booking system for current availability.
                  </p>
                </div>
              </div>

              {/* Verbatim elevators/lobby locked safety alert note from screenshots */}
              <div className="p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl space-y-2 mt-6">
                <div className="text-amber-800">
                  <h5 className="font-bold text-sm uppercase tracking-wide">After-Hours Access Guide</h5>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/95 leading-relaxed font-normal">
                  **The elevator and lobby are locked at 5pm on weekdays and all day on weekends. Please wait by the ground floor elevators or outside the door of 7300 Edmonds Street. Call or text <a href="tel:+17788791975" className="font-bold underline hover:text-[#0071B4]">778-879-1975</a> at your appointment time to be let in.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps (No inquiry form as requested) */}
          <div className="lg:col-span-5">
            {/* Google Maps Embed (Interactive and beautiful, taller layout) */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md h-96 relative bg-slate-100">
              <iframe
                title="PhysioRoams Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.353457106437!2d-122.9329759!3d49.2127814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677c7f07e59eb%3A0xe5567b57bfbd82da!2s7300%20Edmonds%20St%2C%20Burnaby%2C%20BC%20V3N%200G8!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
