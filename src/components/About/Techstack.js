import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDocker,
  DiNginx,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiGithubactions,
} from "react-icons/si";

function Techstack() {
  // Technology data with names for tooltips
  const technologies = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiDocker />, name: "Docker" },
    { icon: <DiNginx />, name: "Nginx" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <div style={{fontSize: '2rem'}}>📦</div>, name: "Docker Compose" },
    { icon: <div style={{fontSize: '2rem'}}>🖼️</div>, name: "ImageKit CDN" },
  ];

  return (
    <Row className="flex justify-center gap-6 md:gap-8 pb-12">
      {technologies.map((tech, index) => (
        <Col 
          key={index} 
          xs={5} 
          md={2} 
          className="group relative"
        >
          <div className="cyber-card flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] border-cyan-500/10 hover:border-cyan-400 group-hover:bg-cyan-400/5 transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
            {/* Holographic Noise & Flicker Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="hologram-noise"></div>
              <div className="absolute inset-0 animate-hologram bg-cyan-500/5"></div>
            </div>

            {/* Glowing Hex Background Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--aatreyve-primary)_0%,transparent_70%)]"></div>
            
            <div className="text-4xl md:text-5xl text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 z-10 aatreyve-glow">
              {tech.icon}
            </div>
            
            <div className="mt-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-cyan-400 transition-colors duration-500 z-10 text-center">
              {tech.name}
            </div>
          </div>
          
          {/* Signal Pulse Effect */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-full blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;