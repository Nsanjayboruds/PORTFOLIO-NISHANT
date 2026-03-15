import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarmy.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container fluid className="py-24 relative overflow-hidden bg-aatreyve" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[100px] -z-10"></div>
      
      <Container>
        <Row className="items-center">
          <Col md={8} className="mb-10 md:mb-0">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="glass-container p-8 md:p-12 border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                <h1 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter">
                  <span className="text-white opacity-40 block text-sm uppercase tracking-[0.4em] mb-4">Core_Attributes</span>
                  SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 aatreyve-glow-strong glitch-text" data-text="BIOGRAPHY">BIOGRAPHY</span>
                </h1>
                
                <div className="text-lg md:text-xl leading-relaxed space-y-6 text-gray-300 font-light">
                  <p className="border-l-2 border-cyan-500/30 pl-6 py-2 bg-gradient-to-r from-cyan-500/5 to-transparent">
                    Programming isn't just a skill—it's the language I use to <span className="text-cyan-400 font-medium">architect digital realities.</span>
                  </p>
                  
                  <p>
                    I specialize in low-level mastery with <span className="font-bold text-white aatreyve-glow">C++</span> and high-level agility with <span className="font-bold text-white aatreyve-glow">JavaScript</span>.
                  </p>
                  
                  <p>
                    Current operational focus: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">Scalable Web Architectures</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">AI Integration Hubs.</span>
                  </p>
                  
                  <p className="text-gray-400 italic">
                    "Leveraging Full-Stack mastery to build the next generation of intelligent ecosystems."
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="flex justify-center items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#00f5ff"
                className="relative p-2"
              >
                <div className="relative z-10">
                  <img 
                    src={myImg} 
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border border-cyan-500/30 p-1 bg-slate-900/50" 
                    alt="avatar" 
                  />
                  {/* Glowing frame */}
                  <div className="absolute inset-0 rounded-3xl border border-cyan-400/50 shadow-[0_0_20px_rgba(0,245,255,0.3)] pointer-events-none"></div>
                </div>
                {/* Background aura */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-2xl rounded-full -z-10 animate-pulse"></div>
              </Tilt>
            </div>
          </Col>
        </Row>
        <Row className="mt-16 md:mt-32">
          <Col md={12} className="text-center">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="inline-block glass-container px-12 py-10 border-purple-500/10 hover:border-purple-500/30">
                <h1 className="text-sm uppercase tracking-[0.5em] text-purple-400 mb-2 font-bold opacity-70">Signal_Endpoints</h1>
                <h2 className="text-3xl md:text-4xl font-black mb-8 text-white uppercase tracking-tight">Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 aatreyve-glow-strong">Connectivity</span></h2>
                
                <ul className="flex justify-center gap-8">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Nsanjayboruds"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col items-center gap-3 transition-all"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-900/50 border border-purple-500/20 text-white text-3xl group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(191,0,255,0.3)] group-hover:-translate-y-2 transition-all duration-300">
                        <AiFillGithub />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col items-center gap-3 transition-all"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-900/50 border border-purple-500/20 text-white text-3xl group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] group-hover:-translate-y-2 transition-all duration-300">
                        <AiOutlineTwitter />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/nishant-borude-554293311/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col items-center gap-3 transition-all"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-900/50 border border-purple-500/20 text-white text-3xl group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:-translate-y-2 transition-all duration-300">
                        <FaLinkedinIn />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>       
      </Container>
    </Container>
  );
}

export default Home2;