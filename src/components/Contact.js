import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "./Particles";
import { AiFillGithub, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactLinks = [
    {
      id: 1,
      icon: AiFillGithub,
      label: "GitHub",
      url: "https://github.com/Nsanjayboruds",
      color: "hover:text-cyan-400"
    },
    {
      id: 2,
      icon: FaLinkedinIn,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nishant-borude-554293311/",
      color: "hover:text-blue-400"
    },
    {
      id: 3,
      icon: AiOutlineTwitter,
      label: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-sky-400"
    },
    {
      id: 4,
      icon: AiOutlineMail,
      label: "Email",
      url: "mailto:nishantborude.dev@gmail.com",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Particles />
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 opacity-20 animate-gradient -z-5"></div>

      <Container fluid className="py-20 px-4">
        <Container>
          <Row className="justify-center">
            <Col lg={8} className="text-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                    Let's Work Together
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                {/* Email CTA */}
                <div className="mb-12">
                  <a
                    href="mailto:nishantborude.dev@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:from-cyan-600 hover:to-blue-600 text-lg"
                  >
                    <AiOutlineMail className="text-2xl" />
                    Send Me an Email
                  </a>
                </div>

                {/* Or Section */}
                <div className="flex items-center gap-4 mb-12">
                  <div className="flex-grow h-px bg-gradient-to-r from-transparent to-cyan-400/30"></div>
                  <span className="text-gray-400 font-medium">Or connect via</span>
                  <div className="flex-grow h-px bg-gradient-to-l from-transparent to-cyan-400/30"></div>
                </div>

                {/* Social Links */}
                <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="flex justify-center gap-6 flex-wrap mb-12">
                    {contactLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 border border-gray-700 text-2xl text-gray-300 transition-all duration-300 hover:border-cyan-500 hover:bg-gray-800 ${link.color} hover:scale-125 hover:shadow-lg hover:shadow-cyan-500/30`}
                          title={link.label}
                        >
                          <Icon />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Links Section */}
                <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'} mt-16 pt-12 border-t border-gray-700/50`}>
                  <p className="text-gray-400 mb-6">Quick Links</p>
                  <Row className="gap-4">
                    <Col md={3} sm={6} className="text-center">
                      <a
                        href="/resume"
                        className="inline-block px-6 py-2 rounded-full border-2 border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-200"
                      >
                        View Resume
                      </a>
                    </Col>
                    <Col md={3} sm={6} className="text-center">
                      <a
                        href="/project"
                        className="inline-block px-6 py-2 rounded-full border-2 border-purple-400 text-purple-300 font-semibold hover:bg-purple-400/10 transition-all duration-300 hover:border-purple-300 hover:text-purple-200"
                      >
                        View Projects
                      </a>
                    </Col>
                    <Col md={3} sm={6} className="text-center">
                      <a
                        href="/about"
                        className="inline-block px-6 py-2 rounded-full border-2 border-pink-400 text-pink-300 font-semibold hover:bg-pink-400/10 transition-all duration-300 hover:border-pink-300 hover:text-pink-200"
                      >
                        About Me
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
