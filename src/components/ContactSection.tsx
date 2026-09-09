import React, { useState } from 'react';
import { Phone, Mail, Instagram, MessageSquare, Clock, MapPin, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trainingGoal: 'STRENGTH',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const trainingGoals = [
    'STRENGTH & POWERLIFTING',
    'BODYBUILDING & HYPERTROPHY',
    'FAT LOSS & METABOLIC',
    'ATHLETIC CONDITIONING',
    '1-ON-1 PERSONAL COACHING'
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your background or goals';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        trainingGoal: 'STRENGTH & POWERLIFTING',
        message: '',
      });
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#0d0d11] overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ff1824]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading, Info & Functional Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#ff1824]" />
                <span className="font-display font-black text-sm uppercase tracking-[0.25em] text-[#ff1824]">
                  GET IN TOUCH
                </span>
              </div>

              {/* Heading: LET'S GET STARTED. */}
              <h2 className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white mb-6">
                LET'S GET
                <br />
                <span className="text-[#ff1824] text-glow-red">STARTED.</span>
              </h2>

              <p className="text-zinc-300 font-sans text-base leading-relaxed mb-8">
                Ready to transform your discipline and body? Schedule your facility walk-through or speak directly with our head coaches today.
              </p>

              {/* Facility Details Box */}
              <div className="bg-[#121217] border border-white/10 p-6 space-y-6 mb-8">
                <div>
                  <div className="font-display font-black text-xl uppercase tracking-wide text-white">
                    {GYM_INFO.name}
                  </div>
                  <div className="text-xs uppercase font-mono text-[#ff1824] tracking-wider mt-0.5">
                    Fitness & Performance Center
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <Clock className="w-5 h-5 text-[#ff1824] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400">
                      OPENING HOURS:
                    </div>
                    <div className="font-display font-black text-white text-base mt-0.5">
                      {GYM_INFO.openingHours.weekdays}
                    </div>
                    <div className="font-display font-bold text-xs text-zinc-400 mt-0.5">
                      {GYM_INFO.openingHours.sunday}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <MapPin className="w-5 h-5 text-[#ff1824] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400">
                      LOCATION:
                    </div>
                    <div className="font-sans text-xs sm:text-sm text-zinc-300 mt-0.5 leading-snug">
                      {GYM_INFO.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Functional Buttons: WhatsApp, Instagram, Email, Phone */}
            <div className="space-y-3">
              <div className="text-xs uppercase font-display font-black tracking-widest text-zinc-400">
                DIRECT CHANNELS:
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${GYM_INFO.whatsapp}?text=Hi%20APEX%20ZYM,%20I'd%20like%20to%20know%20more%20about%20membership%20plans`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-3 bg-white/5 hover:bg-[#ff1824] border border-white/10 hover:border-[#ff1824] text-zinc-200 hover:text-white transition-all text-xs font-display font-bold uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4 text-[#ff1824] group-hover:text-white" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href={GYM_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-3 bg-white/5 hover:bg-[#ff1824] border border-white/10 hover:border-[#ff1824] text-zinc-200 hover:text-white transition-all text-xs font-display font-bold uppercase tracking-wider"
                >
                  <Instagram className="w-4 h-4 text-[#ff1824]" />
                  <span>INSTAGRAM</span>
                </a>

                <a
                  href={`mailto:${GYM_INFO.email}`}
                  className="flex items-center gap-2 p-3 bg-white/5 hover:bg-[#ff1824] border border-white/10 hover:border-[#ff1824] text-zinc-200 hover:text-white transition-all text-xs font-display font-bold uppercase tracking-wider"
                >
                  <Mail className="w-4 h-4 text-[#ff1824]" />
                  <span>EMAIL US</span>
                </a>

                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="flex items-center gap-2 p-3 bg-white/5 hover:bg-[#ff1824] border border-white/10 hover:border-[#ff1824] text-zinc-200 hover:text-white transition-all text-xs font-display font-bold uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4 text-[#ff1824]" />
                  <span>CALL PHONE</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7 bg-[#101014] border border-white/15 p-8 sm:p-10 relative">
            <div className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              BOOK YOUR ORIENTATION OR ASK A QUESTION
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans mb-8">
              Fill out the form below. An APEX coaching director will get back to you within 2 business hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#ff1824]/10 border border-[#ff1824] text-center space-y-4">
                <div className="w-14 h-14 bg-[#ff1824] text-white rounded-full flex items-center justify-center mx-auto red-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white">
                  MESSAGE DISPATCHED
                </h3>
                <p className="text-zinc-300 text-sm font-sans max-w-md mx-auto">
                  Thank you for reaching out to APEX ZYM. Our team has received your inquiry and will contact you shortly via phone or WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-widest"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Marcus Rashford"
                    className={`w-full bg-black/60 border ${
                      errors.name ? 'border-red-500' : 'border-white/15 focus:border-[#ff1824]'
                    } px-4 py-3.5 text-white placeholder-zinc-600 text-sm font-sans outline-none transition-colors`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email & Phone 2-Col */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="marcus@example.com"
                      className={`w-full bg-black/60 border ${
                        errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#ff1824]'
                      } px-4 py-3.5 text-white placeholder-zinc-600 text-sm font-sans outline-none transition-colors`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1.5">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-black/60 border ${
                        errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#ff1824]'
                      } px-4 py-3.5 text-white placeholder-zinc-600 text-sm font-sans outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Training Goal Selector */}
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1.5">
                    PRIMARY TRAINING GOAL
                  </label>
                  <select
                    value={formData.trainingGoal}
                    onChange={(e) => setFormData({ ...formData, trainingGoal: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 focus:border-[#ff1824] px-4 py-3.5 text-white text-sm font-sans outline-none cursor-pointer"
                  >
                    {trainingGoals.map((goal) => (
                      <option key={goal} value={goal} className="bg-[#101014] text-white">
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1.5">
                    YOUR MESSAGE & CURRENT FITNESS BACKGROUND *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell us what you want to achieve, previous lifting experience, or any questions about membership..."
                    className={`w-full bg-black/60 border ${
                      errors.message ? 'border-red-500' : 'border-white/15 focus:border-[#ff1824]'
                    } px-4 py-3.5 text-white placeholder-zinc-600 text-sm font-sans outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1.5 text-red-500 text-xs mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-base uppercase tracking-widest flex items-center justify-center gap-2 red-glow hover:red-glow-lg transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      SEND MESSAGE
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
