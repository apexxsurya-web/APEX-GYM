import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MotivationalParallaxProps {
  onOpenMembershipModal: () => void;
}

export const MotivationalParallax: React.FC<MotivationalParallaxProps> = ({
  onOpenMembershipModal
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        setInView(true);
        // Slower parallax offset calculation
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffsetY((scrollProgress - 0.5) * 80);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[650px] lg:min-h-[750px] flex items-center justify-center overflow-hidden bg-black py-24"
    >
      {/* Cinematic gym image with parallax slower movement */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden scale-110"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2200&auto=format&fit=crop"
          alt="APEX Gym Motivation"
          className="w-full h-full object-cover brightness-[0.38] contrast-125"
        />

        {/* Ambient Dark Charcoal Gradients & Red Tone Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/60 to-[#08080a]" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-[#ff1824]/15 via-transparent to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Subtle accent eyebrow */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1 bg-black/70 border border-white/10 mb-6 backdrop-blur-sm transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#ff1824]" />
          <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-zinc-300">
            THE APEX ETHOS
          </span>
        </div>

        {/* Minimal Readable Typography:
            YOUR
            STRONGEST (red)
            VERSION
            STARTS HERE.
        */}
        <div className="font-display font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.96] tracking-tight text-white select-none">
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            YOUR
          </div>
          <div
            className={`text-[#ff1824] text-glow-red transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            STRONGEST
          </div>
          <div
            className={`text-zinc-200 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            VERSION
          </div>
          <div
            className={`text-xl sm:text-3xl md:text-4xl tracking-wider text-zinc-400 mt-2 transition-all duration-700 delay-400 font-bold ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            STARTS HERE.
          </div>
        </div>

        {/* Animated Red Line Draws Itself */}
        <div
          className={`h-[3px] bg-[#ff1824] shadow-[0_0_20px_#ff1824] my-8 transition-all duration-1000 delay-500 ${
            inView ? 'w-36 sm:w-56' : 'w-0'
          }`}
        />

        {/* Subtext */}
        <p
          className={`text-zinc-300 font-sans text-base sm:text-lg max-w-lg mx-auto mb-8 transition-all duration-700 delay-600 leading-relaxed ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          No excuses. No false promises. Only calculated work, raw discipline, and the unbreakable mindset to surpass yesterday.
        </p>

        {/* Button: JOIN APEX ZYM ↗ */}
        <div
          className={`transition-all duration-700 delay-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            id="motivational-join-btn"
            onClick={onOpenMembershipModal}
            className="group relative overflow-hidden bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-lg tracking-widest px-10 py-4 uppercase transition-all duration-300 red-glow hover:red-glow-lg flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              JOIN APEX ZYM
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>
    </section>
  );
};
