import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view border-0 bg-transparent">
      <Card.Body className="p-0">
        <blockquote className="blockquote mb-0">
          <p className="text-gray-300 text-justify leading-relaxed text-lg">
            Hi Everyone, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">Nishant Borude</span>
            from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">Jalgaon, Maharashtra.</span>
            <br />
            <br />
            I am currently pursuing my B.Tech at G. H. Raisoni College of Engineering, Jalgaon.
            <br />
            I am a passionate programmer and a web developer with a keen interest in building web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          
          <ul className="mt-4 space-y-2">
            <li className="about-activity flex items-center text-gray-300">
              <ImPointRight className="text-purple-400 mr-3 flex-shrink-0" />
              Playing Games
            </li>
            <li className="about-activity flex items-center text-gray-300">
              <ImPointRight className="text-purple-400 mr-3 flex-shrink-0" />
              Writing Tech Blogs
            </li>
            <li className="about-activity flex items-center text-gray-300">
              <ImPointRight className="text-purple-400 mr-3 flex-shrink-0" />
              Travelling
            </li>
          </ul>

          <p className="mt-6 text-xl italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer mt-2 text-gray-400 text-sm">
            NISHANT
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;