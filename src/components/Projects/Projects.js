import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import storyGeneratorImage from "../../Assets/Projects/storyGenerator.png"; 
import jarvisImage from "../../Assets/Projects/jarvis.png";
import fiscalAuraImage from "../../Assets/Projects/fiscalAura.png";
import Particles from "../Particles";
import ProjectsBackground from "./ProjectsBackground";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
    },
    {
      id: 4,
      category: "ai",
      imgPath: fiscalAuraImage,
      title: "FiscalAura",
      description: "The Radiant Future of Tax Strategy. An autonomous financial partner engineered for absolute wealth optimization. Built with an ultra-premium interface and next-gen fiscal intelligence.",
      ghLink: "https://github.com/Nsanjayboruds/FiscalAura",
      demoLink: "",
      tags: ["React", "AI", "Tailwind", "Financial_Intelligence"]
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
    <section className="relative overflow-hidden min-h-screen !bg-[#030014] project-vault-section">
      {/* 3D Immersive Background */}
      <ProjectsBackground />

      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <Particles 
          particleColors={["#00f5ff", "#bf00ff", "#ff006e"]}
          particleCount={50}
          speed={0.1}
        />
      </div>

      {/* Cinematic Cyber Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Foreground Content */}
      <Container fluid className="project-section py-16 md:py-24 px-4 relative z-10">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase relative">
              <span className="text-cyan-500/40 block text-sm uppercase tracking-[0.5em] mb-4 font-mono">NODE_ACCESSED: 0xVAULT</span>
              CYBERNETIC <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text aatreyve-glow-strong">REPOSITORIES</span>
            </h1>
            <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light high-contrast-text">
              Engineering digital evolution through intelligent models and cinematic interfaces. Accessing specialized project nodes...
            </p>
          </motion.div>

          {/* Professional Category Filter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center mb-20"
          >
            <div className="inline-flex flex-wrap justify-center gap-4 glass-container p-2 rounded-2xl border-white/5 bg-slate-950/20 forced-glass-blur">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                    selectedCategory === cat.value
                      ? "bg-cyan-500 text-black shadow-[0_0_25px_rgba(0,245,255,0.4)]"
                      : "bg-transparent text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {cat.label.replace(" ", "_")}
                </button>
              ))}
            </div>
          </motion.div>

          <Row className="justify-center gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <Col md={4} key={project.id} className="project-card">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20 
                    }}
                  >
                    <ProjectCard
                      imgPath={project.imgPath}
                      isBlog={false}
                      title={project.title}
                      description={project.description}
                      ghLink={project.ghLink}
                      demoLink={project.demoLink}
                    />
                    
                    {/* Advanced Project Tags */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20 pointer-events-none">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="inline-block px-3 py-1 bg-black/60 text-cyan-400 text-[9px] font-black uppercase tracking-widest rounded-md border border-cyan-500/30 backdrop-blur-md forced-glass-blur"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>

          {/* Advanced Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mt-32 mb-12"
          >
            <div className="inline-block glass-container px-12 py-10 border-white/5 bg-slate-950/40 hover:border-cyan-500/30 transition-all absolute-dark-card forced-glass-blur">
              <p className="text-slate-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Global_Sync_Protocol</p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-10 tracking-tight high-contrast-text uppercase">Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 aatreyve-glow">Core_Repository</span></h2>
              <a
                href="https://github.com/Nsanjayboruds"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-white text-black font-black text-sm tracking-[0.2em] rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
              >
                INITIALIZE_GITHUB_LINK
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
