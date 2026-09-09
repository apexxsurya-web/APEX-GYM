import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'normal' | 'button' | 'view'>('normal');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // Default assume touch until mousemove

  const trailingPosRef = useRef({ x: -100, y: -100 });
  const targetPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      setIsTouch(false);
      setIsVisible(true);
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      // Check element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isImage = target.closest('[data-cursor="view"]') || target.tagName.toLowerCase() === 'img';
      const isButton = target.closest('button') || target.closest('a') || target.closest('[data-cursor="button"]') || target.closest('input') || target.closest('textarea') || target.closest('select');

      if (isImage && !isButton) {
        setCursorType('view');
      } else if (isButton) {
        setCursorType('button');
      } else {
        setCursorType('normal');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing loop
    const animate = () => {
      trailingPosRef.current.x += (targetPosRef.current.x - trailingPosRef.current.x) * 0.18;
      trailingPosRef.current.y += (targetPosRef.current.y - trailingPosRef.current.y) * 0.18;
      setTrailingPos({ x: trailingPosRef.current.x, y: trailingPosRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: cursorType === 'view' ? '0px' : cursorType === 'button' ? '6px' : '5px',
          height: cursorType === 'view' ? '0px' : cursorType === 'button' ? '6px' : '5px',
          backgroundColor: '#ff1824',
        }}
      />

      {/* Trailing circle / view badge */}
      <div
        className={`fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ease-out ${
          cursorType === 'view'
            ? 'w-14 h-14 bg-[#ff1824] text-white font-display font-black text-xs tracking-wider rounded-full shadow-[0_0_25px_rgba(255,24,36,0.6)] scale-100'
            : cursorType === 'button'
            ? 'w-10 h-10 border-2 border-[#ff1824]/80 bg-[#ff1824]/10 rounded-full scale-110'
            : 'w-7 h-7 border border-white/40 rounded-full'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {cursorType === 'view' && <span className="select-none">VIEW</span>}
      </div>
    </>
  );
};
