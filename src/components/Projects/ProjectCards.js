import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <Card 
      className="project-card-view border-0 backdrop-blur-lg overflow-hidden transition-all duration-500 transform relative glass-effect"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ 
        height: '100%',
        background: 'rgba(17, 25, 40, 0.85)',
        border: isHovered ? '2px solid rgba(102, 126, 234, 0.6)' : '1px solid rgba(102, 126, 234, 0.2)',
        transform: isHovered ? 'translateY(-15px) scale(1.05) rotateZ(1deg)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? '0 30px 60px rgba(102, 126, 234, 0.4), 0 0 80px rgba(0, 242, 254, 0.3), inset 0 0 30px rgba(102, 126, 234, 0.1)' 
          : '0 10px 30px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Animated gradient border effect */}
      <div 
        className="position-absolute top-0 left-0 w-100 h-100 opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.8 : 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 126, 234, 0.6), rgba(0, 242, 254, 0.3) 40%, transparent 80%)`,
          pointerEvents: 'none',
          zIndex: 1
        }}
      ></div>

      <div className="overflow-hidden position-relative">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          className="transition-all duration-700"
          style={{ 
            transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1)',
            filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1)',
          }}
        />
        {/* Image overlay gradient */}
        <div 
          className="position-absolute top-0 left-0 w-100 h-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
            opacity: isHovered ? 1 : 0.5
          }}
        ></div>
      </div>
      
      <Card.Body className="d-flex flex-column position-relative" style={{ zIndex: 2 }}>
        <Card.Title 
          className="text-xl font-bold mb-3 transition-all duration-300 gradient-text"
          style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            animation: isHovered ? 'glow-text 1.5s ease-in-out infinite' : 'none'
          }}
        >
          {props.title}
        </Card.Title>
        
        <Card.Text className="text-gray-300 flex-grow-1 transition-colors duration-300" 
                   style={{ 
                     textAlign: "justify",
                     color: isHovered ? '#e5e7eb' : '#d1d5db'
                   }}>
          {props.description}
        </Card.Text>
        
        <div className="mt-auto pt-3">
          <div className="d-flex flex-wrap gap-2">
            <Button 
              variant="outline-light" 
              href={props.ghLink} 
              target="_blank"
              className="d-flex align-items-center gap-1 border-2 transition-all duration-300 position-relative overflow-hidden"
              style={{ 
                borderRadius: '25px',
                padding: '0.6rem 1.2rem',
                borderColor: '#8b5cf6',
                color: 'white',
                background: 'rgba(139, 92, 246, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6, #a855f7)';
                e.currentTarget.style.borderColor = '#a855f7';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <BsGithub className="text-lg" /> 
              <span>{props.isBlog ? "Blog" : "GitHub"}</span>
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="outline-light"
                href={props.demoLink}
                target="_blank"
                className="d-flex align-items-center gap-1 border-2 transition-all duration-300 position-relative overflow-hidden"
                style={{ 
                  borderRadius: '25px',
                  padding: '0.6rem 1.2rem',
                  borderColor: '#ec4899',
                  color: 'white',
                  background: 'rgba(236, 72, 153, 0.1)',
                  marginLeft: '0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ec4899, #f472b6)';
                  e.currentTarget.style.borderColor = '#f472b6';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(236, 72, 153, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
                  e.currentTarget.style.borderColor = '#ec4899';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <CgWebsite className="text-lg" />
                <span>Live Demo</span>
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
      
      {/* Shimmer effect on hover */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: isHovered ? 'shimmer 2s infinite' : 'none',
          pointerEvents: 'none',
          zIndex: 3
        }}
      ></div>
    </Card>
  );
}



export default ProjectCards;