import React from 'react';
import { X, Check, Dumbbell, Calendar, Clock, Flame, ArrowUpRight } from 'lucide-react';
import { TrainingProgram } from '../types/gym';

interface ProgramDetailModalProps {
  program: TrainingProgram | null;
  onClose: () => void;
  onEnroll: (programTitle: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onEnroll
}) => {
  if (!program) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e0e13] border border-white/20 p-6 sm:p-8 shadow-[0_0_60px_rgba(255,24,36,0.35)] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with image preview */}
        <div className="relative h-48 sm:h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover brightness-60 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-[#0e0e13]/50 to-transparent" />

          <div className="absolute bottom-4 left-6 sm:left-8">
            <span className="px-2.5 py-1 bg-[#ff1824] text-white font-display font-black text-xs uppercase tracking-widest">
              PROTOCOL {program.number}
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-1">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-display font-bold text-base sm:text-lg text-[#ff1824] uppercase tracking-wider mb-3">
          "{program.tagline}"
        </p>

        {/* Description */}
        <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
          {program.description}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-black/60 border border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#ff1824]" />
            <div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase">TIMELINE & SESSIONS</div>
              <div className="font-display font-bold text-xs sm:text-sm text-white">{program.schedule}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-[#ff1824]" />
            <div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase">INTENSITY RATING</div>
              <div className="font-display font-bold text-xs sm:text-sm text-white">RPE 8 - 9.5 (ADVANCED)</div>
            </div>
          </div>
        </div>

        {/* Key Movement Pillars */}
        <div className="space-y-3 mb-8">
          <div className="font-display font-black text-xs uppercase tracking-widest text-zinc-400">
            CORE MOVEMENTS & TRAINING BLOCKS:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {program.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-zinc-200"
              >
                <div className="w-4 h-4 bg-[#ff1824]/20 border border-[#ff1824] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#ff1824]" />
                </div>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            onClose();
            onEnroll(program.title);
          }}
          className="w-full py-4 bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-base uppercase tracking-widest flex items-center justify-center gap-2 red-glow transition-all"
        >
          <span>ENROLL IN {program.title}</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
