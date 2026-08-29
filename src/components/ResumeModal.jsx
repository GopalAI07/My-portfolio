import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData, certificatesData } from '../data/portfolioData';
import { playCyberClick } from '../utils/soundEffects';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playCyberClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Control Header */}
        <div className="px-6 py-4 bg-[#080e26] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <h3 className="text-sm font-mono font-bold text-slate-200">
              GOPAL_CHAUHAN_RESUME.pdf (Interactive Document Preview)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={() => {
                playCyberClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 max-h-[78vh] overflow-y-auto bg-slate-950 text-slate-100 font-sans space-y-6 print:bg-white print:text-black print:p-0 print:max-h-none">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-wide">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mt-1 uppercase tracking-wider">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono mt-3">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.location}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.email}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.phone}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-400 mt-2">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                LinkedIn: linkedin.com/in/gopal-chauhan-1b5949264
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                GitHub: github.com/GopalAI07
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-300 font-mono">
              <div>• Frontend Engineering: React 18, Vite, JavaScript (ES6+), Three.js, Redux Toolkit, Tailwind CSS</div>
              <div>• Backend Development: Python (OOP), FastAPI, Django (MVT), RESTful APIs, JWT Auth</div>
              <div>• Databases & Data: PostgreSQL, MySQL, SQL Query Optimization, SQLAlchemy ORM</div>
              <div>• Real-Time & Networking: WebSockets, WebRTC Video/Audio Calling & Signaling</div>
              <div>• Cloud & DevOps: Git/GitHub, Vercel, Render, Postman API Testing & Debugging</div>
              <div>• Tools & Integrations: Google Gemini API, Streamlit, Pandas, NumPy, Bootstrap 5</div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              PROJECTS
            </h2>

            {projectsData.map((project) => (
              <div key={project.id} className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between text-xs font-bold text-white">
                  <span className="text-sm font-display text-cyan-300">{project.title.toUpperCase()}</span>
                  <span className="text-slate-400 font-mono text-[11px]">Languages: {project.languages.join(', ')}</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  <strong className="text-slate-300">Frameworks/Libraries:</strong> {project.tags.join(', ')}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5 pl-1">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 text-[11px] font-mono text-cyan-400 pt-1">
                  {project.websiteLink && (
                    <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Website: {project.websiteLink}
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      GitHub: {project.githubLink}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              EDUCATION
            </h2>

            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-0.5 text-xs">
                <div className="flex justify-between font-bold text-white">
                  <span>{edu.degree.toUpperCase()}</span>
                  <span className="font-mono text-slate-400">{edu.duration}</span>
                </div>
                <div className="flex justify-between text-slate-400 font-mono text-[11px]">
                  <span>{edu.institution}</span>
                  <span className="text-emerald-400 font-bold">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              CERTIFICATES
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
              {certificatesData.map((c, i) => (
                <li key={i}><strong>{c.title}</strong></li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div className="space-y-1 text-xs text-slate-300 pt-2 border-t border-slate-800 font-mono">
            <div>• <strong>Languages:</strong> {personalInfo.languages.join(', ')}</div>
            <div>• <strong>Hobbies:</strong> {personalInfo.hobbies.join(', ')}</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
