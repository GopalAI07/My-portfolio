import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  FileBadge,
  Code2,
  Terminal,
  Orbit,
  Cpu,
  ExternalLink
} from 'lucide-react';
import { educationData, certificatesData } from '../data/portfolioData';
import { playCyberClick, playCyberHover } from '../utils/soundEffects';

const certIcons = {
  Code2: Code2,
  Terminal: Terminal,
  Sparkles: Sparkles,
  FileBadge: FileBadge,
};

const EducationTimeline = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#060e28] border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Orbit className="w-3.5 h-3.5" />
            <span>[SUBSYSTEM 04: ACADEMIC RECORDS & CERTIFICATIONS]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Academic & <span className="gradient-text-plasma">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Formal engineering degree in Artificial Intelligence & Data Science alongside certified software engineering competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Engineering Academy</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 space-y-10">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Glowing Robotic Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded bg-[#02040d] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#00f0ff] transition-all" />

                  <div className="mech-card p-6 border border-slate-800 bg-[#050a1e]/90 group-hover:border-cyan-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                        {edu.badge}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {edu.duration}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white font-display mt-1">
                      {edu.degree}
                    </h4>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-cyan-400 mt-1 mb-4">
                      <span>{edu.institution}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-emerald-400 font-bold">{edu.grade}</span>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      {edu.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="hud-corner-tr" />
                    <div className="hud-corner-bl" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Verification */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-purple-400" />
              <span>Certificates & Training</span>
            </h3>

            <div className="space-y-4">
              {certificatesData.map((cert, idx) => {
                const Icon = certIcons[cert.icon] || FileBadge;
                return (
                  <div
                    key={idx}
                    onMouseEnter={playCyberHover}
                    className="mech-card p-5 border border-slate-800 hover:border-purple-500/50 bg-[#060c22]/90 transition-all group space-y-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-xs font-mono text-slate-400">
                            {cert.issuer} • {cert.category}
                          </p>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold shrink-0">
                        {cert.date}
                      </span>
                    </div>

                    {/* Certificate Links */}
                    {cert.links && cert.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60 font-mono text-xs">
                        {cert.links.map((link, lIdx) => (
                          <span
                            key={lIdx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[11px]"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-2.5 h-2.5 text-cyan-400" />
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Academic Summary Highlight Badge */}
            <div className="mech-panel p-6 rounded-xl border border-cyan-500/30 space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Degree Specialization Highlights</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Graduated with strong technical competencies in <strong>Python Full-Stack Development, Artificial Intelligence, Data Science</strong>, and <strong>Relational Database Architectures</strong> from Rizvi College of Engineering, Bandra.
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800">
                <span>RIZVI COLLEGE OF ENGINEERING</span>
                <span className="text-cyan-300 font-bold">Aggregate CGPI: 7.83</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationTimeline;
