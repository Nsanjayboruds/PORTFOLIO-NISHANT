import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import storyGeneratorImage from "../../Assets/Projects/storyGenerator.png"; 
import jarvisImage from "../../Assets/Projects/jarvis.png";
import Particles from "../Particles";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      category: "ai",
      imgPath: storyGeneratorImage,
      title: "AI Story Generator",
      description: "Generate creative stories using React + Groq AI (LLaMA 3). Choose categories like Sci‑Fi, Fantasy, Horror, Romance; supports copying and saving generated content.",
      ghLink: "https://github.com/Nsanjayboruds/STORY-GENERATOR-USING-GROQ-API",
      demoLink: "https://your-demo-url.com",
      tags: ["React", "AI", "Groq API", "JavaScript"]
    },
    {
      id: 2,
      category: "ai",
      imgPath: jarvisImage,
      title: "J.A.R.I.V.S Assistant",
      description: "A powerful fullstack AI voice assistant inspired by Iron Man's J.A.R.V.I.S. Built with React for the frontend and Node.js for backend integration. Supports voice recognition, AI interaction, and smart automation features.",
      ghLink: "https://github.com/Nsanjayboruds/J.A.R.I.V.S-ASSISTANT",
      demoLink: "",
      tags: ["React", "Node.js", "AI", "Voice Recognition"]
    },
    {
      id: 3,
      category: "ml",
      imgPath: leaf,
      title: "Plant AI",
      description: "Used the plant disease dataset from Kaggle and trained an image classifier model using PyTorch with CNN + Transfer Learning. Achieved 98% accuracy with ResNet34 on 38 leaf disease classes.",
      ghLink: "https://github.com/Nsanjayboruds/plant-disease",
      demoLink: "",
      tags: ["PyTorch", "Deep Learning", "CV", "Python"]
    }
  ];

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "AI & Automation", value: "ai" },
    { label: "Machine Learning", value: "ml" }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'} text-center mb-16 stagger-item-1`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">My Recent </span>
              <span className="text-transparent bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text font-bold text-5xl md:text-6xl">Projects</span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Innovative solutions spanning AI, Machine Learning, and Full-Stack Development. Each project showcases cutting-edge technology and problem-solving expertise.
            </p>
          </div>

          {/* Professional Category Filter */}
          <div className={`transition-all duration-700 text-center mb-16 stagger-item-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-wrap justify-center gap-3 bg-slate-800/40 backdrop-blur-md p-6 rounded-xl inline-block border border-slate-700/50">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? "bg-slate-700 text-white border border-slate-600"
                      : "bg-transparent text-slate-300 border border-slate-600/50 hover:border-slate-500 hover:text-white"
                  }`}
                  style={{
                    boxShadow: selectedCategory === cat.value ? '0 0 30px rgba(102, 126, 234, 0.5)' : 'none'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            {filteredProjects.map((project, index) => (
              <Col md={4} className="project-card mb-8 stagger-item-3" key={project.id}>
                <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="relative h-full group hover-lift">
                    <ProjectCard
                      imgPath={project.imgPath}
                      isBlog={false}
                      title={project.title}
                      description={project.description}
                      ghLink={project.ghLink}
                      demoLink={project.demoLink}
                    />
                    {/* Advanced Project Tags */}
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 stagger-item-4">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs font-bold rounded-full border-2 border-cyan-400/40 backdrop-blur-sm hover-glow transition-all duration-300"
                          style={{
                            animation: 'slideInLeft 0.5s ease-out',
                            animationDelay: `${idx * 100}ms`,
                            animationFillMode: 'both'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Advanced Call to Action */}
          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-center mt-16 stagger-item-5`}>
            <p className="text-gray-300 mb-8 text-lg font-medium">
              🚀 Explore all my innovative projects on GitHub
            </p>
            <a
              href="https://github.com/Nsanjayboruds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              style={{
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
              }}
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
