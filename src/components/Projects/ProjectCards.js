import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="project-card-view border-0 bg-gray-800/40 backdrop-blur-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        height: '100%',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="overflow-hidden">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          className="transition-transform duration-500"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
          }}
        />
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {props.title}
        </Card.Title>
        
        <Card.Text className="text-gray-300 flex-grow-1" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        <div className="mt-auto pt-3">
          <div className="d-flex flex-wrap gap-2">
            <Button 
              variant="outline-light" 
              href={props.ghLink} 
              target="_blank"
              className="d-flex align-items-center gap-1 border-2 transition-all duration-300 hover:bg-purple-600 hover:border-purple-600"
              style={{ 
                borderRadius: '20px',
                padding: '0.5rem 1rem'
              }}
            >
              <BsGithub className="text-lg" /> 
              <span>{props.isBlog ? "Blog" : "GitHub"}</span>
            </Button>

            {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="outline-light"
                href={props.demoLink}
                target="_blank"
                className="d-flex align-items-center gap-1 border-2 transition-all duration-300 hover:bg-pink-600 hover:border-pink-600"
                style={{ 
                  borderRadius: '20px',
                  padding: '0.5rem 1rem',
                  marginLeft: '0'
                }}
              >
                <CgWebsite className="text-lg" />
                <span>Live Demo</span>
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
      
      {/* Gradient overlay effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0 hover:opacity-100 transition-opacity duration-300"
           style={{
             background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
             pointerEvents: 'none'
           }}
      ></div>
    </Card>
  );
}



export default ProjectCards;