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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Particles />
      </div>

      {/* Foreground Content */}
      <Container fluid className="py-12 md:py-20 px-4">
        <Container>
          {/* Header Section */}
          <Row className="justify-center mb-12">
            <Col className="text-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                <h1 className=" text-[blue] text-4xl md:text-5xl font-bold mb-4">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Me</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Get to know my skills, tools, and passion for creating innovative solutions
                </p>
              </div>
            </Col>
          </Row>

          {/* Profile & About Card Section */}
          <Row className="justify-center items-start mb-20">
            <Col
              md={5}
              className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} py-6 flex justify-center`}
            >
              <ProfileCard
                name="NISHANT BORUDE"
                title="FULL STACK DEVELOPER"
                handle="NishantBorude"
                status="Available for opportunities"
                statusColor="bg-green-500"
                contactText="Get In Touch"
                avatarUrl={avatar}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.open('https://github.com/Nsanjayboruds', '_blank')}
                className="w-full max-w-md shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                nameClassName="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                titleClassName="text-gray-300"
                handleClassName="text-cyan-400"
              />
            </Col>
            
            <Col
              md={7}
              className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} py-6`}
            >
              <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50">
                <h2 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></span>
                  Who I Am
                </h2>
                <Aboutcard />
              </div>
            </Col>
          </Row>

          {/* Skillset Section */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'} mb-20`}>
            <div className="text-center mb-14">
              <h2 className=" text-[blue] text-3xl md:text-4xl font-bold mb-4">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Skillset</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Technologies I specialize in and use to bring ideas to life
              </p>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50">
              <Techstack />
            </div>
          </div>

          {/* Tools Section */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'} mb-20`}>
            <div className="text-center mb-14">
              <h2 className=" text-[blue] text-3xl md:text-4xl font-bold mb-4">
                Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Tools</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tools and environments that power my development workflow
              </p>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50">
              <Toolstack />
            </div>
          </div>

          {/* GitHub Section */}
          <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-14">
              <h2 className=" text-[blue] text-3xl md:text-4xl font-bold mb-4">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Code</span> Journey
              </h2>
              <p className="text-gray-400  max-w-2xl mx-auto">
                Exploring my contributions, projects, and coding activity
              </p>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50">
              <Github />
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default About;