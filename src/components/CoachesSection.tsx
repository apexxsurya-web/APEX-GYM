import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight, Award, Shield } from 'lucide-react';
import { COACHES } from '../data/gymData';
import { Coach } from '../types/gym';

interface CoachesSectionProps {
  onConsultCoach: (coach: Coach) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onConsultCoach }) => {
  const [hoveredCoachId, setHoveredCoachId] = useState<string | null>(null);

  return (
    <section
      id="coaches"
      className="relative w-full py-24 sm:py-32 bg-[#08080a] border-b border-white/10 overflow-hidden"
    >
      {/* Red ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff1824]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#ff1824]" />
            <span className="font-display font-black text-sm uppercase tracking-[0.25em] text-[#ff1824]">
              APEX INSTRUCTION
            </span>
            <span className="w-6 h-[2px] bg-[#ff1824]" />
          </div>

          <h2 className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-4">
            MEET THE <span className="text-[#ff1824] text-glow-red">COACHES</span>
          </h2>

          <p className="text-zinc-300 font-sans text-base sm:text-lg">
            Experienced coaches. Proven methods. Real progress.
          </p>
        </div>

        {/* 4 Premium Coach Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACHES.map((coach) => {
            const isHovered = hoveredCoachId === coach.id;

            return (
              <div
                key={coach.id}
                id={`coach-card-${coach.id}`}
                onMouseEnter={() => setHoveredCoachId(coach.id)}
                onMouseLeave={() => setHoveredCoachId(null)}
                className={`group relative h-[480px] sm:h-[520px] bg-[#101014] border transition-all duration-500 overflow-hidden flex flex-col justify-end p-6 ${
                  isHovered
                    ? 'border-[#ff1824] shadow-[0_10px_35px_rgba(255,24,36,0.35)] -translate-y-1.5'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                {/* Background Coach Image with zoom */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out brightness-75 contrast-115 ${
                      isHovered ? 'scale-110 brightness-50' : 'scale-100'
                    }`}
                  />

                  {/* Gradient Overlay: Dark to Black */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                  {/* Black to Red gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#ff1824]/40 via-black/70 to-transparent transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>

                {/* Top Corner Badge: Experience */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 bg-black/80 border border-white/10 backdrop-blur-md text-[11px] font-display font-black uppercase tracking-wider text-zinc-300">
                    {coach.experience}
                  </span>
                </div>

                {/* Card Content: Information slides upward on hover */}
                <div
                  className={`relative z-10 transition-transform duration-500 ${
                    isHovered ? 'translate-y-0' : 'translate-y-3 sm:translate-y-4'
                  }`}
                >
                  {/* Specialty */}
                  <div className="font-display font-black text-xs uppercase tracking-widest text-[#ff1824] mb-1 text-glow-sm">
                    {coach.specialty}
                  </div>

                  {/* Coach Name */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
                    {coach.name}
                  </h3>

                  {/* Bio brief */}
                  <p className="text-zinc-300 font-sans text-xs leading-relaxed line-clamp-2 mb-4">
                    {coach.bio}
                  </p>

                  {/* Certifications preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {coach.certifications.slice(0, 2).map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-wider"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Action & Socials Row */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    {/* Consultation button */}
                    <button
                      onClick={() => onConsultCoach(coach)}
                      className="text-xs uppercase font-display font-black tracking-wider text-white hover:text-[#ff1824] flex items-center gap-1 transition-colors"
                    >
                      <span>CONSULT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {/* Social icons */}
                    <div className="flex items-center gap-2">
                      {coach.socials.instagram && (
                        <a
                          href={coach.socials.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-none bg-white/5 hover:bg-[#ff1824] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                          aria-label={`${coach.name} Instagram`}
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {coach.socials.twitter && (
                        <a
                          href={coach.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-none bg-white/5 hover:bg-[#ff1824] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                          aria-label={`${coach.name} Twitter`}
                        >
                          <Twitter className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {coach.socials.linkedin && (
                        <a
                          href={coach.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-none bg-white/5 hover:bg-[#ff1824] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                          aria-label={`${coach.name} LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
