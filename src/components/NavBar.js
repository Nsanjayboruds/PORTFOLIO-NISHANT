import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logoVideo from "../Assets/Nishant.mp4";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Close navbar when route changes
  useEffect(() => {
    updateExpanded(false);
  }, [location]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`transition-all duration-300 ${
        navColour 
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      } py-2`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <div className="relative">
            <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-16 w-16 rounded-full object-cover border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 p-0.5 shadow-lg shadow-cyan-500/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-70 blur-md -z-10"></div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
          className="border-0 focus:ring-0 focus:outline-none"
        >
          <div className="flex flex-col justify-center w-6 h-6 gap-1">
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${expand ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${expand ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${expand ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-end">
          <Nav className="items-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 mx-1"
              >
               
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 mx-1"
              >
                {/* <AiOutlineUser className="mr-1" />  */}
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 mx-1"
              >
                {/* <AiOutlineFundProjectionScreen className="mr-1" /> */}
                 Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 mx-1"
              >
                {/* <CgFileDocument className="mr-1" /> */}
                 Resume
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/experience"
                onClick={() => updateExpanded(false)}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 mx-1"
              >
                {/* <CgFileDocument className="mr-1" />  */}
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 mx-1"
              >
                {/* <CgFileDocument className="mr-1" />  */}
                Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn ml-2">
              <Button
                href="https://github.com/NishantBorude/portfolio"
                target="_blank"
                className="fork-btn-inner bg-gradient-to-r from-cyan-500 to-purple-500 border-0 text-white flex items-center px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
              >
                <CgGitFork className="mr-1" />
                 ⭐
                {/* <AiFillStar className="mr-1" /> */}
                Star
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      {/* Custom styles for the expanded navbar on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .navbar-collapse {
            background: rgba(17, 24, 39, 0.98);
            backdrop-filter: blur(10px);
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
          .navbar-collapse .nav-link {
            margin: 0.25rem 0;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;