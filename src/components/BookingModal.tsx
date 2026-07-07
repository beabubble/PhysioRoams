import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Manual Therapy',
    'Exercise Rehabilitation',
    'Sports Physiotherapy',
    'Post Operative Care',
    'Biomechanics Assessment',
    'Geriatric Physiotherapy',
    'Orthotics Prescription',
  ];

  const times = [
    '09:00 AM',
    '10:30 AM',
    '11:45 AM',
    '01:15 PM',
    '02:30 PM',
    '04:00 PM',
    '05:15 PM (Wait required outside)',
  ];

  // Helper dates (next 5 weekdays)
  const getNextWeekdays = () => {
    const list = [];
    let current = new Date();
    while (list.length < 5) {
      current.setDate(current.getDate() + 1);
      const day = current.getDay();
      if (day !== 0 && day !== 6) {
        // Exclude Sat & Sun
        list.push(
          current.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          })
        );
      }
    }
    return list;
  };

  const availableDates = getNextWeekdays();

  const handleNextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 1500);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setPatientInfo({ name: '', email: '', phone: '', notes: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          ></motion.div>

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-lg overflow-hidden relative z-10 flex flex-col max-h-[90vh]"
          id="booking-modal-panel"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 hover:bg-slate-50 rounded-full transition-colors z-20 focus:outline-none"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="p-6 pb-4 border-b border-gray-50 text-left">
            <div className="flex items-center gap-2 text-[#0f5a9e]">
              <Calendar className="w-5 h-5 text-[#7ab530]" />
              <h3 className="text-xl font-bold tracking-tight">Book an Appointment</h3>
            </div>
            {step < 4 && (
              <p className="text-xs text-gray-500 mt-1">
                Step {step} of 3: {step === 1 ? 'Select Service' : step === 2 ? 'Choose Time' : 'Patient Information'}
              </p>
            )}
          </div>

          {/* Modal Body / Steps */}
          <div className="p-6 overflow-y-auto flex-grow text-left">
            {/* STEP 1: Select Service */}
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Which treatment do you need?</h4>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm font-semibold transition-all flex justify-between items-center ${
                        selectedService === service
                          ? 'border-[#0f5a9e] bg-[#0f5a9e]/5 text-[#0f5a9e] shadow-sm'
                          : 'border-gray-100 hover:border-gray-200 hover:bg-slate-50 text-gray-700'
                      }`}
                    >
                      {service}
                      {selectedService === service && <Check className="w-4 h-4 text-[#7ab530]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Choose Date & Time */}
            {step === 2 && (
              <div className="space-y-6">
                {/* Select Date */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#0f5a9e]" />
                    Select a Date (Monday - Friday)
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`py-2 px-1 rounded-lg border text-xs font-semibold text-center transition-all ${
                          selectedDate === date
                            ? 'border-[#0f5a9e] bg-[#0f5a9e] text-white'
                            : 'border-gray-100 hover:border-gray-200 hover:bg-slate-50 text-gray-700'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Time */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0f5a9e]" />
                    Select an Available Time Slot
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all ${
                          selectedTime === time
                            ? 'border-[#7ab530] bg-[#7ab530]/10 text-[#0f5a9e] font-bold shadow-sm'
                            : 'border-gray-100 hover:border-gray-200 hover:bg-slate-50 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {selectedTime.includes('Wait required') && (
                    <p className="text-[11px] text-amber-700 leading-relaxed font-normal bg-amber-50 p-2.5 rounded-lg border border-amber-100">
                      *Note: After 5:00 PM, the elevator and main lobby doors are locked. You will need to wait by the ground floor elevators and text 778-879-1975 to be let in.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3: Patient Information */}
            {step === 3 && (
              <form onSubmit={handleBook} className="space-y-4">
                <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Enter Your Contact Information</h4>
                
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label htmlFor="modal-name" className="text-xs font-bold text-gray-600 uppercase">Full Name</label>
                    <input
                      id="modal-name"
                      type="text"
                      name="name"
                      required
                      value={patientInfo.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0f5a9e] text-gray-800"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-email" className="text-xs font-bold text-gray-600 uppercase">Email Address</label>
                      <input
                        id="modal-email"
                        type="email"
                        name="email"
                        required
                        value={patientInfo.email}
                        onChange={handleInputChange}
                        placeholder="jane@example.com"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0f5a9e] text-gray-800"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="modal-phone" className="text-xs font-bold text-gray-600 uppercase">Phone Number</label>
                      <input
                        id="modal-phone"
                        type="tel"
                        name="phone"
                        required
                        value={patientInfo.phone}
                        onChange={handleInputChange}
                        placeholder="604-555-0199"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0f5a9e] text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-notes" className="text-xs font-bold text-gray-600 uppercase">Symptoms / Notes (Optional)</label>
                    <textarea
                      id="modal-notes"
                      name="notes"
                      rows={2}
                      value={patientInfo.notes}
                      onChange={handleInputChange}
                      placeholder="Describe any specific areas of pain, recent surgeries, etc..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0f5a9e] text-gray-800 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Simulated confirmation disclaimer */}
                <p className="text-[10px] text-gray-400 font-normal leading-normal pt-2">
                  By submitting this request, you authorize PhysioRoams to contact you via email or phone to confirm this appointment. No immediate payment is required.
                </p>
              </form>
            )}

            {/* STEP 4: SUCCESS STEP */}
            {step === 4 && (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-[#7ab530]/15 text-[#7ab530] rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0f5a9e]">Booking Request Received!</h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                    We have successfully registered your request for <strong className="font-bold">{selectedService}</strong> on <strong className="font-bold">{selectedDate}</strong> at <strong className="font-bold">{selectedTime}</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 text-left text-xs text-gray-600 space-y-2 max-w-sm mx-auto">
                  <h5 className="font-bold text-[#0f5a9e] uppercase tracking-wider">Next Steps:</h5>
                  <p>1. Marlon will review the schedule and send a formal confirmation SMS / Email shortly.</p>
                  <p>2. If your session is after 5:00 PM, please remember the building access guide to be let in.</p>
                </div>

                <button
                  id="modal-success-done"
                  onClick={handleReset}
                  className="px-8 py-2.5 bg-[#7ab530] text-white hover:bg-[#6fa42b] rounded-full font-bold text-sm tracking-wide transition-all shadow cursor-pointer uppercase"
                >
                  Got It, Thanks!
                </button>
              </div>
            )}
          </div>

          {/* Modal Footer (Controls) */}
          {step < 4 && (
            <div className="p-6 bg-slate-50 border-t border-gray-50 flex justify-between items-center">
              {step > 1 ? (
                <button
                  id="modal-prev-btn"
                  onClick={handlePrevStep}
                  className="px-5 py-2 text-sm font-bold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  id="modal-next-btn"
                  onClick={handleNextStep}
                  disabled={(step === 1 && !selectedService) || (step === 2 && (!selectedDate || !selectedTime))}
                  className="px-6 py-2.5 bg-[#0f5a9e] hover:bg-[#0b7299] text-white rounded-full font-bold text-sm tracking-wide transition-all shadow disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  id="modal-submit-btn"
                  onClick={handleBook}
                  disabled={isSubmitting || !patientInfo.name || !patientInfo.email || !patientInfo.phone}
                  className="px-6 py-2.5 bg-[#7ab530] hover:bg-[#6fa42b] text-white rounded-full font-bold text-sm tracking-wide transition-all shadow disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-white" />
                      CONFIRM BOOKING
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
