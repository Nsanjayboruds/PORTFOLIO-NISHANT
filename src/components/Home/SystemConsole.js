import React, { useState, useEffect, useRef } from 'react';

const SystemConsole = () => {
  const [logs, setLogs] = useState([]);
  const consoleRef = useRef(null);

  const diagnosticMessages = [
    "INITIALIZING_NEURAL_LINK...",
    "ACCESSING_CORE_REPOSITORIES...",
    "PARSING_DEPLOYMENT_MANIFESTS...",
    "SECURE_CONNECTION_ESTABLISHED",
    "DECRYPTING_BIO_METRICS...",
    "UPDATING_OPERATIONAL_STATE: ACTIVE",
    "SCANNING_HARDWARE_INTERFACE...",
    "OPTIMIZING_RENDER_PIPELINE...",
    "SYNCING_LOCAL_STORAGE...",
    "FETCHING_ARCHIVED_PROJECTS...",
    "COMPUTING_EXPERIENCE_DELTA...",
    "READY_FOR_INTERACTION"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-15), {
        id: Date.now(),
        text: diagnosticMessages[index % diagnosticMessages.length],
        time: new Date().toLocaleTimeString('en-GB', { hour12: false })
      }]);
      index++;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="glass-container p-6 border-white/5 bg-black/40 h-full flex flex-col font-mono">
      <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
        <span className="text-[10px] font-black text-cyan-400 tracking-[0.3em]">SYSTEM_MONITOR</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      
      <div 
        ref={consoleRef}
        className="flex-grow overflow-y-auto space-y-2 scrollbar-none opacity-80"
      >
        {logs.map(log => (
          <div key={log.id} className="text-[9px] md:text-[10px] flex gap-3 group">
            <span className="text-slate-600">[{log.time}]</span>
            <span className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors">
              {">"} {log.text}
            </span>
          </div>
        ))}
        {logs.length === 0 && (
          <div className="text-[10px] text-slate-600 animate-pulse">WAITING_FOR_DATA_STREAM...</div>
        )}
      </div>

      <div className="mt-4 pt-2 border-t border-white/10 flex justify-between items-center">
        <span className="text-[8px] text-slate-500 tracking-widest uppercase italic">Node_Status: Encrypted</span>
        <div className="flex items-center gap-2">
           <div className="w-1 h-3 bg-cyan-500 animate-pulse"></div>
           <span className="text-[8px] text-cyan-500 font-bold">ALIVE</span>
        </div>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SystemConsole;
