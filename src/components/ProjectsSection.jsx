import React, { useState } from 'react';
import { 
  Rocket, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Video, 
  BarChart3, 
  BookOpen, 
  Cpu, 
  Radio, 
  Globe, 
  Orbit,
  Layers,
  Layout
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { playCyberClick, playCyberHover } from '../utils/soundEffects';

const projectIcons = {
  Video: Video,
  Layers: Layers,
  Layout: Layout,
  BarChart3: BarChart3,
  BookOpen: BookOpen,
};

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', ...new Set(projectsData.flatMap((p) => p.tags))].slice(0, 10);

  const filteredProjects = selectedTag === 'All'
    ? projectsData
    : projectsData.filter((p) => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#060e28] border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Rocket className="w-3.5 h-3.5" />
            <span>[SUBSYSTEM 03: MISSION DEPLOYMENTS & PROTOCOLS]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Featured Full-Stack <span className="gradient-text-plasma">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Production-grade full-stack web platforms, real-time conferencing systems, and enterprise web applications deployed to cloud environments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                playCyberClick();
                setSelectedTag(tag);
              }}
              onMouseEnter={playCyberHover}
              className={`px-3.5 py-1.5 rounded text-xs font-mono transition-all ${
                selectedTag === tag
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-[#060c20] border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const Icon = projectIcons[project.icon] || Cpu;

            return (
              <div
                key={project.id}
                onMouseEnter={playCyberHover}
                className="mech-card p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/50 bg-[#050a1e]/90 relative overflow-hidden group"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Project Overview & Features */}
                  <div className="lg:col-span-8 space-y-5">
                    
                    {/* Header Info */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-medium flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" />
                          MISSION: {project.badge.toUpperCase()}
                        </span>
                        {project.websiteLink && (
                          <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                            <Radio className="w-3 h-3 animate-pulse" />
                            DEPLOYED TO CLOUD
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display flex items-center gap-3">
                        <span>{project.title}</span>
                      </h3>

                      <p className="text-xs sm:text-sm font-mono text-cyan-300">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Key Architecture Features */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                        MISSION PROTOCOLS & ARCHITECTURE
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-[#030717] border border-cyan-500/20 text-[11px] font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Project Meta / Stats & Action Portal */}
                  <div className="lg:col-span-4 space-y-4">
                    
                    {/* Stats Box */}
                    <div className="p-5 rounded-lg bg-[#070f2b] border border-cyan-500/20 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                        <Icon className="w-4 h-4" />
                        <span>TELEMETRY METRICS</span>
                      </div>

                      <div className="space-y-2.5">
                        {project.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="flex justify-between items-center text-xs">
                            <span className="text-slate-400 font-mono">{stat.label}</span>
                            <span className="text-slate-200 font-semibold font-mono bg-[#030717] px-2 py-0.5 rounded border border-slate-800">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Live Demo & GitHub */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-2">
                      {project.websiteLink && (
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playCyberClick}
                          className="w-full py-3 px-4 rounded bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all glow-btn"
                        >
                          <Globe className="w-4 h-4" />
                          <span>LAUNCH PRODUCTION SITE</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playCyberClick}
                        className="w-full py-3 px-4 rounded bg-[#070f2b] hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>SOURCE CODE REPO</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                </div>

                {/* Mech Footing Corner Marks */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                {/* Footer bar */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>DEPLOYMENT ID: {project.id.toUpperCase()}</span>
                  <span>CORE: {project.languages.join(' & ')}</span>
                  <span>VERIFICATION: PASSED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
