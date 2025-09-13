import React, { useState, useEffect } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import Particles from "../Particles";

function Education() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="education-section relative min-h-screen overflow-hidden">
        
            {/* Particle background */}
            <div className="particle-bg fixed top-0 left-0 w-full h-full -z-10">
                <Particles
                    particleColors={["#8b5cf6", "#ec4899", "#ffffff"]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Foreground content */}
            <div className="education-content-wrapper py-16 md:py-24 px-4">
                <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'} text-center mb-16`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Education</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        My academic journey and qualifications that shaped my technical expertise
                    </p>
                </div>

                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <VerticalTimeline lineColor="linear-gradient(to bottom, #8b5cf6, #ec4899)">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2023 - 2027"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                                color: "#fff",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "16px",
                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                            }}
                            contentArrowStyle={{ 
                                borderRight: "7px solid rgba(139, 92, 246, 0.3)" 
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                                color: "#fff",
                                boxShadow: "0 0 0 4px rgba(139, 92, 246, 0.3)",
                            }}
                            icon={<FaGraduationCap className="text-xl" />}
                            visible={true}
                        >
                            <div className="education-card-content">
                                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    B.Tech in Computer Science and Engineering
                                </h3>
                                <h4 className="text-lg font-semibold text-gray-200 mt-2">
                                    GH Raisoni College of Engineering, Jalgaon
                                </h4>
                                <div className="flex items-center mt-3 text-sm text-gray-400">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    2023 - 2027 (Expected)
                                </div>
                                <ul className="timeline-points mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        CGPA: 8.12 (Till 4th Semester)
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        Specializing in Full Stack Development
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        Active participant in coding competitions and hackathons
                                    </li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2022 - 2023"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                                color: "#fff",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "16px",
                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                            }}
                            contentArrowStyle={{ 
                                borderRight: "7px solid rgba(0, 255, 200, 0.3)" 
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #00ffc8 0%, #00b3ff 100%)",
                                color: "#fff",
                                boxShadow: "0 0 0 4px rgba(0, 255, 200, 0.3)",
                            }}
                            icon={<FaGraduationCap className="text-xl" />}
                            visible={true}
                        >
                            <div className="education-card-content">
                                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    HSC (12th Grade)
                                </h3>
                                <h4 className="text-lg font-semibold text-gray-200 mt-2">
                                    Chhatrapati Shivaji Junior College
                                </h4>
                                <div className="flex items-center mt-3 text-sm text-gray-400">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    2022 - 2023
                                </div>
                                <ul className="timeline-points mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                                        Percentage: 70%
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                                        PCM (Physics, Chemistry, Mathematics)
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                                        Developed strong foundation in logical reasoning
                                    </li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

                {/* Additional Info */}
                <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-center mt-16`}>
                    <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-200 mb-4">Continuous Learning</h3>
                        <p className="text-gray-300">
                            Beyond formal education, I continuously enhance my skills through online courses, 
                            personal projects, and participating in coding communities and open-source projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
