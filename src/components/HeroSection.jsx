import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Terminal as TerminalIcon, 
  Sparkles, 
  Cpu, 
  Radio, 
  Radar, 
  Compass, 
  Orbit, 
  ShieldAlert, 
  Code,
  Flame
} from 'lucide-react';
import Hero3D from './Hero3D';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberHover } from '../utils/soundEffects';

const HeroSection = ({ onOpenResume, onOpenParentalView }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Deep Space Nebula Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Space Telemetry Bar */}
        <div className="hidden sm:flex items-center justify-between py-1.5 px-4 mb-6 rounded-lg bg-[#070e24]/80 border border-cyan-500/20 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Radar className="w-3.5 h-3.5 animate-spin" />
              <span>ORBITAL RECON: ACTIVE</span>
            </span>
            <span>•</span>
            <span>COORD: [19.2045° N, 72.8376° E] MUMBAI SECTOR</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">STATUS: COMBAT / AI READY</span>
            <span>•</span>
            <span className="text-purple-400">SYSTEM ID: MECHA-GC07</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Robotic Bio & Space Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Unit Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0a122e] border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-950/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-bold tracking-wider">UNIT: GOPAL-DEV</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">FULL-STACK SOFTWARE DEVELOPER</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold tracking-widest uppercase flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Full-Stack Web & Software Engineering</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
                <span className="block text-slate-100">{personalInfo.name}</span>
                <span className="block gradient-text-plasma mt-1">
                  Full-Stack Developer
                </span>
              </h1>
            </div>

            {/* Subtitle with Robotic Precision */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Architecting responsive <span className="text-cyan-300 font-medium">React 18 frontends</span>, 
              high-throughput <span className="text-purple-300 font-medium">FastAPI & Django backends</span>, 
              scalable <span className="text-emerald-300 font-medium">PostgreSQL & MySQL databases</span>, 
              and real-time <span className="text-blue-300 font-medium">WebRTC & WebSockets</span>.
            </p>

            {/* Robotic Subsystem Telemetry Chips */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="px-3 py-1 bg-[#091129] border border-cyan-500/30 rounded flex items-center gap-1.5 shadow-sm">
                <Code className="w-3.5 h-3.5 text-cyan-400" /> React 18 & Vite
              </span>
              <span className="px-3 py-1 bg-[#091129] border border-purple-500/30 rounded flex items-center gap-1.5 shadow-sm">
                <Flame className="w-3.5 h-3.5 text-purple-400" /> FastAPI & Django
              </span>
              <span className="px-3 py-1 bg-[#091129] border border-blue-500/30 rounded flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /> PostgreSQL & MySQL
              </span>
              <span className="px-3 py-1 bg-[#091129] border border-emerald-500/30 rounded flex items-center gap-1.5 shadow-sm">
                <Radio className="w-3.5 h-3.5 text-emerald-400" /> WebSockets & WebRTC
              </span>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              
              {/* Explore Missions Button */}
              <a
                href="#projects"
                onClick={playCyberClick}
                onMouseEnter={playCyberHover}
                className="px-5 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] transition-all duration-300 glow-btn"
              >
                <span>Initialize Missions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View Resume Button */}
              <button
                onClick={() => {
                  playCyberClick();
                  onOpenResume();
                }}
                onMouseEnter={playCyberHover}
                className="px-4 py-3.5 rounded-lg bg-[#091129] border border-cyan-500/40 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 font-semibold text-sm flex items-center gap-2 transition-all duration-300 backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Flight Bio</span>
              </button>

              {/* Family & Parents View Button */}
              <button
                onClick={() => {
                  playCyberClick();
                  onOpenParentalView();
                }}
                onMouseEnter={playCyberHover}
                className="px-4 py-3.5 rounded-lg bg-pink-950/40 hover:bg-pink-900/60 border border-pink-500/40 text-pink-300 font-semibold text-sm flex items-center gap-2 transition-all duration-300 backdrop-blur-md"
                title="View simple family & parental friendly summary"
              >
                <span className="text-pink-400">♥</span>
                <span>Family View</span>
              </button>

              {/* Try CLI Terminal */}
              <a
                href="#terminal"
                onClick={playCyberClick}
                onMouseEnter={playCyberHover}
                className="px-3.5 py-3.5 rounded-lg bg-slate-900/90 border border-slate-700/80 hover:border-purple-500/50 text-slate-300 hover:text-purple-300 text-sm font-mono flex items-center gap-1.5 transition-all"
              >
                <TerminalIcon className="w-4 h-4 text-purple-400" />
                <span>CLI</span>
              </a>
            </div>

            {/* Deep Space Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-cyan-500/20">
              <div className="p-3 rounded-lg bg-[#060c22] border border-slate-800">
                <div className="text-2xl font-bold font-mono text-cyan-400">7.83</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">B.E. AI & DS CGPI</div>
              </div>
              <div className="p-3 rounded-lg bg-[#060c22] border border-slate-800">
                <div className="text-2xl font-bold font-mono text-purple-400">3+</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Production Deployments</div>
              </div>
              <div className="p-3 rounded-lg bg-[#060c22] border border-slate-800">
                <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Cloud Availability</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Robotic Space Mecha Viewport */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Mech Viewport Frame */}
            <div className="w-full relative rounded-xl p-[1px] bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-purple-600/50 shadow-2xl shadow-cyan-950/80">
              <div className="w-full h-full bg-[#030616] rounded-[11px] overflow-hidden relative backdrop-blur-xl">
                
                {/* Mech Viewport Header Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#060d24] border-b border-cyan-500/20 text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-cyan-300 font-bold">MECHA_PROBE_3D.v4</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span>FPS: 60</span>
                    <span>•</span>
                    <span className="text-emerald-400">SYS_OK</span>
                  </div>
                </div>

                {/* 3D Canvas rendering */}
                <Hero3D />

                {/* Robotic HUD Corner Brackets */}
                <div className="hud-corner-tl m-2 pointer-events-none" />
                <div className="hud-corner-tr m-2 pointer-events-none" />
                <div className="hud-corner-bl m-2 pointer-events-none" />
                <div className="hud-corner-br m-2 pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
