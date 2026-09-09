import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const phrase = [
    { text: 'APEX ZYM', isRed: true },
    { text: 'TRAIN HARD', isRed: false },
    { text: 'STAY DISCIPLINED', isRed: false },
    { text: 'GET STRONGER', isRed: true },
    { text: 'NEVER SETTLE', isRed: false },
    { text: 'RAW POWER', isRed: false },
    { text: 'BUILD YOUR STRONGEST SELF', isRed: true },
    { text: 'DOMINATE TOMORROW', isRed: false },
  ];

  return (
    <div
      id="marquee-ticker"
      className="relative w-full bg-[#0d0d11] border-y border-white/10 py-4 sm:py-5 overflow-hidden select-none z-20"
    >
      {/* Subtle edge gradients for smooth marquee fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap items-center">
        {/* Render 2 sets to make seamless looping */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center space-x-6 sm:space-x-10 shrink-0 pr-6 sm:pr-10">
            {phrase.map((item, i) => (
              <React.Fragment key={`${copyIndex}-${i}`}>
                <span
                  className={`font-display font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-widest transition-colors duration-200 ${
                    item.isRed ? 'text-[#ff1824] text-glow-red' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.text}
                </span>
                <span className="text-[#ff1824] text-base sm:text-xl font-black opacity-80">
                  •
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
