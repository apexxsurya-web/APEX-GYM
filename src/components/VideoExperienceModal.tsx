import React, { useState } from 'react';
import { X, Volume2, VolumeX, Play, Pause, Award, Flame, Dumbbell } from 'lucide-react';

interface VideoExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMembership: () => void;
}

export const VideoExperienceModal: React.FC<VideoExperienceModalProps> = ({
  isOpen,
  onClose,
  onOpenMembership
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0d0d11] border border-white/20 overflow-hidden shadow-[0_0_60px_rgba(255,24,36,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-black/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff1824] animate-pulse" />
            <span className="font-display font-black text-sm uppercase tracking-widest text-white">
              APEX ZYM CINEMATIC EXPERIENCE
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white/10 hover:bg-[#ff1824] text-white transition-colors"
            aria-label="Close Video Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame / Cinematic Canvas */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {/* We use an HTML5 video with a high quality athletic training loop */}
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover brightness-85 contrast-120"
            poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />

          {/* Center Brand Watermark */}
          <div className="absolute top-6 left-6 pointer-events-none">
            <div className="font-display font-black text-2xl uppercase tracking-wider text-white drop-shadow-lg">
              APEX <span className="text-[#ff1824]">ZYM</span>
            </div>
            <div className="font-mono text-[10px] text-zinc-300 uppercase tracking-widest">
              WAR ROOM SESSIONS
            </div>
          </div>

          {/* In-Video Controls */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 bg-black/70 hover:bg-[#ff1824] text-white border border-white/20 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 bg-black/70 hover:bg-[#ff1824] text-white border border-white/20 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenMembership();
              }}
              className="px-6 py-2.5 bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-xs sm:text-sm uppercase tracking-widest red-glow-sm transition-all"
            >
              CLAIM YOUR TRIAL PASS ↗
            </button>
          </div>
        </div>

        {/* Bottom Details Drawer */}
        <div className="p-6 bg-[#08080a] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Flame className="w-5 h-5 text-[#ff1824] shrink-0 mt-0.5" />
            <div>
              <div className="font-display font-black text-sm uppercase text-white">
                HIGH DENSITY ATMOSPHERE
              </div>
              <div className="text-zinc-400 text-xs mt-0.5 font-sans">
                Curated acoustic audio, heavy iron bars, and competition turf.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Dumbbell className="w-5 h-5 text-[#ff1824] shrink-0 mt-0.5" />
            <div>
              <div className="font-display font-black text-sm uppercase text-white">
                CALIBRATED WEIGHTS
              </div>
              <div className="text-zinc-400 text-xs mt-0.5 font-sans">
                IPF spec steel plates, dumbbell pairs up to 70kg, and custom racks.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#ff1824] shrink-0 mt-0.5" />
            <div>
              <div className="font-display font-black text-sm uppercase text-white">
                ELITE STANDARDS
              </div>
              <div className="text-zinc-400 text-xs mt-0.5 font-sans">
                Every member is guided with dedicated form checkups and safety standards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
