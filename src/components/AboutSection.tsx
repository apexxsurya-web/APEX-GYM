import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ShieldCheck, Target, Zap } from 'lucide-react';
import { ABOUT_STATS, GYM_INFO } from '../data/gymData';

interface AboutSectionProps {
  onOpenMembershipModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenMembershipModal }) => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers upward
          const targets = ABOUT_STATS.map((s) => s.value);
          const duration = 1800;
          const steps = 36;
          const interval = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts(targets.map((target) => Math.floor(target * ease)));

            if (currentStep >= steps) {
              setCounts(targets);
              clearInterval(timer);
            }
          }, interval);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#0d0d11] border-b border-white/10 overflow-hidden"
    >
      {/* Subtle red background glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#ff1824]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Fitness Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-white/15 bg-black shadow-2xl group">
              {/* Image with zoom on hover */}
              <div className="aspect-[4/5] sm:aspect-[4/4.8] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1400&auto=format&fit=crop"
                  alt="APEX ZYM Athletic Facility"
                  className="w-full h-full object-cover brightness-85 contrast-115 transition-transform duration-700 ease-out group-hover:scale-105"
                  data-cursor="view"
                />
              </div>

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Red geometric accent border on image */}
              <div className="absolute top-0 left-0 w-24 h-1.5 bg-[#ff1824]" />
              <div className="absolute top-0 left-0 w-1.5 h-24 bg-[#ff1824]" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#08080a]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-display font-black text-xs uppercase tracking-widest text-[#ff1824]">
                    APEX PERFORMANCE PROTOCOL
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-white uppercase mt-0.5">
                    UNCOMPROMISING IRON & SPEED
                  </div>
                </div>
                <div className="w-10 h-10 bg-[#ff1824]/20 border border-[#ff1824]/60 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#ff1824]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Text, Underline, and Counter Statistics */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#ff1824]" />
              <span className="font-display font-black text-sm uppercase tracking-[0.25em] text-[#ff1824]">
                ABOUT APEX ZYM
              </span>
            </div>

            {/* Subheading: "MORE THAN A GYM." */}
            <h2 className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white mb-4">
              MORE THAN
              <br />
              <span className="text-[#ff1824] text-glow-red">A GYM.</span>
            </h2>

            {/* Animated Red Underline */}
            <div
              className={`h-[3px] bg-[#ff1824] shadow-[0_0_12px_#ff1824] mb-8 transition-all duration-1000 ${
                hasAnimated ? 'w-36' : 'w-8'
              }`}
            />

            {/* Main Text */}
            <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              APEX ZYM is built for people who refuse to stay average. Train with purpose, push your limits and become stronger every day.
            </p>

            <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              We strip away the commercial fluff to give you what actually delivers results: calibrated Olympic barbells, specialized power cages, heavy-duty dumbbell racks, competition-grade turf, and coaches who prioritize form, periodization, and mental fortitude.
            </p>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/5">
                <Target className="w-5 h-5 text-[#ff1824] shrink-0 mt-0.5" />
                <div>
                  <div className="font-display font-bold text-sm uppercase text-white tracking-wide">
                    SCIENCE-BASED LOADS
                  </div>
                  <div className="text-zinc-400 text-xs mt-0.5">
                    Objective progression models and load cycles.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/5">
                <Zap className="w-5 h-5 text-[#ff1824] shrink-0 mt-0.5" />
                <div>
                  <div className="font-display font-bold text-sm uppercase text-white tracking-wide">
                    RAW ATMOSPHERE
                  </div>
                  <div className="text-zinc-400 text-xs mt-0.5">
                    No distractions. High energy. Relentless grit.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button: DISCOVER APEX ZYM ↗ */}
            <button
              id="about-discover-btn"
              onClick={onOpenMembershipModal}
              className="group relative overflow-hidden bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-base tracking-widest px-8 py-3.5 uppercase transition-all duration-300 red-glow flex items-center gap-2 mb-12"
            >
              <span className="relative z-10 flex items-center gap-2">
                DISCOVER APEX ZYM
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </button>

            {/* Animated Numbers Counter Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {ABOUT_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight flex items-baseline">
                    <span>{counts[idx]}</span>
                    <span className="text-[#ff1824] text-glow-sm">{stat.suffix}</span>
                  </div>
                  <div className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
