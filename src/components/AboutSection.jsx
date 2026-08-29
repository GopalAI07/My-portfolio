import React from 'react';
import { 
  Bot, 
  Brain, 
  Cpu, 
  Orbit, 
  Globe, 
  Languages, 
  Smile, 
  CheckCircle2, 
  Sparkles, 
  Terminal,
  MapPin,
  Shield,
  Radar
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberHover } from '../utils/soundEffects';

const AboutSection = () => {
  const coreCompetencies = [
    {
      icon: Brain,
      title: "Generative AI & LLM Systems",
      desc: "Integrating Google Gemini (google-genai) into autonomous summarization pipelines, NLP sentiment engines, and conversational AI interfaces."
    },
    {
      icon: Cpu,
      title: "Full-Stack Robotic Architecture",
      desc: "Engineering high-speed backends with FastAPI and Django (MVT pattern) with reactive React 18 frontend interfaces."
    },
    {
      icon: Radar,
      title: "Real-Time Telemetry & WebRTC",
      desc: "Designing peer-to-peer audio/video streaming, low-latency WebSocket signaling relays, and multi-user room matrices."
    },
    {
      icon: Globe,
      title: "Deep Space Data Mining & Viz",
      desc: "Developing analytical dashboards with Streamlit, Plotly, Pandas, and NumPy for political sentiment analysis and data exploration."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#060e28] border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Bot className="w-3.5 h-3.5" />
            <span>[SUBSYSTEM 01: ENGINEER PROFILE & DIRECTIVES]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Engineer Profile & <span className="gradient-text-plasma">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Artificial Intelligence & Data Science Engineer specialized in resilient, mission-critical full-stack software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Deep Bio & Mecha Panel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Cyber Bio Panel */}
            <div className="mech-panel p-6 sm:p-8 rounded-xl relative overflow-hidden group">
              
              <div className="flex items-center justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Mission Directive & Objective</h3>
                    <p className="text-xs font-mono text-cyan-400">SECTOR: MUMBAI (IN) | DEPLOYMENT STATUS: ACTIVE</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-mono text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  SYS.ID: GC-400067
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-5 font-sans">
                {personalInfo.summary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Mastery in <strong>Python Object-Oriented Programming (OOP)</strong>, MVT architectures, and algorithmic optimizations.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Proven record of deploying <strong>cloud-native AI systems</strong> across Vercel and Render with live authentication.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Deep commitment to clean modular architecture, high precision, and mission success.</span>
                </div>
              </div>
            </div>

            {/* Languages & Personal Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Spoken Languages */}
              <div className="mech-card p-5 border border-slate-800 hover:border-cyan-500/40">
                <div className="flex items-center gap-2 text-cyan-400 mb-3 font-mono text-xs uppercase tracking-wider font-semibold">
                  <Languages className="w-4 h-4" />
                  <span>Linguistic Protocols</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded bg-[#060c20] border border-cyan-500/20 text-xs font-mono text-slate-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests & Hobbies */}
              <div className="mech-card p-5 border border-slate-800 hover:border-purple-500/40">
                <div className="flex items-center gap-2 text-purple-400 mb-3 font-mono text-xs uppercase tracking-wider font-semibold">
                  <Smile className="w-4 h-4" />
                  <span>Personal Recreations</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.hobbies.map((hobby) => (
                    <span
                      key={hobby}
                      className="px-3 py-1 rounded bg-[#060c20] border border-purple-500/20 text-xs font-mono text-slate-200"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: 4 Core Competency Mech Modules */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {coreCompetencies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={playCyberHover}
                  className="mech-card p-5 border border-slate-800/80 hover:border-cyan-500/50 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#07122b] border border-cyan-500/30 text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[10px] text-slate-500">MOD-{idx + 1}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Sector Ribbon */}
            <div className="p-4 rounded-lg bg-[#060e28] border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Kandivali West, Mumbai - 400067, IN</span>
              </div>
              <a
                href="#contact"
                onClick={playCyberClick}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
              >
                Transmit Signal &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
