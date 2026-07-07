import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';

export default function Services() {
  // Use our custom generated image for Manual Therapy, and curated free medical images for the others
  const services: Service[] = [
    {
      id: 'manual',
      title: 'MANUAL THERAPY',
      description: 'Hands-on mobilization and manipulation techniques for joints, muscles, and soft tissues to relieve stiffness and pain.',
      imageUrl: '/images/manual-therapy.png',
    },
    {
      id: 'exercise',
      title: 'EXERCISE REHABILITATION',
      description: 'Tailored exercise programs focused on strength, flexibility, and stability to rebuild your body and prevent reinjury.',
      imageUrl: '/images/exercise-rehab.png',
    },
    {
      id: 'sports',
      title: 'SPORTS PHYSIOTHERAPY',
      description: 'Specialized injury diagnostics, athletic training, and safe return-to-sport planning for athletes of all performance levels.',
      imageUrl: '/images/sports-physio.png',
    },
    {
      id: 'post-op',
      title: 'POST OPERATIVE CARE',
      description: 'Structured, clinical recovery plans following orthopedic surgeries to restore optimal range of motion and joint stability.',
      imageUrl: '/images/post-op.png',
    },
    {
      id: 'biomechanics',
      title: 'BIOMECHANICS ASSESSMENT',
      description: 'Detailed analysis of walking, running, and athletic motion to pinpoint muscular imbalances, joint stresses, and efficiency gaps.',
      imageUrl: '/images/biomechanics.jpg',
    },
    {
      id: 'geriatric',
      title: 'GERIATRIC PHYSIOTHERAPY',
      description: 'Gentle, effective protocols for older adults to improve balance, bone density, and overall confidence in daily physical mobility.',
      imageUrl: '/images/geriatric.png',
    },
    {
      id: 'orthotics',
      title: 'ORTHOTICS PRESCRIPTION',
      description: 'Expert foot and gait analysis followed by custom fitting of orthotic insoles to restore foundational alignment.',
      imageUrl: '/images/orthotics.png',
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
      {/* Wave pattern matching the background in screenshot 2 */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg
          className="absolute -right-10 bottom-0 w-[50%] h-[80%] text-[#0071B4]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,250 C 100,100 200,400 300,250 C 400,100 500,300 500,250"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,270 C 100,120 200,420 300,270 C 400,120 500,320 500,270"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5 5"
          />
          <path
            d="M 0,230 C 100,80 200,380 300,230 C 400,80 500,280 500,230"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 0,210 C 100,60 200,360 300,210 C 400,60 500,260 500,210"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title section - extends full width to utilize the layout beautifully */}
        <div className="w-full mb-16 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0071B4] tracking-tight leading-snug">
            Comprehensive treatment for injuries, pain, and prevention—delivered with care, precision, and experience.
          </h2>
          <div className="w-16 h-1 bg-[#8FBC52] mt-4 rounded-full"></div>
        </div>

        {/* Dynamic Service Grid (7 items) - cards are informational and non-clickable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm flex flex-col justify-between select-none ${
                index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Image Section (Static) */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0071B4] tracking-wide">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule a Treatment Button linking to Embodia patient portal */}
        <div className="flex justify-center">
          <a
            id="services-schedule-btn"
            href="https://ptroams.embodiaapp.com/patient_portal"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-[#8FBC52] hover:bg-[#8FBC52] hover:text-white text-[#0071B4] rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 shadow-sm hover:shadow-md uppercase flex items-center justify-center gap-2 text-center"
          >
            SCHEDULE A TREATMENT
          </a>
        </div>
      </div>
    </section>
  );
}
