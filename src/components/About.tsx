import React from 'react';
import { Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Absolute decorative gradient circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8FBC52]/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#0071B4]/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0071B4] tracking-tight">
                About Marlon Wong Uy, PT
              </h2>
              <div className="w-16 h-1 bg-[#8FBC52] rounded-full"></div>
            </div>

            {/* Biography Content matching screenshots verbatim */}
            <div className="space-y-6 text-gray-700 leading-relaxed font-normal text-[15px] sm:text-base">
              <p>
                Marlon Wong Uy, PT is a seasoned physiotherapist registered in British Columbia since 2011, with more
                than than 20 years of diverse international experience across Canada, the United Kingdom, the Kingdom of
                Saudi Arabia, the Turks and Caicos Islands, and the Philippines. A proud graduate of Southern Philippines
                with a Bachelor of Science in Physical Therapy, Marlon has served in a wide range of clinical
                settings—from hospital wards and outpatient departments to rehabilitation centers and private practices.
              </p>
              <p>
                Guided by an eclectic, evidence-based approach to care, Marlon is committed to helping clients achieve
                meaningful outcomes. His approachable demeanor, deep empathy, and cultural sensitivity consistently
                earn trust and praise from those he treats.
              </p>
              <p>
                He is currently affiliated with two British Columbia local health authorities and a private long-term
                care facility, continuing to provide quality physiotherapy services to the community.
              </p>
            </div>

            {/* Trust highlights under the text */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#8FBC52]/10 rounded-lg text-[#8FBC52]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0071B4]">20+ Years</h4>
                  <p className="text-xs text-gray-500">Global Clinical Practice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#8FBC52]/10 rounded-lg text-[#8FBC52]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0071B4]">BC Registered</h4>
                  <p className="text-xs text-gray-500">In Good Standing Since 2011</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#8FBC52]/10 rounded-lg text-[#8FBC52]">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0071B4]">Evidence-Based</h4>
                  <p className="text-xs text-gray-500">Customized Healing Plans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center relative"
              id="therapist-card"
            >
              {/* Profile Image Frame */}
              <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-md border-4 border-white mb-6 relative group">
                <img
                  src="/src/assets/images/marlon.jpg"
                  alt="Marlon Wong Uy - Registered Physiotherapist"
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Identity Headers */}
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0071B4] tracking-tight">
                  Marlon Wong Uy
                </h3>
                <p className="text-sm font-bold text-[#8FBC52] tracking-wider uppercase">
                  Physiotherapist &amp; Founder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
