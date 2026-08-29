import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Radio, Cpu, Shield } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';
import { playCyberClick, playCyberHover } from '../utils/soundEffects';

const TerminalSection = ({ onOpenResume }) => {
  const [history, setHistory] = useState([
    {
      command: 'init_system',
      output: "GOPAL MECHA-CORE OS v4.2.0 [DEEP SPACE AI PROBE]\nType 'help' for onboard subspace commands or click shortcut chips below.",
      type: 'info'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBottomRef = useRef(null);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    playCyberClick();

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'resume') {
      onOpenResume();
      setHistory(prev => [
        ...prev,
        { command: cmdText, output: "Decrypting Flight Bio & Resume Document...", type: 'success' }
      ]);
      setInputVal('');
      return;
    }

    let output = '';
    let type = 'output';

    if (terminalCommands[trimmed]) {
      output = terminalCommands[trimmed];
      type = 'success';
    } else {
      output = `Command not recognized: '${trimmed}'. Type 'help' for onboard probe commands.`;
      type = 'error';
    }

    setHistory(prev => [...prev, { command: cmdText, output, type }]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const quickCommands = ['help', 'skills', 'projects', 'education', 'contact', 'hire', 'resume', 'clear'];

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#060e28] border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>[SUBSYSTEM 05: ONBOARD MECHA CLI TERMINAL]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Sub-Space <span className="gradient-text-plasma">Command Terminal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Directly communicate with Gopal's onboard probe OS through an interactive command line interface.
          </p>
        </div>

        {/* Terminal Window Frame */}
        <div className="rounded-xl border border-cyan-500/30 bg-[#030616] shadow-2xl shadow-cyan-950/70 overflow-hidden font-mono text-sm relative">
          
          {/* Terminal Title Bar */}
          <div className="px-4 py-2.5 bg-[#060e28] border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              <span className="ml-3 text-xs text-slate-300 font-semibold">
                gopal@deepspace-probe-07: ~ (zsh)
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="text-cyan-400 flex items-center gap-1 font-mono text-[10px]">
                <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                TELEMETRY: SYNCHRONIZED
              </span>
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className="px-4 py-2 bg-[#04081c] border-b border-slate-800 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-500 text-[11px] shrink-0 font-medium font-mono">Execute:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                onMouseEnter={playCyberHover}
                className="px-2.5 py-1 rounded bg-[#07102e] hover:bg-cyan-950/80 border border-cyan-500/20 hover:border-cyan-400 text-cyan-300 text-xs shrink-0 transition-all font-mono"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-5 min-h-[300px] max-h-[420px] overflow-y-auto space-y-4 scanlines">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command && (
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-purple-400">gopal@deepspace-probe:~$</span>
                    <span className="text-slate-100 font-semibold">{item.command}</span>
                  </div>
                )}
                <pre className={`whitespace-pre-wrap text-xs sm:text-sm pl-4 leading-relaxed ${
                  item.type === 'error' ? 'text-red-400' :
                  item.type === 'success' ? 'text-cyan-200' : 'text-slate-300'
                }`}>
                  {item.output}
                </pre>
              </div>
            ))}
            <div ref={terminalBottomRef} />
          </div>

          {/* Input Prompt */}
          <form onSubmit={handleFormSubmit} className="p-3 bg-[#04081c] border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold pl-2">➜</span>
            <span className="text-purple-400 text-xs sm:text-sm font-mono">gopal@deepspace-probe:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="transmit command (e.g. 'skills', 'hire', 'projects', 'help')..."
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs sm:text-sm font-mono"
            />
            <button
              type="submit"
              className="p-1.5 rounded bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all"
              title="Transmit"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

          <div className="hud-corner-tl" />
          <div className="hud-corner-br" />
        </div>

      </div>
    </section>
  );
};

export default TerminalSection;
