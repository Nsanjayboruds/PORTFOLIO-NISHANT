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
    <section className="relative overflow-hidden min-h-screen bg-aatreyve py-24">
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
        <Particles 
          particleColors={["#ffffff", "#00f5ff"]}
          particleCount={100}
        />
      </div>

      <Container className="relative z-10 px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'} text-center mb-24`}>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
            <span className="text-white opacity-40 block text-sm uppercase tracking-[0.5em] mb-4">Connection_Protocol</span>
            INITIATE <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text aatreyve-glow-strong">CONTACT</span>
          </h1>
          <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Ready to deploy new solutions or discuss technical collaborations? Establish a secure link below.
          </p>
        </div>

        <Row className="justify-center">
          <Col lg={10}>
            <div className={`glass-container p-12 md:p-16 border-white/5 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/30"></div>

              <div className="text-center">
                <div className="inline-block relative mb-12 group">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000"></div>
                  <a
                    href="mailto:nishantborude.dev@gmail.com"
                    className="relative z-10 inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,245,255,0.4)]"
                  >
                    <AiOutlineMail className="text-xl" />
                    ESTABLISH_EMAIL_LINK
                  </a>
                </div>

                <div className="flex items-center gap-6 mb-16">
                  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">OR_VIA_SOCIAL_MODUELS</span>
                  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-card flex flex-col items-center justify-center p-8 border-white/5 hover:border-cyan-500 group transition-all duration-500 hover:-translate-y-2 bg-slate-900/40"
                      >
                        <div className="text-3xl text-slate-500 group-hover:text-cyan-400 group-hover:scale-110 transition-all mb-4">
                          <Icon />
                        </div>
                        <span className="text-[10px] font-black text-slate-500 group-hover:text-white uppercase tracking-widest">{link.label}</span>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8">
                  {[
                    { label: "VIEW_RESUME", to: "/resume", color: "text-cyan-400 border-cyan-500/20" },
                    { label: "VIEW_PROJECTS", to: "/project", color: "text-purple-400 border-purple-500/20" },
                    { label: "ABOUT_ME", to: "/about", color: "text-pink-400 border-pink-500/20" }
                  ].map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.to}
                      className={`px-8 py-3 rounded-lg border-2 ${btn.color} text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-500`}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
