import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTransition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[1000000] pointer-events-none flex items-center justify-center">
      {/* Glitch Overlay */}
      <div className="absolute inset-0 bg-aatreyve opacity-50 backdrop-blur-md"></div>
      
      {/* Scanline Sweep */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-sweep shadow-[0_0_50px_rgba(0,245,255,0.3)]"></div>
      
      <div className="relative text-center">
        <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.8em] animate-pulse">
          RE_SYNCING_DATA_MODULES...
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes sweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-sweep {
          animation: sweep 0.8s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default RouteTransition;
