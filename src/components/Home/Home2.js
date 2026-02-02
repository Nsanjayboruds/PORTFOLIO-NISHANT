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
    <Container fluid className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white" id="about">
      <Container>
        <Row className="items-center">
          <Col md={8} className="mb-10 md:mb-0">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                LET ME <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">INTRODUCE</span> MYSELF
              </h1>
              <div className="text-lg leading-8 space-y-4">
                <p>
                  I fell in love with programming and I have at least learnt
                  something, I think… 🤷‍♂️
                </p>
                <p>
                  I am fluent in classics like
                  <span className="font-bold text-purple-400"> C++, Javascript. </span>
                </p>
                <p>
                  My field of Interest's are building new &nbsp;
                  <span className="font-bold text-purple-400">Web Technologies and Products </span> 
                  and also in areas related to{" "}
                  <span className="font-bold text-purple-400">
                    AI and Machine Learning.
                  </span>
                </p>
                <p>
                  Whenever possible, I also apply my passion for developing products
                  with <span className="font-bold text-purple-400">Node.js</span> and
                  <span className="font-bold text-purple-400">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </span>
                  &nbsp; like
                  <span className="font-bold text-purple-400"> React.js and Next.js</span>
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="flex justify-center">
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <Tilt
                tiltEnable={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="50%"
                className="rounded-full shadow-2xl shadow-purple-500/20"
              >
                <div className="relative">
                  <img 
                    src={myImg} 
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 p-1" 
                    alt="avatar" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-md -z-10"></div>
                </div>
              </Tilt>
            </div>
          </Col>
        </Row>
        <Row className="mt-16 md:mt-24">
          <Col md={12} className="text-center">
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">FIND ME ON</h1>
              <p className="text-lg mb-8">
                Feel free to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">connect</span> with me
              </p>
              <ul className="flex justify-center space-x-6">
                <li className="social-icons">
                  <a
                    href="https://github.com/Nsanjayboruds"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/nishant-borude-554293311/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
               
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;