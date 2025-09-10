import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import storyGeneratorImage from "../../Assets/Projects/storyGenerator.png"; 
import jarvisImage from "../../Assets/Projects/jarvis.png";
import Particles from "../Particles";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Background Particles */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Particles />
      </div>

      {/* Foreground Content */}
      <Container fluid className="project-section py-16 md:py-24 px-4">
        <Container>
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'} text-center mb-16`}>
            <h1 className="text-[blue] text-4xl md:text-5xl font-bold mb-4">
              My Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Works</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Here are a few projects I've worked on recently. Each one represents my passion for creating innovative solutions.
            </p>
          </div>

          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Col md={4} className="project-card mb-8">
              <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <ProjectCard
                  imgPath={storyGeneratorImage} 
                  isBlog={false}
                  title="AI Story Generator"
                  description="Generate creative stories using React + Groq AI (LLaMA 3). Choose categories like Sci‑Fi, Fantasy, Horror, Romance; supports copying and saving generated content."
                  ghLink="https://github.com/Nsanjayboruds/STORY-GENERATOR-USING-GROQ-API"
                  demoLink="https://your-demo-url.com" 
                />
              </div>
            </Col>

            <Col md={4} className="project-card mb-8">
              <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <ProjectCard
                  imgPath={jarvisImage} 
                  isBlog={false}
                  title="J.A.R.I.V.S Assistant"
                  description="A powerful fullstack AI voice assistant inspired by Iron Man's J.A.R.V.I.S. Built with React for the frontend and Node.js for backend integration. Supports voice recognition, AI interaction, and smart automation features."
                  ghLink="https://github.com/Nsanjayboruds/J.A.R.I.V.S-ASSISTANT"
                  demoLink=" " 
                />
              </div>
            </Col>

            <Col md={4} className="project-card mb-8">
              <div className={`transition-all duration-700 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <ProjectCard
                  imgPath={leaf}
                  isBlog={false}
                  title="Plant AI"
                  description="Used the plant disease dataset from Kaggle and trained an image classifier model using PyTorch with CNN + Transfer Learning. Achieved 98% accuracy with ResNet34 on 38 leaf disease classes."
                  ghLink="https://github.com/Nsanjayboruds/plant-disease"
                  demoLink=" "
                />
              </div>
            </Col>
          </Row>

          {/* Call to Action */}
          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'} text-center mt-12`}>
            <p className="text-gray-400 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/Nsanjayboruds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;