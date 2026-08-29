import React, { useState } from 'react';
import { 
  Cpu, 
  Brain, 
  Server, 
  Layout, 
  Database, 
  Sparkles, 
  Zap, 
  Terminal,
  Activity,
  Layers,
  Radio
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { playCyberClick, playCyberHover } from '../utils/soundEffects';

const categoryIcons = {
  Brain: Brain,
  Server: Server,
  Layout: Layout,
  Database: Database,
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillsData.categories
    : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#060e28] border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>[SUBSYSTEM 02: NEURAL MATRIX & ARSENAL]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Robotic Arsenal & <span className="gradient-text-plasma">Subsystems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Calibrated telemetry and weaponized competencies across Artificial Intelligence, Web Platforms, Backend Architectures, and Databases.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <button
            onClick={() => {
              playCyberClick();
              setActiveCategory('all');
            }}
            className={`px-4 py-2 rounded text-xs font-mono transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                : 'bg-[#060c20] border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30'
            }`}
          >
            [ALL SUBSYSTEMS]
          </button>
          
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playCyberClick();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={playCyberHover}
              className={`px-4 py-2 rounded text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-500/25'
                  : 'bg-[#060c20] border border-slate-800 text-slate-400 hover:text-purple-300 hover:border-purple-500/30'
              }`}
            >
              [{cat.title.toUpperCase()}]
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.icon] || Cpu;
            return (
              <div
                key={category.id}
                className="mech-card p-6 border border-slate-800/80 hover:border-cyan-500/50 bg-[#060c22]/90 relative overflow-hidden group"
              >
                {/* Header of Category */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0a1433] border border-cyan-500/30 text-cyan-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400/80">
                        {category.skills.length} Calibrated Modules
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    ONLINE
                  </div>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5 group/skill">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-slate-200 flex items-center gap-1.5 group-hover/skill:text-cyan-300 transition-colors">
                          {skill.highlight && (
                            <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                          )}
                          {skill.name}
                        </span>
                        <span className="font-mono text-cyan-400 text-[11px]">
                          {skill.level}% POWER
                        </span>
                      </div>
                      
                      {/* Robotic Segmented Progress Bar */}
                      <div className="w-full h-2 bg-[#020512] rounded overflow-hidden p-[1px] border border-slate-800">
                        <div
                          className="h-full rounded transition-all duration-1000 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />
              </div>
            );
          })}
        </div>

        {/* Foundational Engineering Principles */}
        <div className="mech-panel p-6 sm:p-8 rounded-xl border border-cyan-500/20">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Architecture & Foundational Principles</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {skillsData.coreHighlights.map((concept, idx) => (
              <div
                key={idx}
                onMouseEnter={playCyberHover}
                className="p-3 rounded bg-[#060c20] border border-slate-800 hover:border-cyan-500/50 transition-all text-center group cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mx-auto mb-2 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
                <span className="text-xs font-mono text-slate-300 group-hover:text-cyan-300 transition-colors">
                  {concept}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
