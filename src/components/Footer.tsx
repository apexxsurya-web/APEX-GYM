import React from 'react';
import { Logo } from './Logo';
import { Instagram, Twitter, Youtube, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'TRAINING', href: '#training' },
    { label: 'COACHES', href: '#coaches' },
    { label: 'MEMBERSHIPS', href: '#memberships' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative w-full bg-[#050507] text-white pt-0 overflow-hidden">
      {/* Small Red Animated Line above the footer */}
      <div className="relative w-full h-[3px] bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[#ff1824] animate-pulse shadow-[0_0_15px_#ff1824]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="font-display font-black text-xl sm:text-2xl text-zinc-300 uppercase tracking-wide">
              "{GYM_INFO.tagline}"
            </p>
            <p className="font-sans text-zinc-400 text-sm max-w-sm leading-relaxed">
              APEX ZYM is an elite strength, athletic conditioning, and body transformation facility built for relentless progress.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#ff1824] text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
                aria-label="APEX ZYM Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#ff1824] text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
                aria-label="APEX ZYM Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#ff1824] text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
                aria-label="APEX ZYM YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display font-black text-xs uppercase tracking-widest text-[#ff1824] mb-4">
              QUICK NAVIGATION
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-display font-bold text-sm tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#ff1824] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours & Center Coordinates */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-display font-black text-xs uppercase tracking-widest text-[#ff1824] mb-4">
              PERFORMANCE CENTER
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-400 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff1824] shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff1824] shrink-0" />
                <span>{GYM_INFO.displayPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff1824] shrink-0" />
                <span>{GYM_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="font-display font-bold text-xs uppercase tracking-wider text-white">
                FACILITY OPENING HOURS:
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-1">
                {GYM_INFO.openingHours.weekdays}
                <br />
                {GYM_INFO.openingHours.sunday}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 APEX ZYM. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#ff1824] transition-colors uppercase font-display font-bold text-xs tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
