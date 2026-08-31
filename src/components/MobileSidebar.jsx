import React, { useEffect } from 'react';
import { 
  Terminal, 
  Code2, 
  Rocket, 
  GraduationCap, 
  Mail, 
  FileText, 
  X, 
  Volume2, 
  VolumeX, 
  Github, 
  Linkedin, 
  Bot,
  Heart,
  ExternalLink,
  Cpu,
  Radio,
  ChevronRight
} from 'lucide-react';
import { playCyberClick, playCyberHover } from '../utils/soundEffects';

const MobileSidebar = ({
  isOpen,
  onClose,
  activeSection,
  soundOn,
  onToggleSound,
  onOpenResume,
  onOpenParentalView,
  navLinks
}) => {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
        isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
      }`}
      aria-label="Mobile Navigation Sidebar"
      role="dialog"
      aria-modal="true"
    >
      {/* Dimmed & Blurred Backdrop Overlay */}
      <div 
        onClick={() => {
          playCyberClick();
          onClose();
        }}
        className={`absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Slide-in Cyber Sidebar Panel */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#030718] border-l border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.2)] flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out scanlines ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Futuristic Corner HUD Accents */}
        <div className="hud-corner-tl !border-cyan-400 !w-3 !h-3" />
        <div className="hud-corner-bl !border-cyan-400 !w-3 !h-3" />

        {/* Sidebar Header */}
        <div className="p-5 border-b border-cyan-500/20 bg-[#050c26]/90 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            {/* User identity & Status */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#09153a] border border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                <span className="font-mono font-extrabold text-cyan-300 text-sm">GC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-xs tracking-wider text-white uppercase">
                  GOPAL CHAUHAN
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    SYS-ONLINE • V2.4
                  </span>
                </div>
              </div>
            </div>

            {/* Close 'X' Button */}
            <button
              onClick={() => {
                playCyberClick();
                onClose();
              }}
              onMouseEnter={playCyberHover}
              className="w-9 h-9 rounded-xl bg-[#07112c] border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Close sidebar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Links Area */}
        <div className="flex-1 px-4 py-5 space-y-1.5 overflow-y-auto">
          <div className="px-2 pb-2 text-[10px] font-mono font-semibold text-cyan-400/70 tracking-widest uppercase flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-cyan-400" />
            <span>NAVIGATION MATRIX</span>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            const targetId = link.href.replace('#', '');
            const isActive = activeSection === targetId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playCyberClick();
                  onClose();
                }}
                onMouseEnter={playCyberHover}
                className={`group flex items-center justify-between px-3.5 py-3 rounded-xl font-mono text-xs transition-all duration-200 ${
                  isActive
                    ? 'bg-[#091b48] text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] font-semibold'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-[#07112c]/80 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg transition-colors ${
                    isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900/80 text-slate-400 group-hover:text-cyan-400'
                  }`}>
                    <Icon className="w-4 h-4 shrink-0" />
                  </div>
                  <span>{link.name}</span>
                </div>

                <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isActive ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'
                }`} />
              </a>
            );
          })}

          {/* Divider */}
          <div className="pt-3 pb-1">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          </div>

          {/* Quick Special Actions in Sidebar */}
          <div className="space-y-2 pt-1">
            {/* Family & Parents View Modal Trigger */}
            <button
              onClick={() => {
                playCyberClick();
                onClose();
                onOpenParentalView();
              }}
              onMouseEnter={playCyberHover}
              className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl bg-[#1a0820] hover:bg-[#280d32] border border-pink-500/40 hover:border-pink-400 text-pink-300 font-mono text-xs transition-all shadow-[0_0_12px_rgba(236,72,153,0.15)] group"
            >
              <div className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-pink-400 fill-pink-500/30 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Family & Parents View</span>
              </div>
              <span className="text-[10px] text-pink-400/80 font-mono">OPEN →</span>
            </button>

            {/* Flight Bio / Resume Download CTA */}
            <button
              onClick={() => {
                playCyberClick();
                onClose();
                onOpenResume();
              }}
              onMouseEnter={playCyberHover}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-mono font-extrabold text-xs transition-all shadow-[0_0_18px_rgba(0,240,255,0.4)] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>Access Flight Bio / Resume</span>
            </button>
          </div>
        </div>

        {/* Sidebar Footer: Audio & Social Links */}
        <div className="p-4 border-t border-cyan-500/20 bg-[#04081c]/95">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span>COMMUNICATION</span>
            </span>

            {/* Audio Toggle in Footer */}
            <button
              onClick={() => {
                onToggleSound();
              }}
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#07112c] border border-cyan-500/30 text-[10px] font-mono text-cyan-300 hover:border-cyan-400 transition-all"
            >
              {soundOn ? (
                <>
                  <Volume2 className="w-3 h-3 text-cyan-400" />
                  <span>AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3 text-slate-500" />
                  <span>MUTED</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://github.com/GopalAI07"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="flex items-center justify-center gap-2 py-2 rounded-xl bg-[#081230] border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 font-mono text-xs transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>

            <a
              href="https://www.linkedin.com/in/gopal-chauhan-1b5949264/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCyberClick}
              className="flex items-center justify-center gap-2 py-2 rounded-xl bg-[#081230] border border-slate-700 hover:border-blue-400 text-slate-300 hover:text-blue-300 font-mono text-xs transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>

          <div className="mt-3 text-center">
            <p className="text-[9px] font-mono text-slate-500">
              GOPAL CHAUHAN • ALL SYSTEMS OPERATIONAL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
