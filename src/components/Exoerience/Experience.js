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
    <section className="experience-section relative min-h-screen overflow-hidden">
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
      <div className="experience-content-wrapper py-16 md:py-24 px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'} text-center mb-16`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here's a timeline of my professional journey and contributions
          </p>
        </div>

        <div className="experience-timeline max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-card-container ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'} transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="experience-card bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700/50 relative overflow-hidden">
                {/* Timeline connector */}
                <div className={`timeline-connector ${index % 2 === 0 ? 'left-connector' : 'right-connector'}`}></div>
                
                {/* Decorative icon */}
                <div className={`experience-icon ${index % 2 === 0 ? 'left-icon' : 'right-icon'}`}>
                  <span className="text-2xl">{exp.icon}</span>
                </div>
                
                <div className="experience-content">
                  <div className="flex items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-200 mt-1">{exp.company}</h4>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.date}
                    </span>
                    <span className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  
                  {/* Status indicator for current positions */}
                  {(exp.date.includes('Present') || exp.date.includes('Current')) && (
                    <div className="flex items-center mt-4 text-sm text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Currently active
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-center mt-16`}>
          <p className="text-gray-400 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;