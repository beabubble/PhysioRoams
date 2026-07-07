import React from 'react';
import { motion } from 'framer-motion';

export default function Conditions() {
  const conditions = [
    {
      id: 'neck',
      title: 'Neck Pain',
      image: '/src/assets/images/neck pain.png',
    },
    {
      id: 'shoulder',
      title: 'Shoulder Pain',
      image: '/src/assets/images/shoulder pain.png',
    },
    {
      id: 'back',
      title: 'Back Pain',
      image: '/src/assets/images/back pain.png',
    },
    {
      id: 'posture',
      title: 'Posture Issues',
      image: '/src/assets/images/posture issues.png',
    },
  ];

  return (
    <section className="bg-[#0071B4] text-white py-16 relative overflow-hidden" id="conditions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center tracking-tight mb-12 uppercase text-white">
          Conditions Treated
        </h2>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {conditions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4 group cursor-default"
            >
              {/* Image without visual container */}
              <div className="w-28 h-28 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title only */}
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold tracking-wide group-hover:text-[#8FBC52] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
