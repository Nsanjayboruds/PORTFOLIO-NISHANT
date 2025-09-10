import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Particles from "../Particles";
import FuzzyText from "../FuzzyText";
import { useNavigate } from "react-router-dom";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Optional: Define hover effect props
  const hoverIntensity = 0.4;
  const enableHover = true;

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsVisible(true);
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoToProjects = () => {
    navigate("/projects");
  };

  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Background Particles */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#c084f5", "#ec4899"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Resume Section */}
      <Container
        id="resume"
        className="resume-section d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh", textAlign: "center", padding: "2rem" }}
      >
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={hoverIntensity}
            enableHover={enableHover}
            className="text-7xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
          >
            404
          </FuzzyText>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
            Resume Not Found
          </h2>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            It seems my resume is currently unavailable or being updated. 
            Please check back later or explore my projects in the meantime.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGoHome}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border-0"
            >
              Go Back Home
            </Button>
            
            <Button
              onClick={handleGoToProjects}
              variant="outline-light"
              className="px-6 py-3 rounded-full border-2 text-white font-medium hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Projects
            </Button>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'} mt-12`}>
          <div className="text-gray-500 text-sm">
            <p>In the meantime, you can:</p>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>Check out my GitHub</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span>Contact me directly</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span>Read my blog posts</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ResumeNew;