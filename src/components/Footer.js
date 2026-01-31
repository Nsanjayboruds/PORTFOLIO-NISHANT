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
      className="text-white py-12 px-4 md:px-8 footer relative overflow-hidden bg-slate-900 border-t border-slate-800"
      style={{
        backdropFilter: 'blur(20px)'
      }}
    >
      <Row className="items-center">
        <Col md="4" className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-sm font-medium text-slate-300">
            Designed and Developed by Nishant Borude
          </h3>
        </Col>
        <Col md="4" className="mb-6 md:mb-0 text-center">
          <h3 className="text-sm font-medium text-slate-300">
            Copyright © {year} <span className="text-white font-semibold">NB</span>
          </h3>
        </Col>
        <Col md="4" className="text-center md:text-right">
          <ul className="flex justify-center md:justify-end space-x-6 footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Nsanjayboruds"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full text-slate-300 text-lg transition-all duration-300 hover:text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600"
                style={{}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(203, 213, 225, 0.6)';
                }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full text-slate-300 text-lg transition-all duration-300 hover:text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600"
                style={{}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(203, 213, 225, 0.6)';
                }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nishant-borude-554293311/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full text-slate-300 text-lg transition-all duration-300 hover:text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600"
                style={{}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(203, 213, 225, 0.6)';
                }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full text-slate-300 text-lg transition-all duration-300 hover:text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600"
                style={{}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(203, 213, 225, 0.6)';
                }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;