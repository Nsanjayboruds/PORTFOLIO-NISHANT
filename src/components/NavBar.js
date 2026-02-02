import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logoVideo from "../Assets/Nishant.mp4";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";

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
      className={`transition-all duration-500 ${
        navColour 
          ? "shadow-2xl neon-border" 
          : ""
      } py-2`}
      style={{
        background: navColour
          ? 'linear-gradient(135deg, rgba(10, 14, 39, 0.98) 0%, rgba(26, 21, 53, 0.98) 50%, rgba(45, 27, 105, 0.95) 100%)'
          : 'rgba(10, 14, 39, 0.5)',
        backdropFilter: 'blur(30px) saturate(200%)',
        borderBottom: navColour 
          ? '2px solid rgba(102, 126, 234, 0.4)' 
          : '1px solid rgba(102, 126, 234, 0.1)',
        boxShadow: navColour 
          ? '0 8px 40px rgba(102, 126, 234, 0.3), 0 0 30px rgba(0, 245, 255, 0.15)' 
          : 'none',
      }}
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
              className="h-16 w-16 rounded-full object-cover border-3 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-80 blur-lg -z-10 animate-pulse"></div>
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

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 mx-1"
              >
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn ml-2">
              <Button
                href="https://github.com/Nsanjayboruds/change"
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