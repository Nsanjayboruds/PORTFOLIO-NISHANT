import React, { useEffect, useState } from "react";


function Pre(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!props.load) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsVisible(false), 500);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [props.load]);

  return (
    <div 
      id={props.load ? "preloader" : "preloader-none"} 
      className={`preloader ${!isVisible ? 'preloader-hidden' : ''}`}
    >
      <div className="preloader-content">
        <div className="spinner">
          <div className="spinner-inner">
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
          </div>
        </div>
        
        <div className="preloader-text">
          <h2 className="preloader-title">Nishant Borude</h2>
          <p className="preloader-subtitle">UI/UX Designer & Developer</p>
        </div>
        
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
          <div className="progress-text">{progress}%</div>
        </div>
      </div>
    </div>
  );
}

export default Pre;