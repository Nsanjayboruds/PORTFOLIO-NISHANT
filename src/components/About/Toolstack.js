import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiStreamlit,
} from "react-icons/si";

function Toolstack() {
  // Tools data with names for tooltips
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <SiSlack />, name: "Slack", color: "#4A154B" },
    { icon: <SiVercel />, name: "Vercel", color: "#000000" },
    { icon: <SiStreamlit />, name: "Streamlit", color: "#FF4B4B" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {tools.map((tool, index) => (
        <Col 
          key={index} 
          xs={4} 
          md={2} 
          className="tech-icons mb-4"
          style={{ position: "relative" }}
        >
          <div 
            className="tool-icon-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div 
              className="icon-wrapper p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {React.cloneElement(tool.icon, { 
                style: { color: tool.color, fontSize: "2.2rem" } 
              })}
            </div>
            <div 
              className="tool-name mt-3 text-sm text-gray-400 font-medium opacity-0 transition-opacity duration-300"
              style={{
                position: "absolute",
                bottom: "-25px",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
            >
              {tool.name}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;