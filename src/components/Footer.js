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
    <Container fluid className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 md:px-8 footer">
      <Row className="items-center">
        <Col md="4" className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Designed and Developed by Nishant Borude
          </h3>
        </Col>
        <Col md="4" className="mb-6 md:mb-0 text-center">
          <h3 className="text-lg font-semibold">
            Copyright © {year} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">NB</span>
          </h3>
        </Col>
        <Col md="4" className="text-center md:text-right">
          <ul className="flex justify-center md:justify-end space-x-6 footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Nsanjayboruds"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 text-white text-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-110"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 text-white text-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-110"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nishant-borude-554293311/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 text-white text-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 text-white text-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-110"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>
    </Container>
  );
}

export default Footer;