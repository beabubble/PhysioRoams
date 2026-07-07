import React from 'react';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Tools() {
  const handleCall = () => {
    window.location.href = 'tel:+17788791975';
  };

  const tools = [
    {
      id: 'iastm',
      title: 'IASTM',
      subtitle: 'Instrument Assisted Soft Tissue Mobilization',
      imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 'braces',
      title: 'KNEE BRACES',
      subtitle: 'Orthopedic Bracing & Joint Alignment Support',
      imageUrl: 'https://images.unsplash.com/photo-1552156500-03d1c164227f?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Collage & Small Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            {/* Left Column of collage: Stack of 2 generic therapy images */}
            <div className="col-span-5 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-44 rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400"
                  alt="Treadmill training"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="h-44 rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400"
                  alt="Balance ball core physical training"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Column of collage: The named custom tools (IASTM & Knee Bracing) */}
            <div className="col-span-7 space-y-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center hover:shadow-md transition-shadow"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={tool.imageUrl}
                      alt={tool.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#0071B4] tracking-wider uppercase">
                      {tool.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                      {tool.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Text & Background Image Overlay Column */}
          <div className="lg:col-span-6 relative h-[450px] rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/src/assets/images/tools_techniques_1783372790675.jpg"
              alt="Physiotherapy tools and modern treatment techniques"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Dark glass-morphism overlay container for the CTA content */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-8 sm:p-12 flex flex-col justify-end items-start space-y-6">
              <div className="space-y-3 text-left">
                <span className="text-[#8FBC52] text-xs font-bold uppercase tracking-widest block">
                  Advanced Clinic Assets
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Tools &amp; <br />
                  Techniques
                </h3>
              </div>

              {/* Green bordered call button */}
              <button
                id="tools-call-btn"
                onClick={handleCall}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-[#8FBC52] text-white hover:bg-white hover:text-[#0071B4] rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#8FBC52] group-hover:text-current" />
                HAVE QUESTIONS? CALL US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
