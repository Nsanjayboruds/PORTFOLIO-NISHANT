import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  // Technology data with names for tooltips
  const technologies = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <DiPython />, name: "Python" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {technologies.map((tech, index) => (
        <Col 
          key={index} 
          xs={4} 
          md={2} 
          className="tech-icons mb-4"
          style={{ position: "relative" }}
        >
          <div 
            className="tech-icon-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div 
              className="icon-wrapper p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {tech.icon}
            </div>
            <div 
              className="tech-name mt-2 text-xs text-gray-400 font-medium opacity-0 transition-opacity duration-300"
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
            >
              {tech.name}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;