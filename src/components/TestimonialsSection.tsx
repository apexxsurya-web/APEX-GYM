import React, { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Trophy } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 sm:py-32 bg-[#08080a] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#ff1824]" />
              <span className="font-display font-black text-sm uppercase tracking-[0.25em] text-[#ff1824]">
                PROOF OF WORK
              </span>
            </div>

            <h2 className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight">
              REAL PEOPLE.
              <br />
              <span className="text-[#ff1824] text-glow-red">REAL PROGRESS.</span>
            </h2>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 flex items-center justify-center border transition-all ${
                canScrollLeft
                  ? 'bg-black/60 border-white/20 text-white hover:border-[#ff1824] hover:bg-[#ff1824]/20'
                  : 'bg-black/20 border-white/5 text-zinc-600 cursor-not-allowed'
              }`}
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 flex items-center justify-center border transition-all ${
                canScrollRight
                  ? 'bg-black/60 border-white/20 text-white hover:border-[#ff1824] hover:bg-[#ff1824]/20'
                  : 'bg-black/20 border-white/5 text-zinc-600 cursor-not-allowed'
              }`}
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="w-[320px] sm:w-[400px] lg:w-[460px] shrink-0 snap-start bg-[#101014] border border-white/10 hover:border-[#ff1824]/50 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: 5 Stars + Quote mark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#ff1824] fill-[#ff1824]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-600 group-hover:text-[#ff1824] transition-colors opacity-50" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-zinc-200 font-sans text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                {/* PR / Metric Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff1824]/10 border border-[#ff1824]/30 mb-8">
                  <Trophy className="w-3.5 h-3.5 text-[#ff1824]" />
                  <span className="font-display font-black text-xs uppercase tracking-wider text-white">
                    {t.result}
                  </span>
                </div>
              </div>

              {/* Bottom Member Identity */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#ff1824]"
                />
                <div>
                  <div className="font-display font-black text-lg text-white uppercase tracking-tight">
                    {t.name}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span>{t.role}</span>
                    <span>•</span>
                    <span className="text-[#ff1824] font-bold">{t.membership}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
