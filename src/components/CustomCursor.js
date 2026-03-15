import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (isHidden) setIsHidden(false);
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    const onMouseEnter = () => setIsHidden(false);
    const onMouseLeave = () => setIsHidden(true);

    const handleLinkHover = () => {
      const interactives = document.querySelectorAll('a, button, .interactive, [role="button"]');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => setIsActive(true));
        el.addEventListener('mouseleave', () => setIsActive(false));
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);

    handleLinkHover();

    // Re-check for new elements periodically (e.g. after route changes)
    const interval = setInterval(handleLinkHover, 1000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      clearInterval(interval);
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <div 
      className={`custom-cursor-wrapper ${isActive ? 'cursor-wrapper-active' : ''}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        position: 'fixed'
      }}
    >
      <div className="cursor-ring" />
      <div className="cursor-dot" />
    </div>
  );
};

export default CustomCursor;
