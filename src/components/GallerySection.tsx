import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types/gym';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'WEIGHTLIFTING', 'FUNCTIONAL', 'EQUIPMENT', 'COACHES'];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section
      id="gallery"
      className="relative w-full py-24 sm:py-32 bg-[#0d0d11] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#ff1824]" />
              <span className="font-display font-black text-sm uppercase tracking-[0.25em] text-[#ff1824]">
                THE FACILITY
              </span>
            </div>

            <h2 className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white">
              IRON & <span className="text-[#ff1824] text-glow-red">ATMOSPHERE</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-display font-black text-xs uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#ff1824] border-[#ff1824] text-white red-glow-sm'
                    : 'bg-black/40 border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Bento Athletic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[280px]">
          {filteredItems.map((item, index) => {
            const isSpan2Col = item.aspect === 'landscape' && index % 3 === 0;
            const isSpan2Row = item.aspect === 'portrait';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                data-cursor="view"
                className={`group relative overflow-hidden bg-black border border-white/10 hover:border-[#ff1824] transition-all duration-500 cursor-pointer ${
                  isSpan2Col ? 'sm:col-span-2' : ''
                } ${isSpan2Row ? 'sm:row-span-2' : ''}`}
              >
                {/* Image with slow zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-80 contrast-115 group-hover:brightness-50"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Red ambient overlay on hover */}
                <div className="absolute inset-0 bg-[#ff1824]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* View Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#ff1824] text-white flex items-center justify-center red-glow">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Title Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="font-mono text-[10px] text-[#ff1824] uppercase tracking-widest font-bold">
                    {item.category}
                  </div>
                  <div className="font-display font-black text-base sm:text-lg text-white uppercase tracking-tight line-clamp-1 mt-0.5">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-[#ff1824] text-white flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-[#ff1824] text-white flex items-center justify-center transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-[#ff1824] text-white flex items-center justify-center transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activeLightboxIndex].image}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-w-full max-h-[72vh] object-contain border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <div className="font-mono text-xs text-[#ff1824] uppercase tracking-widest font-bold">
                {filteredItems[activeLightboxIndex].category} • {activeLightboxIndex + 1} OF {filteredItems.length}
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider mt-1">
                {filteredItems[activeLightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
