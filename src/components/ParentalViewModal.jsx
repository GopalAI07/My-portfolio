import React from 'react';
import { 
  Heart, 
  X, 
  GraduationCap, 
  Sparkles, 
  Award, 
  Video, 
  BarChart, 
  BookOpen, 
  Smile, 
  Languages, 
  MapPin, 
  Printer, 
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationData } from '../data/portfolioData';
import { playCyberClick, playSuccessChime } from '../utils/soundEffects';

const ParentalViewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playCyberClick();
    window.print();
  };

  const celebrateFamily = () => {
    playSuccessChime();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#090f26] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#0d1b42] to-[#141b38] border-b border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
              <Heart className="w-5 h-5 fill-pink-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Family & Mentors View — Gopal Chauhan
              </h3>
              <p className="text-xs text-cyan-300 font-mono">
                A simple, non-technical overview of Gopal's achievements & education
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={celebrateFamily}
              className="px-3 py-1.5 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 text-pink-300 text-xs font-semibold flex items-center gap-1 transition-all"
              title="Celebrate Gopal's Achievements"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              <span>Celebrate!</span>
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-slate-200">
          
          {/* Welcome Intro Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-purple-950/40 border border-cyan-500/30 space-y-2">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
              👋 Namaste & Welcome!
            </span>
            <h4 className="text-xl font-bold text-white font-display">
              About Gopal Chauhan
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Gopal is a skilled <strong>Python Full Stack Developer</strong> based in <strong>Kandivali West, Mumbai</strong>. He builds modern websites, real-time video conference platforms, and digital software systems that make business operations, learning, and communication faster, easier, and seamless.
            </p>
          </div>

          {/* Education & Academic Accomplishments */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono">
              <GraduationCap className="w-4 h-4" />
              <span>College & Academic Degrees</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Engineering Degree */}
              <div className="p-4 rounded-xl bg-[#060c20] border border-cyan-500/30 space-y-2">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                    Aggregate CGPI: 7.83
                  </span>
                  <span className="text-xs text-slate-400 font-mono">2020 - 2024</span>
                </div>
                <h5 className="text-base font-bold text-white">
                  Bachelor of Engineering (B.E.)
                </h5>
                <p className="text-xs text-cyan-300 font-medium">
                  Artificial Intelligence & Data Science (AI & DS)
                </p>
                <p className="text-xs text-slate-400">
                  Rizvi College of Engineering, Bandra, Mumbai
                </p>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Final Score (CGPI):</span>
                  <span className="text-emerald-400 font-bold text-sm">7.83 / 10</span>
                </div>
              </div>

              {/* Junior College (H.S.C.) */}
              <div className="p-4 rounded-xl bg-[#060c20] border border-purple-500/30 space-y-2">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[11px] font-bold">
                    Science Stream (H.S.C.)
                  </span>
                  <span className="text-xs text-slate-400 font-mono">2018 - 2020</span>
                </div>
                <h5 className="text-base font-bold text-white">
                  Higher Secondary Certificate (H.S.C.)
                </h5>
                <p className="text-xs text-purple-300 font-medium">
                  Science Stream
                </p>
                <p className="text-xs text-slate-400">
                  Shri T.P. Bhatia College of Science, Kandivali
                </p>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Passing Score:</span>
                  <span className="text-purple-300 font-bold text-sm">68%</span>
                </div>
              </div>

            </div>
          </div>

          {/* Simple Explanation of What Gopal Has Built */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-purple-400 uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4" />
              <span>What Has Gopal Built? (In Simple Words)</span>
            </div>

            <div className="space-y-3">
              
              {/* Project 1 */}
              <div className="p-4 rounded-xl bg-[#060c20] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="text-sm font-bold text-white">
                    1. AI Meeting Hub (Online Video Calling with AI Smart Summaries)
                  </h6>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Similar to Google Meet or Zoom, people can have live video meetings. An artificial intelligence system automatically takes clean summary notes of everything discussed so team members don't have to write notes manually!
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-xl bg-[#060c20] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="text-sm font-bold text-white">
                    2. My Portfolio (Sci-Fi 3D Interactive Cybernetic Website)
                  </h6>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    A high-tech sci-fi interactive website featuring a 3D robot viewport, deep space star particles, sound synthesizer effects, and an interactive hacker command-line terminal to showcase Gopal's engineering skills.
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-4 rounded-xl bg-[#060c20] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="text-sm font-bold text-white">
                    3. Library Management System (Python Django + MySQL)
                  </h6>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    A digital management software built with Python Django and MySQL for colleges and schools to register students, track book borrowing and returns, and calculate overdue return fees automatically.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Personal Strengths & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-xl bg-[#060c20] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase font-semibold">
                <Languages className="w-4 h-4" />
                <span>Languages Spoken</span>
              </div>
              <p className="text-xs text-slate-300">
                Fluent in <strong>English, Hindi, Marathi</strong>, and <strong>Gujarati</strong> for seamless communication with team members and clients.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060c20] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase font-semibold">
                <Smile className="w-4 h-4" />
                <span>Values & Hobbies</span>
              </div>
              <p className="text-xs text-slate-300">
                Hardworking, detail-oriented, passionate about continuous learning. Enjoys playing <strong>Cricket, Volleyball</strong>, and <strong>Carrom</strong>.
              </p>
            </div>

          </div>

          {/* Direct Contact for Inquiries */}
          <div className="p-4 rounded-xl bg-[#0c183d] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-white">Contact Gopal Chauhan</p>
              <p className="text-slate-400">Phone: {personalInfo.phone} | Email: {personalInfo.email}</p>
            </div>
            <a
              href={`tel:${personalInfo.phone}`}
              className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs shrink-0 hover:bg-cyan-400 transition-all"
            >
              Call Gopal
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ParentalViewModal;
