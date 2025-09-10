import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spline from "@splinetool/react-spline";
import Home2 from "./Home2";
import Type from "./Type";
import Particles from "../Particles";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 opacity-90 animate-gradient"></div>
      
      {/* Particles background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Particles
          particleColors={["#ffffff", "#ff6b6b", "#4ecdc4", "#45b7d1"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                    Hi There!{" "}
                  </span>
                  <span className="wave inline-block animate-wiggle" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                  I'M
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block mt-2">
                    NISHANT BORUDE
                  </strong>
                </h1>

                <div className="mb-10 text-left">
                  <Type />
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                    View My Work
                  </button>
                  <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-full hover:bg-cyan-400/10 transition-all duration-300">
                    Download CV
                  </button>
                </div>
              </div>
            </Col>

            <Col md={5} className="relative">
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                  <Spline scene="https://prod.spline.design/wusBdKcJteOBdL7Q/scene.splinecode" />
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute w-32 h-32 bg-cyan-400/20 rounded-full -top-10 -left-8 animate-float"></div>
                <div className="absolute w-24 h-24 bg-purple-400/20 rounded-full bottom-10 -right-6 animate-float delay-1000"></div>
                <div className="absolute w-16 h-16 bg-pink-400/20 rounded-full top-1/2 -left-4 animate-float delay-500"></div>
              </div>
            </Col>
          </Row>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-cyan-300/70">
            <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mb-2 animate-pulse"></div>
            <p className="text-sm">Scroll down</p>
          </div>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;