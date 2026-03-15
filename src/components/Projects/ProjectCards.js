import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card 
        className="h-full border-0 !bg-slate-950/60 backdrop-blur-xl absolute-dark-card forced-glass-blur overflow-hidden transition-all duration-700 group hover:!border-cyan-500/50 shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Animated Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-10 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,245,255,0.05)_50%)] bg-[length:100%_4px]"></div>
        
        {/* Dynamic Background Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 245, 255, 0.2) 0%, transparent 60%)`,
          }}
        ></div>

        <div className="relative overflow-hidden aspect-video border-b border-white/5">
          {props.imgPath && (
            <Card.Img 
              variant="top" 
              src={props.imgPath} 
              alt="project-img" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-[1px] opacity-80 group-hover:opacity-100"
            />
          )}
          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          
          {/* Diagnostic Pulse Overlay */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f5ff]"></div>
             <span className="text-[7px] font-black text-cyan-400 tracking-[0.3em] uppercase">SYSTEM_LINK: ACTIVE</span>
          </div>
        </div>
        
        <Card.Body className="relative z-20 p-6 flex flex-col items-start gap-4 !bg-transparent">
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
               <span className="text-[7px] font-mono text-cyan-500/50 tracking-tighter">DATA_NODE: 0x{Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0')}</span>
               <span className="w-1 h-1 rounded-full bg-cyan-500/30"></span>
            </div>
            <Card.Title 
              className={`text-2xl font-black !text-white italic tracking-tighter uppercase mb-3 aatreyve-glow transition-transform duration-500 ${isHovered ? 'glitch-text -translate-x-1' : ''} high-contrast-text`}
              data-text={props.title}
            >
              {props.title}
            </Card.Title>
            
            <Card.Text className="!text-slate-400 text-xs leading-relaxed line-clamp-3 transition-colors group-hover:!text-slate-200 font-medium high-contrast-text">
              {props.description}
            </Card.Text>
          </div>
          
          <div className="mt-auto w-full pt-6 flex flex-wrap gap-3">
            <Button 
              href={props.ghLink} 
              target="_blank"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 !bg-cyan-500/10 border !border-cyan-500/30 !text-cyan-400 font-black text-[9px] tracking-[0.2em] uppercase rounded-lg hover:!bg-cyan-500 hover:!text-black hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-500 !border-0"
            >
              <BsGithub className="text-sm" /> 
              {props.isBlog ? "SOURCE_LINK" : "VAULT_ACCESS"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                href={props.demoLink}
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 !bg-purple-500/10 border !border-purple-500/30 !text-purple-400 font-black text-[9px] tracking-[0.2em] uppercase rounded-lg hover:!bg-purple-600 hover:!text-white hover:shadow-[0_0_15px_rgba(191,0,255,0.4)] transition-all duration-500"
              >
                <CgWebsite className="text-sm" />
                LIVE_DATA
              </Button>
            )}
          </div>
        </Card.Body>

        {/* Edge Highlight */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;