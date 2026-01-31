import React, { useEffect, useState } from "react";


function Pre(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!props.load) {
      // Simulate loading progress - reaches 100% before completion
      const interval = setInterval(() => {
        setProgress(prev => {
          // Smooth progression with slight variations
          let increment;
          if (prev < 30) {
            increment = Math.random() * 15 + 5;
          } else if (prev < 70) {
            increment = Math.random() * 10 + 3;
          } else if (prev < 90) {
            increment = Math.random() * 5 + 2;
          } else if (prev < 99) {
            increment = 1;
          } else {
            increment = 0;
          }
          
          const newProgress = Math.min(prev + increment, 100);
          
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsVisible(false), 300);
            return 100;
          }
          return newProgress;
        });
      }, 40);

      return () => clearInterval(interval);
    }
  }, [props.load]);

  return (
    <div 
      id={props.load ? "preloader" : "preloader-none"} 
      className={`preloader ${!isVisible ? 'preloader-hidden' : ''}`}
    >
      {/* Animated Background Elements */}
      <div className="preloader-bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="animated-grid"></div>
      </div>

      <div className="preloader-content">
        {/* Enhanced Spinner with Glow */}
        <div className="spinner-container">
          <div className="spinner-glow"></div>
          <div className="spinner">
            <div className="spinner-inner">
              <div className="spinner-circle"></div>
              <div className="spinner-circle"></div>
              <div className="spinner-circle"></div>
              <div className="spinner-circle"></div>
            </div>
          </div>
        </div>
        
        {/* Text Section */}
        <div className="preloader-text">
          <h2 className="preloader-title">Nishant Borude</h2>
          <p className="preloader-subtitle">UI/UX Designer & Developer</p>
          <div className="title-underline"></div>
        </div>
        
        {/* Enhanced Progress Section */}
        <div className="progress-section">
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            >
              <div className="progress-bar-shimmer"></div>
            </div>
          </div>
          <div className="progress-text">{progress}%</div>
        </div>

        {/* Loading Status */}
        <div className="loading-status">
          <span className="status-dot"></span>
          <span className="status-text">Loading your portfolio...</span>
        </div>
      </div>
    </div>
  );
}

export default Pre;