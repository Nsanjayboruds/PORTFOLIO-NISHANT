import React, { useEffect, useState } from "react";


function Pre(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start progress immediately on mount
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) {
          return prev; // Hold at 99 until props.load is false
        }
        
        let increment;
        if (prev < 30) {
          increment = Math.random() * 2 + 1;
        } else if (prev < 70) {
          increment = Math.random() * 1 + 0.5;
        } else if (prev < 90) {
          increment = Math.random() * 0.5 + 0.2;
        } else {
          increment = 0.1;
        }
        
        return Math.min(prev + increment, 99);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Handle completion when props.load changes to false
  useEffect(() => {
    if (!props.load) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [props.load]);

  return (
    <div 
      className={`preloader ${!isVisible ? 'preloader-hidden' : ''}`}
    >
      {/* Animated Background Elements */}
      <div className="preloader-bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="animated-grid"></div>
        <div className="scan-line"></div>
      </div>

      <div className="preloader-content">
        {/* Enhanced Spinner with Glow */}
        <div className="spinner-container">
          <div className="spinner-glow"></div>
          <div className="cyber-spinner">
            <div className="hex-border"></div>
            <div className="hex-inner"></div>
          </div>
        </div>
        
        {/* Text Section */}
        <div className="preloader-text">
          <h2 className="preloader-title aatreyve-glow glitch-text" data-text="Nishant Borude">Nishant Borude</h2>
          <p className="preloader-subtitle">Advanced Software Engineer // UI ARCHITECT</p>
          <div className="title-underline"></div>
        </div>
        
        {/* Enhanced Progress Section */}
        <div className="progress-section">
          <div className="progress-container glass-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            >
              <div className="progress-bar-shimmer"></div>
            </div>
          </div>
          <div className="progress-text aatreyve-glow">{Math.floor(progress)}%</div>
        </div>

        {/* Loading Status */}
        <div className="loading-status">
          <span className="status-dot"></span>
          <span className="status-text uppercase tracking-widest text-[10px]">
            {progress < 20 && "Initializing Core Systems..."}
            {progress >= 20 && progress < 50 && "Establishing Secure Connection..."}
            {progress >= 50 && progress < 80 && "Loading Visual Assets..."}
            {progress >= 80 && progress < 100 && "Synchronizing Interface..."}
            {progress === 100 && "System Ready."}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pre;