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
        <section className="relative min-h-screen overflow-hidden bg-aatreyve">
            {/* Cinematic Cyber Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-indigo-950 to-slate-950 opacity-80"></div>
        
            {/* Particle background */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40">
                <Particles
                    particleColors={["#0ea5e9", "#8b5cf6"]}
                    particleCount={120}
                    speed={0.15}
                />
            </div>

            {/* Foreground content */}
            <div className="py-24 px-4 relative z-10">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'} text-center mb-24`}>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
                        <span className="text-white opacity-40 block text-sm uppercase tracking-[0.5em] mb-4">Academic_Archives</span>
                        EDUCATION <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text aatreyve-glow-strong">LOGS</span>
                    </h1>
                    <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                        Chronological record of academic deployments and technical specialization history.
                    </p>
                </div>

                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <VerticalTimeline lineColor="rgba(0, 245, 255, 0.1)">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2023 - 2027"
                            contentStyle={{
                                background: "rgba(15, 23, 42, 0.6)",
                                backdropFilter: "blur(20px)",
                                color: "#fff",
                                border: "1px solid rgba(0, 245, 255, 0.1)",
                                borderRadius: "20px",
                                boxShadow: "none",
                                padding: "0"
                            }}
                            contentArrowStyle={{ 
                                borderRight: "7px solid rgba(0, 245, 255, 0.1)" 
                            }}
                            iconStyle={{
                                background: "#0f172a",
                                color: "#00f5ff",
                                boxShadow: "0 0 0 4px rgba(0, 245, 255, 0.1)",
                            }}
                            icon={<FaGraduationCap />}
                            visible={true}
                        >
                            <div className="p-8 group cyber-card">
                                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">SESSION_B.TECH</span>
                                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-purple-400 transition-colors">2023 - 2027 (EST)</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-white italic tracking-tighter uppercase group-hover:text-cyan-400 transition-colors">
                                    COMPUTER SCIENCE & ENGINEERING
                                </h3>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">
                                    G. H. RAISONI COLLEGE, JALGAON
                                </h4>
                                
                                <ul className="mt-8 space-y-4">
                                  {[
                                    "CGPA: 8.12 (Accumulated_Status)",
                                    "Core_Specialization: Full Stack Systems",
                                    "Operational_Activity: Hackathon_Lead"
                                  ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[11px] font-bold tracking-widest text-slate-400 uppercase p-3 border border-slate-800 rounded-lg group-hover:border-cyan-500/20 transition-all">
                                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(0,245,255,0.8)]"></div>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                            </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2022 - 2023"
                            contentStyle={{
                                background: "rgba(15, 23, 42, 0.6)",
                                backdropFilter: "blur(20px)",
                                color: "#fff",
                                border: "1px solid rgba(8, 145, 178, 0.1)",
                                borderRadius: "20px",
                                boxShadow: "none",
                                padding: "0"
                            }}
                            contentArrowStyle={{ 
                                borderRight: "7px solid rgba(8, 145, 178, 0.1)" 
                            }}
                            iconStyle={{
                                background: "#0f172a",
                                color: "#06b6d4",
                                boxShadow: "0 0 0 4px rgba(8, 145, 178, 0.1)",
                            }}
                            icon={<FaGraduationCap />}
                            visible={true}
                        >
                            <div className="p-8 group cyber-card">
                                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">SESSION_HSC</span>
                                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-purple-400 transition-colors">2022 - 2023</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-white italic tracking-tighter uppercase group-hover:text-cyan-400 transition-colors">
                                    SECONDARY EDUCATION (12TH)
                                </h3>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">
                                    CHHATRAPATI SHIVAJI COLLEGE
                                </h4>
                                
                                <ul className="mt-8 space-y-4">
                                  {[
                                    "Score_Metric: 70%",
                                    "Discipline: Physics, Chemistry, Math",
                                    "Foundational_Logic: Core Analytics"
                                  ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[11px] font-bold tracking-widest text-slate-400 uppercase p-3 border border-slate-800 rounded-lg group-hover:border-cyan-500/20 transition-all">
                                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(0,245,255,0.8)]"></div>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

                {/* Additional Info */}
                <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-center mt-24 mb-12`}>
                    <div className="inline-block glass-container px-12 py-10 border-cyan-500/10 hover:border-cyan-500/30 transition-all max-w-4xl">
                        <p className="text-slate-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Continuous_Learning_Protocol</p>
                        <h2 className="text-xl md:text-2xl font-black text-white mb-6 tracking-tight uppercase italic">PERPETUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 aatreyve-glow">KNOWLEDGE_ACQUISITION</span></h2>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                            Beyond institutional deployments, I am in a state of constant upgrade through peer-reviewed research, 
                            personal laboratory projects, and active participation in global open-source infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
