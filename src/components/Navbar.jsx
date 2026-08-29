import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code2, 
  Rocket, 
  GraduationCap, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Github, 
  Linkedin,
  Bot
} from 'lucide-react';
import { playCyberClick, playCyberHover, toggleSound } from '../utils/soundEffects';

const Navbar = ({ onOpenResume, onOpenParentalView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'terminal', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    toggleSound(newState);
    if (newState) playCyberClick();
  };

  const navLinks = [
    { name: 'Profile', href: '#about', icon: Bot },
    { name: 'Arsenal', href: '#skills', icon: Code2 },
    { name: 'Missions', href: '#projects', icon: Rocket },
    { 
      name: 'Flight Logs', 
      href: '#education', 
      icon: GraduationCap,
      multiline: true,
      line1: 'Flight',
      line2: 'Logs'
    },
    { 
      name: 'Terminal CLI', 
      href: '#terminal', 
      icon: Terminal,
      multiline: true,
      line1: 'Terminal',
      line2: 'CLI'
    },
    { 
      name: 'Sub-Space Comm', 
      href: '#contact', 
      icon: Mail,
      multiline: true,
      line1: 'Sub-Space',
      line2: 'Comm'
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2 bg-[#020512]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl shadow-cyan-950/40' 
        : 'py-3 bg-transparent'
    }`}>
      <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between gap-1.5 sm:gap-2">
        
        {/* Left: Brand Logo & Title */}
        <a 
          href="#hero" 
          onClick={playCyberClick}
          onMouseEnter={playCyberHover}
          className="flex items-center gap-2 group focus:outline-none shrink-0"
        >
          {/* Logo Badge */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#060b1e] border border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.35)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] group-hover:scale-105 transition-all duration-300 shrink-0">
            <span className="font-mono font-extrabold text-cyan-400 text-xs sm:text-sm tracking-wider">
              GC
            </span>
          </div>

          <div className="flex flex-col text-left">
            <span className="font-mono font-bold text-xs sm:text-[13px] tracking-wide text-white group-hover:text-cyan-300 transition-colors uppercase whitespace-nowrap">
              GOPAL CHAUHAN
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono text-cyan-400 tracking-wider uppercase font-semibold whitespace-nowrap">
              FULL-STACK DEVELOPER
            </span>
          </div>
        </a>

        {/* Center: Nav Links Pod Capsule (Always kept visible on standard screens) */}
        <nav className="hidden lg:flex items-center gap-0.5 sm:gap-1 bg-[#050b22]/90 px-2 py-1 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-md shadow-cyan-950/50 shrink-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const targetId = link.href.replace('#', '');
            const isActive = activeSection === targetId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={playCyberClick}
                onMouseEnter={playCyberHover}
                className={`px-2 py-1 rounded-lg text-[11px] font-mono transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#09183d] text-cyan-300 border border-cyan-400/80 shadow-[0_0_10px_rgba(0,240,255,0.35)] font-semibold'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-[#091535]/60 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                
                {link.multiline ? (
                  <div className="flex flex-col text-left leading-tight text-[10px]">
                    <span>{link.line1}</span>
                    <span>{link.line2}</span>
                  </div>
                ) : (
                  <span>{link.name}</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions Row */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Family View Button */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenParentalView();
            }}
            onMouseEnter={playCyberHover}
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-xl bg-[#1d0a24] hover:bg-[#2c0f37] border border-pink-500/50 hover:border-pink-400 text-pink-300 text-[10px] sm:text-[11px] font-mono transition-all shadow-[0_0_8px_rgba(236,72,153,0.2)] shrink-0"
            title="Family & Parents Friendly View"
          >
            <span className="text-pink-400 text-[10px]">♥</span>
            <div className="flex flex-col text-left leading-tight font-medium whitespace-nowrap">
              <span>Family</span>
              <span>View</span>
            </div>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            aria-label="Toggle Sound Effects"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#060c22] border border-slate-800 hover:border-cyan-500/50 text-cyan-400 hover:text-cyan-300 transition-all flex items-center justify-center shrink-0"
            title={soundOn ? "Audio: ON" : "Audio: OFF"}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/GopalAI07"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#060c22] border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all flex items-center justify-center shrink-0"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/gopal-chauhan-1b5949264/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#060c22] border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-all flex items-center justify-center shrink-0"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          {/* Flight Bio CTA Button */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenResume();
            }}
            onMouseEnter={playCyberHover}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-mono font-bold text-[10px] sm:text-[11px] transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_22px_rgba(0,240,255,0.65)] hover:scale-[1.02] shrink-0 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950 shrink-0" />
            <div className="flex flex-col text-left leading-tight font-extrabold">
              <span>Flight</span>
              <span>Bio</span>
            </div>
          </button>

          {/* Mobile Menu Toggle for small mobile screens only */}
          <button
            onClick={() => {
              playCyberClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-1.5 rounded-xl bg-[#060c22] border border-slate-700 text-slate-300 hover:text-cyan-300 focus:outline-none shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu for phones */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030718]/95 border-b border-cyan-500/30 backdrop-blur-2xl px-6 py-5 mt-2 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2 font-mono">
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
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-[#09183d] text-cyan-300 border border-cyan-400/80 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-[#060e28] border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            
            <button
              onClick={() => {
                playCyberClick();
                setMobileMenuOpen(false);
                onOpenParentalView();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 rounded-xl bg-[#1d0a24] border border-pink-500/50 text-pink-300 font-bold text-xs shadow-sm"
            >
              <span>♥</span>
              <span>Family View</span>
            </button>

            <button
              onClick={() => {
                playCyberClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 mt-1 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/30"
            >
              <FileText className="w-4 h-4" />
              <span>Access Flight Bio</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
