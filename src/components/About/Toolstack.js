import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiStreamlit,
} from "react-icons/si";

function Toolstack() {
  // Tools data with names for tooltips
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <SiSlack />, name: "Slack", color: "#4A154B" },
    { icon: <SiVercel />, name: "Vercel", color: "#000000" },
    { icon: <SiStreamlit />, name: "Streamlit", color: "#FF4B4B" },
  ];

  return (
    <Row className="flex justify-center gap-6 md:gap-8 pb-12">
      {tools.map((tool, index) => (
        <Col 
          key={index} 
          xs={5} 
          md={2} 
          className="group relative"
        >
          <div className="cyber-card flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] border-purple-500/10 hover:border-purple-400 group-hover:bg-purple-400/5 transition-all duration-500 group-hover:-translate-y-2">
            {/* Glowing Purple Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--aatreyve-secondary)_0%,transparent_70%)]"></div>
            
            <div className="text-4xl md:text-5xl group-hover:scale-110 transition-all duration-500 z-10" style={{ color: tool.color }}>
              {tool.icon}
            </div>
            
            <div className="mt-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-purple-400 transition-colors duration-500 z-10 text-center">
              {tool.name}
            </div>
          </div>
          
          {/* Signal Pulse Effect */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-400 rounded-full blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;