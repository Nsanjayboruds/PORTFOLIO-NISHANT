import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container 
      fluid 
      className="py-12 px-4 md:px-8 relative overflow-hidden bg-aatreyve border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <Row className="items-center relative z-10">
        <Col md="4" className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            Engineered_by <span className="text-white aatreyve-glow">Nishant Borude</span>
          </h3>
        </Col>
        <Col md="4" className="mb-6 md:mb-0 text-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            {year}_MOD_LOG // <span className="text-cyan-400">AUTHENTICATED</span>
          </h3>
        </Col>
        <Col md="4" className="text-center md:text-right">
          <ul className="flex justify-center md:justify-end space-x-4">
            {[
              { icon: <AiFillGithub />, url: "https://github.com/Nsanjayboruds" },
              { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/nishant-borude-554293311/" },
              { icon: <AiOutlineTwitter />, url: "https://twitter.com" },
              { icon: <AiFillInstagram />, url: "https://www.instagram.com" }
            ].map((social, i) => (
              <li key={i}>
                <a
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-white/10 text-slate-400 text-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-500 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;