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
      className={`transition-all duration-700 ${
        navColour 
          ? "py-2 backdrop-blur-2xl bg-black/60 border-b border-cyan-500/20 shadow-[0_8px_40px_rgba(0,0,0,0.5)]" 
          : "py-4 bg-transparent"
      }`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex group">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/40 transition-all duration-700"></div>
              {logoVideo ? (
                <video
                  src={logoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover relative z-10 border border-white/10 p-0.5"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-900 border border-white/10 relative z-10 flex items-center justify-center text-white font-black italic">
                  NB
                </div>
              )}
            </div>
            <span className="text-xl md:text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-cyan-400 transition-colors aatreyve-glow">
              NISHANT_BORUDE
            </span>
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
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Projects", to: "/project" },
              { label: "Experience", to: "/experience" },
              { label: "Education", to: "/education" },
              { label: "Contact", to: "/contact" }
            ].map((item) => (
              <Nav.Item key={item.to}>
                <Nav.Link 
                  as={Link} 
                  to={item.to}
                  onClick={() => updateExpanded(false)}
                  className={`relative flex items-center text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 mx-1 transition-all duration-500 overflow-hidden group ${
                    location.pathname === item.to ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-cyan-500 transition-all duration-500 ${
                    location.pathname === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="fork-btn md:ml-6">
              <Button
                href="https://github.com/Nsanjayboruds/change"
                target="_blank"
                className="bg-white hover:bg-cyan-400 text-black border-0 px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all duration-500 shadow-[0_0_20px_rgba(0,245,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)]"
              >
                <CgGitFork />
                STAR_REPO
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