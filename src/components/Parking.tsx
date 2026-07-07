import React from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, ArrowRightCircle } from 'lucide-react';

export default function Parking() {
  const images = [
    {
      id: 'building',
      title: '1. Building Exterior',
      desc: 'Edmonds Centre for Healthy Communities corner view',
      src: '/images/far-ext.jpg',
    },
    {
      id: 'ramp',
      title: '2. Parking Entrance',
      desc: 'Ramp down to the secure underground parking gate',
      src: '/images/close-ext.jpg',
    },
    {
      id: 'inside',
      title: '3. Follow Clinic Signage',
      desc: 'park at level two',
      src: '/images/int.jpg',
    },
  ];

  return (
    <section className="bg-[#0071B4] text-white py-16 relative overflow-hidden" id="parking">
      {/* Decorative background wheel */}
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full border-4 border-dashed border-white/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            Where to Park
          </h2>
          <div className="w-16 h-1 bg-[#8FBC52] mx-auto rounded-full"></div>
        </div>

        {/* 3-Image Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-3 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors group"
            >
              {/* Image Frame */}
              <div className="h-56 w-full rounded-xl overflow-hidden relative mb-4 shadow-md bg-slate-950">
                <img
                  src={img.src}
                  alt={img.desc}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Image Sequence Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#8FBC52] text-white text-xs font-bold rounded-full shadow">
                  Step {index + 1}
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-1 text-left px-1 pb-2">
                <h4 className="text-base font-bold text-white group-hover:text-[#8FBC52] transition-colors flex items-center gap-1.5">
                  {img.title}
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed font-light">
                  {img.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Subtitle */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <ArrowRightCircle className="w-5 h-5 text-[#8FBC52]" />
          <p className="text-base sm:text-lg font-bold tracking-wide text-white uppercase">
            Park at Level 2, follow the arrow in the last image
          </p>
        </div>
      </div>
    </section>
  );
}
