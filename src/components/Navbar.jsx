import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code2, 
  Rocket, 
  GraduationCap, 
  Mail, 
  FileText, 
  Menu, 
  Volume2, 
  VolumeX, 
  Github, 
  Linkedin, 
  Bot
} from 'lucide-react';
import { playCyberClick, playCyberHover, toggleSound } from '../utils/soundEffects';
import MobileSidebar from './MobileSidebar';

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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-[#020512]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl shadow-cyan-950/40' 
          : 'py-3 bg-transparent'
      }`}>
        <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2">
          
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
                PYTHON FULL STACK DEVELOPER
              </span>
            </div>
          </a>

          {/* Center: Nav Links Pod Capsule (Desktop Only) */}
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

          {/* Right: Desktop Actions Row (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-1.5 sm:gap-2 shrink-0">
            
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
          </div>

          {/* Right: Mobile Viewers Quick Bar & Sidebar Toggle (Mobile Only) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Quick Audio Toggle for Mobile */}
            <button
              onClick={handleSoundToggle}
              aria-label="Toggle Sound Effects"
              className="w-8 h-8 rounded-xl bg-[#060c22] border border-slate-800 text-cyan-400 flex items-center justify-center shrink-0 active:scale-95"
              title={soundOn ? "Audio: ON" : "Audio: OFF"}
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
            </button>

            {/* Compact Flight Bio button on Mobile */}
            <button
              onClick={() => {
                playCyberClick();
                onOpenResume();
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-mono font-extrabold text-[11px] shadow-[0_0_10px_rgba(0,240,255,0.3)] active:scale-95 shrink-0"
              title="Open Resume / Flight Bio"
            >
              <FileText className="w-3.5 h-3.5 text-slate-950" />
              <span>Bio</span>
            </button>

            {/* Dedicated Mobile Sidebar Toggle Button */}
            <button
              onClick={() => {
                playCyberClick();
                setMobileMenuOpen(true);
              }}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#07112c] border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 hover:border-cyan-400 focus:outline-none shadow-[0_0_12px_rgba(0,240,255,0.2)] active:scale-95 shrink-0"
              aria-label="Open Navigation Sidebar"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Exclusively for Mobile Viewers: Slide-in Cyber Navigation Sidebar */}
      <MobileSidebar 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        soundOn={soundOn}
        onToggleSound={handleSoundToggle}
        onOpenResume={onOpenResume}
        onOpenParentalView={onOpenParentalView}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;
