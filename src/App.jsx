import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationTimeline from './components/EducationTimeline';
import TerminalSection from './components/TerminalSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ResumeModal from './components/ResumeModal';
import ParentalViewModal from './components/ParentalViewModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isParentalOpen, setIsParentalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#02040d] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Dynamic Ambient Deep Space Starfield Background */}
      <ParticleBackground />

      {/* Deep Space Grid Pattern Background Overlay */}
      <div className="fixed inset-0 space-grid-bg pointer-events-none z-0 opacity-40" />

      {/* Main App Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenParentalView={() => setIsParentalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero 3D Section */}
          <HeroSection 
            onOpenResume={() => setIsResumeOpen(true)} 
            onOpenParentalView={() => setIsParentalOpen(true)}
          />

          {/* About Section */}
          <AboutSection />

          {/* Skills Matrix Section */}
          <SkillsSection />

          {/* Featured Projects Section */}
          <ProjectsSection />

          {/* Education & Certifications Timeline */}
          <EducationTimeline />

          {/* Interactive Developer Terminal */}
          <TerminalSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* Contact Communication Portal */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Interactive ATS Resume Preview & Print Modal */}
        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />

        {/* Heartwarming Family & Parental View Modal */}
        <ParentalViewModal
          isOpen={isParentalOpen}
          onClose={() => setIsParentalOpen(false)}
        />

      </div>
    </div>
  );
}

export default App;
