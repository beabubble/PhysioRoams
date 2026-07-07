import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: { id: string; question: string; answer: React.ReactNode }[] = [
    {
      id: 'book-appointment',
      question: 'How do I book an appointment?',
      answer: (
        <>
          You can book your appointments online through our Patient Portal at{' '}
          <a
            href="https://ptroams.embodiaapp.com/patient_portal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0071B4] hover:text-[#8FBC52] font-semibold underline transition-colors"
          >
            https://ptroams.embodiaapp.com/patient_portal
          </a>
          . Simply register or log in, select the date and time that works best for you, and confirm your booking instantly.
        </>
      ),
    },
    {
      id: 'get-to-clinic',
      question: 'How do I get to the clinic and where do I park?',
      answer:
        'Our clinic is located at 7300 Edmonds Street, Suite 800, Burnaby, BC. We offer secure underground parking in the building. Drive down the ramp to the underground parking, go to Level 2, and park in any designated Health Clinic stall.',
    },
    {
      id: 'conditions-treated',
      question: 'What conditions do you treat?',
      answer:
        'We treat a neck, back, and shoulder pain, among other conditions. Please contact us through phone to see if we can help with your specific concern.',
    },
    {
      id: 'first-visit',
      question: 'What should I expect during my first physiotherapy session?',
      answer:
        'Your initial session is a comprehensive 1-hour assessment. Marlon will discuss your medical history, current symptoms, and goals for treatment. He may also perform a physical examination to better understand your condition. Based on this assessment, a personalized treatment plan will be created.',
    },
    {
      id: 'referral',
      question: 'Do I need a doctor’s referral to book an appointment?',
      answer:
        'No, physiotherapists are primary care practitioners in British Columbia, meaning you do not need a physician’s referral to receive care. However, some private extended health insurance plans may require a doctor’s note for reimbursement. Please check with your provider.',
    },
    {
      id: 'billing',
      question: 'Do you offer direct billing to extended health insurance?',
      answer:
        'Yes! We offer direct billing to most major insurance providers in BC, including Pacific Blue Cross, Canada Life, Sun Life, Manulife, and others. We do our best to process billing on your behalf at the time of your appointment.',
    },
    {
      id: 'what-to-wear',
      question: 'What should I wear to my appointment?',
      answer:
        'Please wear comfortable, loose-fitting athletic clothing that allows easy movement. If we are examining a lower limb (knee/ankle), shorts are highly recommended. For shoulder issues, a tank top or loose t-shirt is ideal.',
    },
    {
      id: 'locked-doors',
      question: 'Why are the lobby and elevator doors locked after hours?',
      answer:
        'To ensure building security, the elevator and main lobby doors of the Edmonds Centre are locked at 5:00 PM on weekdays and all day on weekends. If your appointment is during these times, please wait near the main ground elevators or entrance doors and call/text us at 778-879-1975 at your exact appointment time to be let in.',
    },
  ];

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0071B4] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#8FBC52] mx-auto rounded-full"></div>
        </div>

        {/* Accordions */}
        <div className="space-y-4" id="faq-container">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#0071B4]">
                    {faq.question}
                  </span>
                  <span className="text-gray-400 flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#8FBC52]" /> : <Plus className="w-4 h-4 text-[#0071B4]" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
