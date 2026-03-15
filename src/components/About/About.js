import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Particles from "../Particles";
import ProfileCard from "../ProfileCard";
import avatar from "../../Assets/avatarmy.jpg";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    repositories: 0
  });

  useEffect(() => {
    setIsVisible(true);
    // Animate counters
    const targets = { projects: 15, experience: 2, technologies: 20, repositories: 25 };
    const duration = 1500;
    const start = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);

      setStats({
        projects: Math.floor(targets.projects * progress),
        experience: (targets.experience * progress).toFixed(1),
        technologies: Math.floor(targets.technologies * progress),
        repositories: Math.floor(targets.repositories * progress)
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const statsList = [
    { label: "Projects Completed", value: stats.projects, suffix: "+" },
    { label: "Years of Experience", value: stats.experience, suffix: "+" },
    { label: "Technologies", value: stats.technologies, suffix: "+" },
    { label: "Repositories", value: stats.repositories, suffix: "+" }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen bg-aatreyve">
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-50">
        <Particles 
          particleColors={["#00f5ff", "#bf00ff"]}
          particleCount={60}
          speed={0.1}
        />
      </div>

      {/* Foreground Content */}
      <Container fluid className="py-12 md:py-20 px-4">
        <Container>
          {/* Professional Header Section */}
          <Row className="justify-center mb-20">
            <Col className="text-center stagger-item-1">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
                  <span className="text-white opacity-40 block text-sm uppercase tracking-[0.5em] mb-4">Identity_Matrix</span>
                  PROFILE <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text aatreyve-glow-strong">PROTOCOL</span>
                </h1>
                <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                  Synthesis of intelligence, creativity, and engineering. Architecting scalable solutions across the full digital spectrum.
                </p>
              </div>
            </Col>
          </Row>

          {/* Advanced Profile & About Card Section */}
          <Row className="justify-center items-stretch mb-32 stagger-item-3">
            <Col
              md={5}
              className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} flex justify-center`}
            >
              <ProfileCard
                name="NISHANT BORUDE"
                title="ADVANCED DEVELOPER"
                handle="Nishant_Borude"
                status="Active_Substrate"
                statusColor="bg-cyan-500"
                contactText="INITIATE_COLLAB"
                avatarUrl={avatar}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.open('https://github.com/Nsanjayboruds', '_blank')}
                className="w-full h-full shadow-2xl"
                nameClassName="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tighter"
                titleClassName="text-gray-400 font-bold tracking-widest text-[10px]"
                handleClassName="text-cyan-400/70"
              />
            </Col>
            
            <Col
              md={7}
              className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            >
              <div className="glass-container h-full p-8 md:p-12 border-purple-500/10 hover:border-purple-500/30 transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-purple-400">Biological_Log</h2>
                </div>
                <Aboutcard />
              </div>
            </Col>
          </Row>

          {/* Diagnostic Stats Grid */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} mb-32`}>
            <Row className="gap-6 md:gap-0">
              {statsList.map((stat, idx) => (
                <Col md={3} sm={6} key={idx} className="mb-6 md:mb-0">
                  <div className="cyber-card text-center group">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 opacity-70 group-hover:text-cyan-400 transition-colors">Data_Point_{idx + 1}</div>
                    <h3 className="text-4xl md:text-6xl font-black text-white aatreyve-glow transition-all duration-500 group-hover:scale-110 mb-2">
                      {stat.value}{stat.suffix}
                    </h3>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>



          {/* Skillset & Tools Sections */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Row>
              <Col md={12} className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">
                    TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 aatreyve-glow-strong">SUBSTRATES</span>
                  </h2>
                  <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">Primary Specializations_</p>
                </div>
                <div className="glass-container p-8 md:p-14 border-cyan-500/10">
                  <Techstack />
                </div>
              </Col>

              <Col md={12} className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">
                    OPERATIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 aatreyve-glow-strong">FRAMEWORKS</span>
                  </h2>
                  <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">Standard Tooling_</p>
                </div>
                <div className="glass-container p-8 md:p-14 border-purple-500/10">
                  <Toolstack />
                </div>
              </Col>

              <Col md={12} className="mb-20">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">
                    DEVELOPMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 aatreyve-glow-strong">TELEMETRY</span>
                  </h2>
                  <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">Activity_Log (GitHub)_</p>
                </div>
                <div className="glass-container p-8 md:p-14 border-pink-500/10">
                  <Github />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default About;
