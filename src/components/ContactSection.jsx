import React, { useState } from 'react';
import { 
  Radio, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  Sparkles, 
  ExternalLink,
  Satellite
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { playCyberClick, playCyberHover, playSuccessChime } from '../utils/soundEffects';

const ContactSection = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    playCyberClick();
    
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 }
    });

    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccessChime();

    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.6 }
    });

    setSentSuccess(true);

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `[Deep Space Comm] Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nTransmission:\n${formData.message}`
    )}`;

    window.open(mailtoLink, '_blank');

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSentSuccess(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#060e28] border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Satellite className="w-3.5 h-3.5" />
            <span>[SUBSYSTEM 06: SUB-SPACE QUANTUM RELAY]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Quantum <span className="gradient-text-plasma">Transmission Portal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Transmit signals for high-impact AI engineering roles, mission-critical systems, and full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Communication Channels & Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="mech-panel p-6 sm:p-8 rounded-xl space-y-6">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Radio className="w-5 h-5 text-cyan-400" />
                <span>Active Comm Frequency</span>
              </h3>

              {/* Email Relay */}
              <div className="p-4 rounded bg-[#060d24] border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-cyan-400/80 uppercase">Subspace Email</p>
                    <p className="text-sm font-semibold text-slate-200 truncate group-hover:text-cyan-300 transition-colors font-mono">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all shrink-0"
                  title="Copy email frequency"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Comm */}
              <div className="p-4 rounded bg-[#060d24] border border-slate-800 hover:border-purple-500/40 transition-all flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded bg-purple-500/10 text-purple-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-purple-400/80 uppercase">Audio Comm Line</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors font-mono">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded bg-slate-800 hover:bg-purple-500 hover:text-slate-950 text-slate-300 transition-all shrink-0"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Station */}
              <div className="p-4 rounded bg-[#060d24] border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-emerald-400/80 uppercase">Base Station Coordinates</p>
                  <p className="text-sm font-semibold text-slate-200 font-mono">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Orbit Profiles */}
              <div className="pt-2">
                <p className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                  Network Linkages
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded bg-[#060f2e] hover:bg-blue-600/20 border border-blue-500/30 text-slate-200 hover:text-blue-300 flex items-center justify-center gap-2 text-xs font-mono font-medium transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playCyberClick}
                    className="p-3 rounded bg-[#060f2e] hover:bg-cyan-600/20 border border-cyan-500/30 text-slate-200 hover:text-cyan-300 flex items-center justify-center gap-2 text-xs font-mono font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Transmission Form */}
          <div className="lg:col-span-7">
            <div className="mech-panel p-6 sm:p-8 rounded-xl relative">
              
              <h3 className="text-xl font-bold text-white font-display mb-2 flex items-center gap-2">
                <Send className="w-5 h-5 text-cyan-400" />
                <span>Transmit Subspace Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-sans">
                Dispatch an encrypted direct transmission to Gopal's primary inbox.
              </p>

              {sentSuccess && (
                <div className="mb-6 p-4 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2 animate-in fade-in font-mono">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>TRANSMISSION DISPATCHED TO SUB-SPACE RELAY!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-cyan-400">Commander / Recruiter Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Commander Sarah / Tech Lead"
                      className="w-full px-4 py-3 rounded bg-[#030718] border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-cyan-400">Return Frequency (Email) *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. lead@enterprise.space"
                      className="w-full px-4 py-3 rounded bg-[#030718] border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-cyan-400">Mission Code / Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. High-Priority Engineering Opportunity"
                    className="w-full px-4 py-3 rounded bg-[#030718] border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-cyan-400">Transmission Payload *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter project specifications, job mission directives, or transmission data..."
                    className="w-full px-4 py-3 rounded bg-[#030718] border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all resize-none font-mono"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onMouseEnter={playCyberHover}
                  className="w-full py-3.5 px-6 rounded bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all glow-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT PAYLOAD VIA QUANTUM RELAY</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
