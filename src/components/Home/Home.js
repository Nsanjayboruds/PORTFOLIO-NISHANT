import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import Home2 from "./Home2";
import Type from "./Type";
import Particles from "../Particles";
import SystemConsole from "./SystemConsole";
import { AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    const home2Element = document.getElementById("about");
    if (home2Element) {
      home2Element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    // Replace with your actual CV link
    window.open("https://drive.google.com/file/d/YOUR_CV_ID/view", "_blank");
  };

  return (
    <section className="relative overflow-hidden min-h-screen bg-aatreyve">
      {/* Cinematic Cyber Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 opacity-80 z-0"></div>
      
      {/* Floating Cyber Grid - Parallax Layer 1 */}
      <div className="absolute inset-0 opacity-10 parallax-layer z-0" 
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '80px 80px',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
             transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`
           }}></div>

      {/* Advanced Data Stream - Parallax Layer 2 */}
      <div className="data-stream opacity-20 parallax-layer z-0"
           style={{
             transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)`
           }}></div>
      
      {/* Peripheral Scan Visuals */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-500/20 z-10 m-12 rounded-tl-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyan-500/20 z-10 m-12 rounded-tr-3xl pointer-events-none"></div>
      
      {/* Subtle particles background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-60">
        <Particles
          particleColors={["#00f5ff", "#bf00ff", "#ff006e"]}
          particleCount={100}
          particleSpread={20}
          speed={0.15}
          particleBaseSize={160}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <Container fluid className="min-h-screen flex items-center py-16 relative z-10" id="home">
        <Container>
          <Row className="items-center">
            <Col md={7} className="z-10">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-container mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-300">System Online // Available</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                  <span className="text-white opacity-90 block text-4xl md:text-5xl font-light mb-2">Initialize Interface_</span>
                  <span 
                    className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text aatreyve-glow-strong glitch-text"
                    data-text="Nishant Borude"
                  >
                    Nishant Borude
                  </span>
                  <span className="wave inline-block ml-4 text-5xl" role="img" aria-labelledby="wave">👋</span>
                </h1>

                <div className="mb-10 text-left">
                  <Type />
                </div>
                
                {/* Professional CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mt-16">
                  <Link 
                    to="/project"
                    className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 shadow-xl"
                  >
                    <AiFillGithub className="text-2xl group-hover:rotate-12 transition-transform" />
                    Archive_Access
                  </Link>
                  <button 
                    onClick={downloadCV}
                    className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 border border-cyan-500/30 text-cyan-400 font-bold text-lg rounded-xl transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 scale-100 active:scale-95"
                  >
                    <CgFileDocument className="text-2xl group-hover:-translate-y-1 transition-transform" />
                    Download_Dossier
                  </button>
                </div>
              </div>
            </Col>
            

            <Col md={5} className="relative mt-12 md:mt-0">
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {/* System Monitoring Console Overlay */}
                <div className="absolute -left-12 -bottom-12 w-64 h-48 z-20 hidden lg:block scale-90 translate-y-4">
                  <SystemConsole />
                </div>

                {/* Advanced Cinematic 3D Container with Pedestal */}
                <div className="relative w-full h-[550px] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-full h-full glass-container rounded-[2rem] border-cyan-500/20 shadow-2xl overflow-hidden">
                    {/* Decorative Scanline Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
                      <div className="scan-line"></div>
                    </div>

                    <div className="absolute inset-0 z-0 opacity-40">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
                    </div>
                    <Spline scene="https://prod.spline.design/wusBdKcJteOBdL7Q/scene.splinecode" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          
         
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <button 
              onClick={scrollToNextSection}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 hover:bg-slate-700/50 transition-colors duration-300"
              aria-label="Scroll down"
            >
              <svg 
                className="w-6 h-6 text-slate-300 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;