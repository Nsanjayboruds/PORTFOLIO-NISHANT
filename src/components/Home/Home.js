import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import Home2 from "./Home2";
import Type from "./Type";
import Particles from "../Particles";
import { AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    <section className="relative overflow-hidden min-h-screen">
      {/* Professional dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}}></div>
      
      {/* Subtle particles background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40">
        <Particles
          particleColors={["#667eea", "#764ba2"]}
          particleCount={80}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={140}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Container fluid className="min-h-screen flex items-center py-16" id="home">
        <Container>
          <Row className="items-center">
            <Col md={7} className="z-10">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6"
                     style={{
                       backdropFilter: 'blur(10px)'
                     }}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-300">Open for Opportunities</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  <span className="text-white">Hi There, I'm </span>
                  <span className="text-transparent bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text font-bold text-6xl md:text-7xl">Nishant Borude</span>
                  <span className="wave inline-block ml-2" role="img" aria-labelledby="wave" style={{animation: 'wave 2.1s ease-in-out infinite'}}>👋</span>
                </h1>

                <div className="mb-10 text-left">
                  <Type />
                </div>
                
                {/* Professional CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mt-12">
                  <Link 
                    to="/project"
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:from-slate-600 hover:to-slate-700 hover:scale-105 active:scale-95"
                    style={{
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)'
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <AiFillGithub className="text-2xl" />
                      View My Work
                    </span>
                  </Link>
                  <button 
                    onClick={downloadCV}
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-slate-600 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:border-slate-500 hover:bg-slate-900/50 active:scale-95"
                  >
                    <span className="flex items-center gap-2">
                      <CgFileDocument className="text-2xl" />
                      Download Resume
                    </span>
                  </button>
                </div>
              </div>
            </Col>
            

            <Col md={5} className="relative">
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Professional 3D Container */}
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                     style={{
                       boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)',
                       border: '1px solid rgba(102, 126, 234, 0.2)'
                     }}>
                  <Spline scene="https://prod.spline.design/wusBdKcJteOBdL7Q/scene.splinecode" />
                </div>
                
                {/* Subtle Background Accents */}
                <div className="absolute w-72 h-72 bg-slate-700/20 rounded-full -top-20 -left-20 blur-3xl opacity-50"></div>
                <div className="absolute w-64 h-64 bg-purple-700/10 rounded-full bottom-20 -right-10 blur-3xl opacity-40"></div>
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