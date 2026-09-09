import React, { useState } from 'react';
import { ArrowUpRight, Flame, ChevronRight, Check } from 'lucide-react';
import { TRAINING_PROGRAMS } from '../data/gymData';
import { TrainingProgram } from '../types/gym';

interface TrainingSectionProps {
  onSelectProgram: (program: TrainingProgram) => void;
  onOpenMembershipModal: () => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({
  onSelectProgram,
  onOpenMembershipModal
}) => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section
      id="training"
      className="relative w-full py-24 sm:py-32 bg-[#08080a] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#ff1824]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-white/10 pb-12">
          <div>
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#ff1824]" />
              <span className="font-display font-black text-sm uppercase tracking-[0.25em] text-[#ff1824]">
                TRAINING
              </span>
            </div>

            {/* Main heading:
                TRAIN
                HARDER.
                GET
                STRONGER.
            */}
            <h2 className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tight text-white">
              <span>TRAIN HARDER.</span>
              <br />
              <span className="text-zinc-400">GET </span>
              <span className="text-[#ff1824] text-glow-red">STRONGER.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed mb-4">
              World-class equipment, expert coaching and structured programs designed to push your limits.
            </p>
            <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-zinc-400">
              <Flame className="w-4 h-4 text-[#ff1824]" />
              <span>CUSTOM WORKOUT PERIODIZATION & RECOVERY</span>
            </div>
          </div>
        </div>

        {/* 3 Premium Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TRAINING_PROGRAMS.map((program) => {
            const isHovered = activeHoverId === program.id;

            return (
              <div
                key={program.id}
                id={`training-card-${program.id}`}
                data-cursor="view"
                onMouseEnter={() => setActiveHoverId(program.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                onClick={() => onSelectProgram(program)}
                className={`group relative h-[480px] sm:h-[520px] lg:h-[560px] bg-[#101014] border transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 cursor-pointer overflow-hidden ${
                  isHovered
                    ? 'border-[#ff1824] -translate-y-2 shadow-[0_15px_40px_rgba(255,24,36,0.3)]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                {/* Background Gym Image with slow zoom */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={program.image}
                    alt={program.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out brightness-60 contrast-110 ${
                      isHovered ? 'scale-110 brightness-40' : 'scale-100'
                    }`}
                  />
                  {/* Base dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" />

                  {/* Red highlight overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#ff1824]/30 via-transparent to-black/50 transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>

                {/* Card Top: Red Number & Arrow Icon */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#ff1824] tracking-wider text-glow-sm">
                    {program.number}
                  </span>

                  <div
                    className={`w-11 h-11 flex items-center justify-center rounded-none border transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#ff1824] border-[#ff1824] text-white shadow-[0_0_15px_#ff1824]'
                        : 'bg-black/50 border-white/15 text-zinc-300 group-hover:text-white'
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Card Bottom: Title, Description, Focus list */}
                <div className="relative z-10 flex flex-col justify-end">
                  {/* Subtle focus pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {program.focusAreas.slice(0, 2).map((focus, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-black/70 border border-white/10 text-[11px] font-display font-semibold uppercase tracking-wider text-zinc-300"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>

                  {/* Training Title */}
                  <h3
                    className={`font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-2 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1 text-[#ff1824]' : ''
                    }`}
                  >
                    {program.title}
                  </h3>

                  {/* Tagline & Short Description */}
                  <p className="font-display font-bold text-sm uppercase tracking-wider text-zinc-300 mb-2">
                    "{program.tagline}"
                  </p>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4 font-sans">
                    {program.description}
                  </p>

                  {/* Click indicator */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs uppercase font-display font-bold tracking-widest text-[#ff1824]">
                    <span>VIEW PROGRAM PROTOCOL</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Training CTA bar */}
        <div className="mt-12 p-6 sm:p-8 bg-[#101014] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-white">
              LOOKING FOR CUSTOMIZED REHABILITATION OR SPORT-SPECIFIC CONDITIONING?
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans mt-1">
              Our master coaches build tailored 8-week and 16-week periodization blueprints.
            </p>
          </div>
          <button
            onClick={onOpenMembershipModal}
            className="shrink-0 bg-transparent hover:bg-[#ff1824] text-white border border-[#ff1824] font-display font-black text-sm uppercase tracking-widest px-6 py-3 transition-colors duration-200"
          >
            CONSULT A MASTER COACH ↗
          </button>
        </div>
      </div>
    </section>
  );
};
