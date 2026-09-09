import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Users, Award, Flame, Dumbbell, Zap } from 'lucide-react';
import { HERO_STATS } from '../data/gymData';

interface HeroProps {
  onOpenMembershipModal: () => void;
  onOpenVideoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMembershipModal, onOpenVideoModal }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getStatIcon = (id: string) => {
    switch (id) {
      case '1':
        return <Users className="w-4 h-4 text-[#ff1824]" />;
      case '2':
        return <Award className="w-4 h-4 text-[#ff1824]" />;
      case '3':
        return <Flame className="w-4 h-4 text-[#ff1824]" />;
      default:
        return <Zap className="w-4 h-4 text-[#ff1824]" />;
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#08080a] pt-24 pb-16 lg:py-0"
    >
      {/* Background Image with Cinematic Darkness & Subtle Parallax */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${isLoaded ? 1.03 : 1.12}) translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2200&auto=format&fit=crop"
          alt="APEX ZYM Athletic Hero"
          className="w-full h-full object-cover object-right md:object-center opacity-40 brightness-75 contrast-125"
          loading="eager"
        />

        {/* Multi-layered cinematic vignetting and gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-black/70" />
        <div className="absolute inset-0 bg-radial-[circle_at_75%_45%] from-transparent via-[#08080a]/60 to-[#08080a]" />

        {/* Ambient Red Glow Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#ff1824]/10 rounded-full blur-[140px] pointer-events-none animate-red-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-[#ff1824]/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Floating Dust / Ember Particles */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#ff1824]/60 particle-dot shadow-[0_0_8px_#ff1824]" style={{ animationDelay: '0s', animationDuration: '7s' }} />
        <div className="absolute top-[65%] left-[30%] w-1 h-1 rounded-full bg-white/40 particle-dot" style={{ animationDelay: '1.5s', animationDuration: '8s' }} />
        <div className="absolute top-[40%] left-[60%] w-2 h-2 rounded-full bg-[#ff1824]/50 particle-dot shadow-[0_0_10px_#ff1824]" style={{ animationDelay: '3s', animationDuration: '6s' }} />
        <div className="absolute top-[80%] left-[75%] w-1.5 h-1.5 rounded-full bg-white/30 particle-dot" style={{ animationDelay: '4.5s', animationDuration: '9s' }} />
        <div className="absolute top-[30%] left-[85%] w-1 h-1 rounded-full bg-[#ff1824]/70 particle-dot" style={{ animationDelay: '2s', animationDuration: '7.5s' }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[calc(100vh-6rem)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          {/* Left Column: Huge Condensed Typography & CTAs */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Tagline Badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-black/60 border border-white/10 mb-6 backdrop-blur-md transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-2 h-2 bg-[#ff1824] animate-ping rounded-full" />
              <span className="font-display tracking-[0.25em] text-xs uppercase font-bold text-zinc-300">
                APEX ATHLETIC PERFORMANCE
              </span>
            </div>

            {/* Stacked Minimal Readable Typography:
                BUILT
                TO BE
                BETTER.
            */}
            <h1
              className={`font-display font-extrabold tracking-tight uppercase leading-[0.96] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] text-white flex flex-col transition-all duration-700 delay-100 select-none ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block transition-all duration-300">BUILT</span>
              <span className="inline-block text-zinc-200">TO BE</span>
              <span className="inline-block text-[#ff1824] text-glow-red">BETTER.</span>
            </h1>

            {/* Expanding Red Accent Line */}
            <div
              className={`h-[3px] bg-[#ff1824] shadow-[0_0_15px_#ff1824] my-6 transition-all duration-1000 delay-300 ${
                isLoaded ? 'w-24 md:w-36' : 'w-0'
              }`}
            />

            {/* Supporting Text */}
            <p
              className={`font-sans font-semibold uppercase tracking-wider text-base sm:text-xl text-zinc-300 max-w-xl transition-all duration-700 delay-200 leading-snug mb-8 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              DISCIPLINE TODAY.
              <br />
              <span className="text-white font-bold tracking-wide">DOMINATE TOMORROW.</span>
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Button 1: START TRAINING ↗ */}
              <button
                id="hero-start-training-btn"
                onClick={onOpenMembershipModal}
                className="group relative overflow-hidden bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-base sm:text-lg tracking-widest px-8 sm:px-10 py-4 uppercase transition-all duration-300 red-glow hover:red-glow-lg flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  START TRAINING
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </button>

              {/* Button 2: WATCH EXPERIENCE ▶ (circular play button) */}
              <button
                id="hero-watch-experience-btn"
                onClick={onOpenVideoModal}
                className="group flex items-center gap-3.5 px-6 py-3.5 text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#ff1824]/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="relative w-9 h-9 rounded-full bg-[#ff1824] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 red-glow-sm">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                  <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-30" />
                </div>
                <span className="font-display font-bold tracking-widest text-sm sm:text-base uppercase">
                  WATCH EXPERIENCE
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Vertical Statistics Cards */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div
              className={`w-full max-w-sm bg-black/60 border border-white/10 backdrop-blur-md p-6 sm:p-7 space-y-5 transition-all duration-700 delay-500 relative overflow-hidden ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {/* Corner red accent line */}
              <div className="absolute top-0 right-0 w-16 h-1 bg-[#ff1824] shadow-[0_0_10px_#ff1824]" />
              <div className="absolute top-0 right-0 w-1 h-16 bg-[#ff1824]" />

              <div className="text-xs uppercase tracking-widest text-[#ff1824] font-display font-black border-b border-white/10 pb-3 flex items-center justify-between">
                <span>PERFORMANCE METRICS</span>
                <Dumbbell className="w-3.5 h-3.5 text-[#ff1824]" />
              </div>

              <div className="divide-y divide-white/5">
                {HERO_STATS.map((stat, idx) => (
                  <div
                    key={stat.id}
                    className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between group hover:bg-white/[0.02] transition-colors px-1"
                    style={{
                      transitionDelay: `${600 + idx * 100}ms`
                    }}
                  >
                    <div>
                      <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none group-hover:text-[#ff1824] transition-colors">
                        {stat.value}
                      </div>
                      <div className="font-display font-bold text-xs uppercase tracking-widest text-zinc-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-none bg-white/5 border border-white/10 group-hover:border-[#ff1824]/50 group-hover:bg-[#ff1824]/10 transition-colors">
                      {getStatIcon(stat.id)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote Note */}
              <div className="pt-2 text-[11px] text-zinc-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1824]" />
                <span>STATE-OF-THE-ART HIGH OCTANE TRAINING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
