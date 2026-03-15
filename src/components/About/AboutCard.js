import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view border-0 bg-transparent">
      <Card.Body className="p-0">
        <blockquote className="blockquote mb-0 space-y-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-cyan-400/50">STREAM_ACTIVE</span>
          </div>
          
          <p className="text-slate-300 text-left leading-relaxed text-xl md:text-2xl font-light">
            Greetings_ <br/><br/>
            I am <span className="relative inline-block group/name">
              <span className="text-white font-black aatreyve-glow glitch-text" data-text="Nishant Borude">Nishant Borude</span>
              {/* Biometric Scanning Beam */}
              <div className="bio-scan-beam animate-bio-scan opacity-0 group-hover/name:opacity-100 transition-opacity"></div>
              <div className="absolute -top-6 left-0 text-[8px] font-black text-cyan-500 opacity-0 group-hover/name:opacity-100 transition-opacity tracking-[0.4em]">
                BIO_IDENTITY: VERIFIED
              </div>
            </span>, 
            originating from <span className="text-cyan-400 font-bold">Jalgaon, India.</span>
            <br /><br />
            An <span className="text-purple-400 font-bold italic underline decoration-purple-500/30 underline-offset-8">Advanced Full-Stack Architect</span> currently decrypting the complexities of software engineering at G. H. Raisoni College.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">Secondary_Processes:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Neuro-Gaming_Engagements", id: "0xGE" },
                { name: "Technical_Manuscript_Synthesis", id: "0xMS" },
                { name: "Kinetic_Expeditions (Travel)", id: "0xKE" },
                { name: "Cyber-Infrastructure_Exploration", id: "0xIE" }
              ].map((activity, i) => (
                <li key={i} className="flex items-center justify-between gap-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase p-3 border border-slate-800 rounded-lg hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(0,245,255,0.8)] group-hover:scale-150 transition-transform"></div>
                    {activity.name}
                  </div>
                  <span className="text-[8px] text-slate-600 group-hover:text-cyan-500/50 transition-colors font-mono tracking-tighter">
                    NODE_ID: {activity.id}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-slate-800/50">
            <p className="text-2xl md:text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 aatreyve-glow-strong lowercase">
              "engineering_digital_evolution_"
            </p>
            <footer className="mt-4 text-slate-600 text-[10px] uppercase tracking-[0.5em] font-bold">
              // Authenticated_Node: NISHANT_BORUDE
            </footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;