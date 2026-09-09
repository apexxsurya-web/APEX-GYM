import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSize = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const textClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Sharp geometric athletic custom 'A' symbol */}
      <div className={`relative ${iconSize} flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(255,24,36,0.8)]"
        >
          {/* Angular polygon diamond / apex peak */}
          <path
            d="M20 2L36 34H28L20 18L12 34H4L20 2Z"
            fill="#ff1824"
          />
          {/* Inner negative cut athletic slash */}
          <path
            d="M20 10L27 24H13L20 10Z"
            fill="#08080a"
          />
          {/* Sharp athletic central crossbar */}
          <polygon
            points="14,24 26,24 24,28 16,28"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Wordmark: APEX in white, ZYM in red */}
      <div className={`font-display font-black tracking-wider uppercase flex items-baseline leading-none ${textClass}`}>
        <span className="text-white">APEX</span>
        <span className="text-[#ff1824] ml-1.5 font-bold tracking-widest text-glow-red">ZYM</span>
      </div>
    </div>
  );
};
