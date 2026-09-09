import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenMembershipModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenMembershipModal }) => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#08080a] overflow-hidden border-b border-white/10 flex items-center justify-center">
      {/* Cinematic Gym Background Image with Strong Dark Vignette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2200&auto=format&fit=crop"
          alt="APEX Ready To Level Up"
          className="w-full h-full object-cover brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/80 to-[#08080a]" />

        {/* Animated Red Lighting / Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ff1824]/20 rounded-full blur-[160px] animate-red-pulse pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-[#ff1824]" />
          <span className="font-display font-black text-xs sm:text-sm uppercase tracking-[0.3em] text-[#ff1824]">
            FINAL CALL FOR PROGRESS
          </span>
          <span className="w-8 h-[2px] bg-[#ff1824]" />
        </div>

        {/* Headline:
            READY TO
            LEVEL UP?
        */}
        <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.96] tracking-tight text-white mb-6">
          READY TO
          <br />
          <span className="text-[#ff1824] text-glow-red">LEVEL UP?</span>
        </h2>

        {/* Supporting text: "Your strongest version is waiting." */}
        <p className="text-zinc-300 font-sans text-lg sm:text-2xl font-light tracking-wide max-w-xl mb-10">
          "Your strongest version is waiting."
        </p>

        {/* Button: START TRAINING ↗ */}
        <button
          id="cta-start-training-btn"
          onClick={onOpenMembershipModal}
          className="group relative overflow-hidden bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-lg sm:text-xl tracking-widest px-10 sm:px-14 py-4 sm:py-5 uppercase transition-all duration-300 red-glow hover:red-glow-lg flex items-center gap-3"
        >
          <span className="relative z-10 flex items-center gap-2">
            START TRAINING
            <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
          </span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        </button>

        {/* Guarantee microtext */}
        <div className="mt-6 text-zinc-500 font-mono text-xs uppercase tracking-widest">
          NO HIDDEN CONTRACTS • 3-DAY MONEY BACK TRIAL • INSTANT GYM ACCESS
        </div>
      </div>
    </section>
  );
};
