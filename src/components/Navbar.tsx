import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { NavItem } from '../types/gym';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenMembershipModal: (planId?: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'TRAINING', href: '#training' },
  { label: 'COACHES', href: '#coaches' },
  { label: 'MEMBERSHIPS', href: '#memberships' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenMembershipModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'about', 'training', 'coaches', 'memberships', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="nav-logo-link"
            className="group flex items-center transition-transform duration-200 hover:scale-[1.02]"
            aria-label="APEX ZYM Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 font-display font-bold text-sm lg:text-[15px] tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Red active underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#ff1824] transition-all duration-300 ${
                      isActive ? 'w-full shadow-[0_0_10px_#ff1824]' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="nav-cta-btn"
              onClick={() => onOpenMembershipModal()}
              className="relative group overflow-hidden bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-sm md:text-base tracking-wider px-6 py-2.5 rounded-none uppercase transition-all duration-200 red-glow-sm hover:red-glow flex items-center gap-1.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                START TRAINING
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white hover:bg-white/5 border border-white/10 rounded-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff1824]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#08080a]/98 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-between pt-24 pb-8 px-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#ff1824] font-display font-bold pb-2 border-b border-zinc-800">
            Navigation Menu
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-2xl font-display font-extrabold tracking-wider py-2 flex items-center justify-between border-b border-zinc-900 ${
                  isActive ? 'text-[#ff1824]' : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-sm font-mono text-zinc-600">→</span>
              </a>
            );
          })}
        </div>

        <div className="space-y-4 pt-6 border-t border-zinc-800">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenMembershipModal();
            }}
            className="w-full bg-[#ff1824] text-white font-display font-black text-lg py-3.5 tracking-wider uppercase flex items-center justify-center gap-2 red-glow"
          >
            <span>START TRAINING</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <a
            href={`tel:${GYM_INFO.phone}`}
            className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white py-2"
          >
            <Phone className="w-4 h-4 text-[#ff1824]" />
            <span>{GYM_INFO.phone}</span>
          </a>
        </div>
      </div>
    </>
  );
};
