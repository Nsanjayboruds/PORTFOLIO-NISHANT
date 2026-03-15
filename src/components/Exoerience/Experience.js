import React, { useState, useEffect } from 'react';
import './Experience.css';
import Particles from '../Particles';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
 const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'CommuSync',
    date: 'Aug 2025 – Present · 1 mo',
    location: 'Remote · India',
    description:
      'Working as a Full Stack Developer Intern on CommuSync, a collaborative communication platform. Contributing to frontend and backend development, feature implementation, bug fixes, and performance improvements.',
    icon: '🚀'
  },
{
  title: 'Open Source Contributor',
  company: 'Keploy',
  date: 'Aug 2025 – Present',
  location: 'Remote · India',
  description:
    'Contributing to Keploy, an open-source API testing and regression platform. Working on bug fixes, improving documentation, and contributing code through pull requests.',
  icon: '🧪',
  prLink: 'https://github.com/keploy/keploy/pull/3624'
},
  {
    title: 'Open Source Contributor',
    company: 'FOSSASIA',
    date: 'Aug 2025 – Present',
    location: 'Remote · India',
    description:
      'Contributing to FOSSASIA open-source projects by submitting pull requests, fixing issues, and collaborating with maintainers and the open-source community.',
    icon: '🌏',
    prLink: 'https://github.com/fossasia/scrum_helper/pull/325' // add your actual PR number/link
  },
  {
    title: 'Contributor – GirlScript Summer of Code 2025',
    company: 'GirlScript Summer of Code · Internship',
    date: 'Jul 2025 – Present · 2 mos',
    location: 'Remote · India',
    description:
      'Contributing to impactful open-source projects while enhancing technical skills and collaborating with mentors and fellow developers.',
    icon: '👩‍💻'
  },
];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-aatreyve">
      {/* Cinematic Cyber Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950 opacity-80"></div>
      
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-50">
        <Particles 
          particleColors={["#00f5ff", "#bf00ff"]}
          particleCount={100}
          speed={0.12}
        />
      </div>

      <div className="py-24 px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'} text-center mb-24`}>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
            <span className="text-white opacity-40 block text-sm uppercase tracking-[0.5em] mb-4">Operational_Timeline</span>
            EXPERIENCE <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text aatreyve-glow-strong">LOGS</span>
          </h1>
          <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Sequential deployment history of technical implementations and collaborative contributions across the digital landscape.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-8">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-600 to-transparent opacity-20 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative mb-20 md:mb-32 transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Timeline node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-cyan-500/30 bg-slate-900 flex items-center justify-center z-10 hidden md:flex shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <div className="glass-container p-8 md:p-10 border-cyan-500/10 hover:border-cyan-400 transition-all group cyber-card">
                    {/* Diagnostic metadata */}
                    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">ENTRY_0{index + 1}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-purple-400 transition-colors">{exp.date}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-white/10 text-2xl group-hover:scale-110 transition-transform">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white italic tracking-tighter uppercase group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{exp.company}</h4>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors">
                      {exp.description}
                    </p>

                    <div className="flex items-center text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                      <svg className="w-3 h-3 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {exp.location}
                    </div>
                    
                    {/* Status indicator */}
                    {(exp.date.includes('Present') || exp.date.includes('Current')) && (
                      <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-black text-[8px] font-black tracking-[0.2em] rounded-bl-lg">
                        ACTIVE_NODE
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty side for layout */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-center mt-24 mb-12`}>
          <div className="inline-block glass-container px-12 py-10 border-cyan-500/10 hover:border-cyan-500/30">
            <p className="text-slate-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Establish_Connection</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 tracking-tight italic uppercase">Collaborative <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 aatreyve-glow">Interfacing</span></h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm tracking-[0.2em] rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
            >
              INITIATE_CONTACT
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;