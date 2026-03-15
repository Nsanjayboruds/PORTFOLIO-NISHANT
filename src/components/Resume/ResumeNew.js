import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Particles from "../Particles";
import FuzzyText from "../FuzzyText";
import { useNavigate } from "react-router-dom";

function ResumeNew() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Optional: Define hover effect props
  const hoverIntensity = 0.4;
  const enableHover = true;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoToProjects = () => {
    navigate("/projects");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-aatreyve flex items-center justify-center">
      {/* Cinematic Cyber Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950 opacity-90"></div>
      
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
        <Particles 
          particleColors={["#ff0055", "#00f5ff"]}
          particleCount={80}
          speed={0.2}
        />
      </div>

      <Container className="relative z-10 text-center px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block glass-container p-12 md:p-20 border-white/5 relative overflow-hidden max-w-4xl">
            {/* Alarm Pulsing Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-500/10 blur-[100px] animate-pulse"></div>
            
            <div className="relative z-10">
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">ERROR_CODE: 0x404 // DATA_RETRIEVAL_FAILURE</span>
              
              <div className="mb-12">
                <FuzzyText
                  baseIntensity={0.2}
                  hoverIntensity={0.6}
                  enableHover={true}
                  className="text-8xl md:text-[12rem] font-black text-white italic tracking-tighter uppercase leading-none"
                >
                  SYSTEM_IDLE
                </FuzzyText>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase mb-6">
                ARCHIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 aatreyve-glow">UNAVAILABLE</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
                The requested curriculum_v_0.1 deployment has been quarantined or is currently undergoing structural maintenance. 
                Please interface with adjacent data modules.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  onClick={handleGoHome}
                  className="px-10 py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] border-0"
                >
                  RETURN_TO_CORE
                </Button>
                
                <Button
                  onClick={handleGoToProjects}
                  className="px-10 py-5 bg-transparent border-2 border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-500"
                >
                  VIEW_PROJECT_LOGS
                </Button>
              </div>

              <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[
                  { label: "GITHUB_UPLINK", detail: "Source_Repository", color: "bg-cyan-500" },
                  { label: "DIRECT_COMMS", detail: "Interface_Node", color: "bg-purple-500" },
                  { label: "KNOWLEDGE_LOGS", detail: "Internal_Archive", color: "bg-pink-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer p-4 rounded-lg hover:bg-white/5 transition-all">
                    <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`}></div>
                    <div>
                      <div className="text-[10px] font-black text-white uppercase tracking-widest">{item.label}</div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1 opacity-60 group-hover:opacity-100 transition-opacity">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ResumeNew;