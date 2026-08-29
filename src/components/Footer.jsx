import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Cpu, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberHover } from '../utils/soundEffects';

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02040d] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      
      {/* Plasma Thruster Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00f0ff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center p-[1px] shadow-lg shadow-cyan-500/30">
                <div className="w-full h-full bg-[#030718] rounded-[11px] flex items-center justify-center font-display font-extrabold text-cyan-400 text-base tracking-wider">
                  GC
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base text-white font-display">GOPAL CHAUHAN</h4>
                <p className="text-xs font-mono text-cyan-400">MECHA AI & DATA SCIENCE ENGINEER</p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-sans">
              Engineering interstellar-grade AI solutions, low-latency WebRTC platforms, and resilient full-stack systems in deep space.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playCyberClick}
                onMouseEnter={playCyberHover}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playCyberClick}
                onMouseEnter={playCyberHover}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                onClick={playCyberClick}
                onMouseEnter={playCyberHover}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h5 className="text-white uppercase tracking-wider font-bold">Quick Navigation</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" onClick={playCyberClick} className="hover:text-cyan-300 transition-colors">/ About Profile</a></li>
              <li><a href="#skills" onClick={playCyberClick} className="hover:text-cyan-300 transition-colors">/ Skills & Stack</a></li>
              <li><a href="#projects" onClick={playCyberClick} className="hover:text-cyan-300 transition-colors">/ Featured Projects</a></li>
              <li><a href="#education" onClick={playCyberClick} className="hover:text-cyan-300 transition-colors">/ Education & Degree</a></li>
              <li><a href="#terminal" onClick={playCyberClick} className="hover:text-cyan-300 transition-colors">/ Developer Terminal</a></li>
            </ul>
          </div>

          {/* Quick Links & Meta */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h5 className="text-white uppercase tracking-wider font-bold">Contact Coordinates</h5>
            <div className="space-y-1.5 text-slate-400">
              <p>Email: <span className="text-cyan-400">{personalInfo.email}</span></p>
              <p>Phone: <span className="text-purple-400">{personalInfo.phone}</span></p>
              <p>Location: <span className="text-slate-300">{personalInfo.location}</span></p>
              <p className="pt-2">Status: <span className="text-emerald-400 font-semibold">● Open to Hiring</span></p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Gopal Chauhan. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            onMouseEnter={playCyberHover}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 text-xs transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
